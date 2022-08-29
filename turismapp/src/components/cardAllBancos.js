import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardServiceBankItem} from './cardServiceBankItem';

import {getBancos} from '../../api';

export const CardAllBancos = () => {
  const [bancos, setBancos] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadBancos = async () => {
    const data = await getBancos();
    setBancos(data);
  };

  useEffect(() => {
    loadBancos();
  }, []);

  const renderItem = ({item}) => {
    return <CardServiceBankItem bancos={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadBancos();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={bancos}
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
