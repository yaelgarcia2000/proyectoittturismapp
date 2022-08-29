import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardFestivityItem} from './cardFestivityItem';

import {getFestividades} from '../../api';

export const CardAllFestividades = () => {
  const [festividades, setFestividades] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadFestividades = async () => {
    const data = await getFestividades();
    setFestividades(data);
  };

  useEffect(() => {
    loadFestividades();
  }, []);

  const renderItem = ({item}) => {
    return <CardFestivityItem festividades={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadFestividades();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={festividades}
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
