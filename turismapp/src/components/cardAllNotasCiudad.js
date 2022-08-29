import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardNotasCiudadesItem} from './cardNotasCiudadesItem';

import {getNotasCiudades} from '../../api';

export const CardAllNotasCiudad = () => {
  const [notasCiudades, setNotasCiudades] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadNotasCiudades = async () => {
    const data = await getNotasCiudades();
    setNotasCiudades(data);
  };

  useEffect(() => {
    loadNotasCiudades();
  }, []);

  const renderItem = ({item}) => {
    return <CardNotasCiudadesItem notasCiudades={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadNotasCiudades();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={notasCiudades}
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
