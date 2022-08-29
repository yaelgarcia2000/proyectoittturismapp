import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardTouristAreaItem} from './cardTouristAreaItem';

import {getZonaTuristica} from '../../api';

export const CardAllZonasTuristicas = () => {
  const [zonaTuristica, setZonaTuristica] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadZonaTuristica = async () => {
    const data = await getZonaTuristica();
    setZonaTuristica(data);
  };

  useEffect(() => {
    loadZonaTuristica();
  }, []);

  const renderItem = ({item}) => {
    return <CardTouristAreaItem zonaTuristica={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadZonaTuristica();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={zonaTuristica}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          colors={[COLORS.dark]}
          onRefresh={onRefresh}
          progressBackgroundColor={COLORS.grey}
        />
      }
    />
  );
};
