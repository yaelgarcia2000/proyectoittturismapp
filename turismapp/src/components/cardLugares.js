import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardLugaresItem} from './cardLugaresItem';

import {getCiudades} from '../../api';

export const CardLugares = () => {
  const [ciudades, setCiudades] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadCiudades = async () => {
    const data = await getCiudades();
    setCiudades(data);
  };

  useEffect(() => {
    loadCiudades();
  }, []);

  const renderItem = ({item}) => {
    return <CardLugaresItem ciudades={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadCiudades();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={ciudades}
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
