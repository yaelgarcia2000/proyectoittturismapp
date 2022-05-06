import React, {useState, useEffect} from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';

import {CardAgendaItem} from './cardAgendaItem';

import {getNotas, elimarAgenda} from '../../api';

export const CardAgenda = () => {
  const [agenda, setAgenda] = useState([]);
  const [refresing, setRefresing] = useState(false);

  const loadNotas = async () => {
    const data = await getNotas();
    setAgenda(data);
  };

  useEffect(() => {
    loadNotas();
  }, []);
  const handleDelete = async ID => {
    await elimarAgenda(ID);
    await loadNotas();
  };

  const renderItem = ({item}) => {
    return <CardAgendaItem agenda={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadNotas();
    setRefresing(false);
  });

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={{width: '95%'}}
      data={agenda}
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
const styles = StyleSheet.create({});
