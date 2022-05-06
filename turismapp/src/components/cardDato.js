import React, {useState, useEffect} from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {FlatList, RefreshControl, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import {CardDatosItem} from './cardDatosItem';

import {getDatos} from '../../api';

export const CardDato = () => {
  const [datos, setDatos] = useState([]);
  const [refresing, setRefresing] = useState(false);

  const loadDatos = async () => {
    const data = await getDatos();
    setDatos(data);
  };

  useEffect(() => {
    loadDatos();
  }, []);

  const renderItem = ({item}) => {
    return <CardDatosItem datos={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadDatos();
    setRefresing(false);
  });

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{
        marginRight: 10,
      }}
      data={datos}
      renderItem={renderItem}
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
