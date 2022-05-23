import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceGovernmentItem} from './cardServiceGovernmentItem';
const {width} = Dimensions.get('screen');
import {getEstablecimientosGobierno} from '../../api';

export const CardServiceGovernment = () => {
  const [establecimientosGobierno, setEstablecimientosGobierno] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadEstablecimientosGobierno = async () => {
    const data = await getEstablecimientosGobierno();
    setEstablecimientosGobierno(data);
  };

  useEffect(() => {
    loadEstablecimientosGobierno();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceGovernmentItem establecimientosGobierno={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadEstablecimientosGobierno();
    setRefresing(false);
  });

  return (
    <FlatList
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={establecimientosGobierno}
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
