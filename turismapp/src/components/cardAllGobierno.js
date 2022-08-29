import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceGovernmentItem} from './cardServiceGovernmentItem';

import {getEstablecimientosGobierno} from '../../api';

export const CardAllGobierno = () => {
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
      contentContainerStyle={{paddingLeft: 10}}
      data={establecimientosGobierno}
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
