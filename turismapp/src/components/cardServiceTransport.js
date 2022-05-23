import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceTransportItem} from './cardServiceTransportItem';
const {width} = Dimensions.get('screen');
import {getTransportes} from '../../api';

export const CardServiceTransport = () => {
  const [transportes, setTransportes] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadTransportes = async () => {
    const data = await getTransportes();
    setTransportes(data);
  };

  useEffect(() => {
    loadTransportes();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceTransportItem transportes={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadTransportes();
    setRefresing(false);
  });

  return (
    <FlatList
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={transportes}
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
