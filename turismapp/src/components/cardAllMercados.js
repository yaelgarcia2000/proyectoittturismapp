import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceMarketItem} from './cardServiceMarketItem';

import {getMercados} from '../../api';

export const CardAllMercados = () => {
  const [mercados, setMercados] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadMercados = async () => {
    const data = await getMercados();
    setMercados(data);
  };

  useEffect(() => {
    loadMercados();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceMarketItem mercados={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadMercados();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={mercados}
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
