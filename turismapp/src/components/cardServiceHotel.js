import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceHotelItem} from './cardServiceHotelItem';
const {width} = Dimensions.get('screen');
import {getHoteles} from '../../api';

export const CardServiceHotel = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={hoteles}
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
