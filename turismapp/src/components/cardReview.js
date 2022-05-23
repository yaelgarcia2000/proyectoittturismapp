import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardReviewItem} from './cardReviewItem';
const {width} = Dimensions.get('screen');
import {getResenias} from '../../api';

export const CardReview = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={resenias}
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
