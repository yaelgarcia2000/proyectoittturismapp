import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardServiceBankItem} from './cardServiceBankItem';
const {width} = Dimensions.get('screen');
import {getBancos} from '../../api';

export const CardServiceBank = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={bancos}
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
