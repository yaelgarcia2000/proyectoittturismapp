import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceTransportItem} from './cardServiceTransportItem';

import {getTransportes} from '../../api';

export const CardAllTransportes = () => {
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
      contentContainerStyle={{paddingLeft: 10}}
      data={transportes}
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
