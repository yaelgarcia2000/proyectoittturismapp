import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardLugaresItem} from './cardLugaresItem';
const {width} = Dimensions.get('screen');
import {getCiudades} from '../../api';

export const CardLugaresHome = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={ciudades}
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
