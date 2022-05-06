import React, {useState, useEffect} from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CardDato} from '../components/cardDato';
import {guardarAgenda, getNota, updateAgenda, getDatos} from '../../api';
export const AgendaFormScreen = ({route}) => {
  const navigation = useNavigation();
  const [notas, setNotas] = useState({
    _idUsuario: '1',
    _idCiudad: '',
    fechaVisita: '',
    hora: '',
    _idTransporte: '',
  });
  const [editing, setEditing] = useState(false);
  console.log(route.params);
  const handleChange = (name, value) => setNotas({...notas, [name]: value});

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await guardarAgenda(notas);
      } else {
        await updateAgenda(route.params.ID, notas);
      }
      navigation.navigate('NotaScreen');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.ID) {
      navigation.setOptions({headerTitle: 'Actualizar agenda'});
      setEditing(true);
      (async () => {
        const notas = await getNota(route.params.ID);
        setNotas({
          _idUsuario: notas._idUsuario,
          _idCiudad: notas._idCiudad + '',
          fechaVisita: notas.fechaVisita,
          hora: notas.hora,
          _idTransporte: notas._idTransporte + '',
        });
      })();
    }
  }, []);
  return (
    <View style={styles.container}>
      <CardDato />
      <TextInput
        style={styles.input}
        placeholder="   Ingrese la ciudad"
        onChangeText={text => handleChange('_idCiudad', text)}
        value={notas._idCiudad}
      />
      <TextInput
        style={styles.input}
        placeholder="   Ingrese el transporte"
        onChangeText={text => handleChange('_idTransporte', text)}
        value={notas._idTransporte}
      />
      <TextInput
        style={styles.input}
        placeholder="   Ingrese la fecha"
        onChangeText={text => handleChange('fechaVisita', text)}
        value={notas.fechaVisita}
      />
      <TextInput
        style={styles.input}
        placeholder="   Ingrese la hora"
        onChangeText={text => handleChange('hora', text)}
        value={notas.hora}
      />
      {!editing ? (
        <TouchableOpacity style={styles.btnGuardar} onPress={handleSubmit}>
          <Text style={styles.btnText}>Guardar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnActualizar} onPress={handleSubmit}>
          <Text style={styles.btnText}>Actualizar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //backgroundColor: COLORS.grey,
  },
  input: {
    width: '90%',
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
    height: 45,
    marginHorizontal: 20,
    color: COLORS.dark,
    borderRadius: 15,
  },
  btnGuardar: {
    top: 60,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: COLOR_PRIMARY,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 15,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnActualizar: {
    top: 60,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: COLOR_PRIMARY,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 15,
  },
});
