import React, {useState, useEffect} from 'react';
import COLORS from '../utils/paleta';
import {RefreshControl, FlatList, Dimensions} from 'react-native';
import {CardImportantPeopleItem} from './cardImportantPeopleItem';
const {width} = Dimensions.get('screen');
import {getPersonajesImportantes} from '../../api';

export const CardImportantPeople = () => {
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
      horizontal
      snapToInterval={width - 10}
      contentContainerStyle={{marginRight: 8, paddingHorizontal: 10}}
      data={personajesImportantes}
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
