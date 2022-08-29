import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList} from 'react-native';
import {CardImportantPeopleItem} from './cardImportantPeopleItem';

import {getPersonajesImportantes} from '../../api';

export const CardAllPersonajesImportantes = () => {
  const [personajesImportantes, setPersonajesImportantes] = useState([]);

  const [refresing, setRefresing] = useState(false);

  const loadPersonajesImportantes = async () => {
    const data = await getPersonajesImportantes();
    setPersonajesImportantes(data);
  };

  useEffect(() => {
    loadPersonajesImportantes();
  }, []);

  const renderItem = ({item}) => {
    return <CardImportantPeopleItem personajesImportantes={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadPersonajesImportantes();
    setRefresing(false);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 10}}
      data={personajesImportantes}
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
