import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardDishItem} from './cardDishItem';

import {getPlatillos} from '../../api';

export const CardAllPlatilos = () => {
  const [platillos, setPlatillos] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadPlatillos = async () => {
    const data = await getPlatillos();
    setPlatillos(data);
  };

  useEffect(() => {
    loadPlatillos();
  }, []);

  const renderItem = ({item}) => {
    return <CardDishItem platillos={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadPlatillos();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={platillos}
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
