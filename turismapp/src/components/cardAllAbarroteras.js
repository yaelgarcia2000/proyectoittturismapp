import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceShopItem} from './cardServiceShopItem';

import {getAbarroteras} from '../../api';

export const CardAllAbarroteras = () => {
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
      contentContainerStyle={{paddingLeft: 10}}
      data={abarroteras}
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
