import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceMarketItem} from './cardServiceMarketItem';
const {width} = Dimensions.get('screen');
import {getMercados} from '../../api';

export const CardServiceMarket = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={mercados}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
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
