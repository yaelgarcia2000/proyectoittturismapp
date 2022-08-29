import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardReviewItem} from './cardReviewItem';

import {getResenias} from '../../api';

export const CardAllResenias = () => {
  const [resenias, setResenias] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadResenias = async () => {
    const data = await getResenias();
    setResenias(data);
  };

  useEffect(() => {
    loadResenias();
  }, []);

  const renderItem = ({item}) => {
    return <CardReviewItem resenias={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadResenias();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={resenias}
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
