import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceSupermarketItem} from './cardServiceSupermarketItem';

import {getSupermercados} from '../../api';

export const CardAllSuperMercados = () => {
  const [supermercados, setSupermercados] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadSupermercados = async () => {
    const data = await getSupermercados();
    setSupermercados(data);
  };

  useEffect(() => {
    loadSupermercados();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceSupermarketItem supermercados={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadSupermercados();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={supermercados}
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
