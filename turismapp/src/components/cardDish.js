import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardDishItem} from './cardDishItem';
const {width} = Dimensions.get('screen');
import {getPlatillos} from '../../api';

export const CardDish = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={platillos}
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
