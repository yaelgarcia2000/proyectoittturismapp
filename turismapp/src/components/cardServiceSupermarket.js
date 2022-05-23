import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceSupermarketItem} from './cardServiceSupermarketItem';
const {width} = Dimensions.get('screen');
import {getSupermercados} from '../../api';

export const CardServiceSupermarket = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={supermercados}
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
