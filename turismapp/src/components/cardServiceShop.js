import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceShopItem} from './cardServiceShopItem';
const {width} = Dimensions.get('screen');
import {getAbarroteras} from '../../api';

export const CardServiceShop = () => {
  const [abarroteras, setAbarroteras] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadAbarroteras = async () => {
    const data = await getAbarroteras();
    setAbarroteras(data);
  };

  useEffect(() => {
    loadAbarroteras();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceShopItem abarroteras={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadAbarroteras();
    setRefresing(false);
  });

  return (
    <FlatList
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={abarroteras}
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
