import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardFestivityItem} from './cardFestivityItem';
const {width} = Dimensions.get('screen');
import {getFestividades} from '../../api';

export const CardFestivity = () => {
  const [festividades, setFestividades] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadFestividades = async () => {
    const data = await getFestividades();
    setFestividades(data);
  };

  useEffect(() => {
    loadFestividades();
  }, []);

  const renderItem = ({item}) => {
    return <CardFestivityItem festividades={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadFestividades();
    setRefresing(false);
  });

  return (
    <FlatList
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={festividades}
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
