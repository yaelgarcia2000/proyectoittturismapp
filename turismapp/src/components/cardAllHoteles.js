import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceHotelItem} from './cardServiceHotelItem';

import {getHoteles} from '../../api';

export const CardAllHoteles = () => {
  const [hoteles, setHoteles] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadHoteles = async () => {
    const data = await getHoteles();
    setHoteles(data);
  };

  useEffect(() => {
    loadHoteles();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceHotelItem hoteles={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadHoteles();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={hoteles}
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
