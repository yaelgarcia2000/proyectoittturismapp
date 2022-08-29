import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceRestaurantItem} from './cardServiceRestaurantItem';

import {getRestaurantes} from '../../api';

export const CardAllRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadRestaurantes = async () => {
    const data = await getRestaurantes();
    setRestaurantes(data);
  };

  useEffect(() => {
    loadRestaurantes();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceRestaurantItem restaurantes={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadRestaurantes();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={restaurantes}
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
