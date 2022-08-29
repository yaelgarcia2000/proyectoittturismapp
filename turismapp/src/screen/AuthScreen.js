import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {registroUsu} from '../../api';
import {UserContext} from '../context/user';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  Button,
  Alert,
} from 'react-native';
import {COLOR_PRIMARY} from '../utils/paleta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const AuthScreen = ({navigation}) => {
  // Inicio Google
  const [isSession, setIsSession] = useState(false);
  const {setMe} = useContext(UserContext);

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId:
        '58537208633-u6kded84cl1obrihsv2jtfkn5a01ir5l.apps.googleusercontent.com',
    });
    getStorage();
  }, []);

  const getStorage = async () => {
    if (await AsyncStorage.getItem('sesion')) {
      setIsSession(true);
    } else {
      setIsSession(false);
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.user);
      await AsyncStorage.setItem('sesion', JSON.stringify(userInfo.user));
      setMe(userInfo.user);
      setIsSession(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const closeSesion = async () => {
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('sesion');
    getStorage();
  };
  // Termina Google
  // contenido Formulario
  {
    /*
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  */
  }
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };
  const onSubmitHandler = async () => {
    const payload = {
      correo: 'luis@gmail.com',
      pass: 'yael123456',
      nombreUsu: 'YaelGracias',
    };
    await registroUsu(payload);
  };
  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  // VALIDACIONES BIEN CHIDAS

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleClick() {
    if (name == '' || password == '') {
      Alert.alert('El nombre de usuario y la contraseña son requeridos');
    } else {
      if (
        name == 'YaelGarcia' ||
        (password == '12345aeiou' && name == 'JairPeralta') ||
        password == '1234aeiu'
      ) {
        navigation.navigate('Root');
      } else {
        Alert.alert('El nombre de usuario y la contraseña no son validos');
      }
    }
  }
  return (
    <ImageBackground
      source={require('../assest/img/Iniciar.jpg')}
      style={styles.image}>
      <StatusBar backgroundColor="#40CFFF" />
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../assest/img/jaguar.png')}
        />
        <Text style={styles.heading}>
          {isLogin ? 'Iniciar sesión' : 'Regístrate'}
        </Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Nombre usuario"
              //autoCapitalize="none"
              onChangeText={text => setName(text)}></TextInput>
            {!isLogin && (
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={setEmail}></TextInput>
            )}
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={text => setPassword(text)}></TextInput>
            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
              {message ? getMessage() : null}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleClick()}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAlt}
              onPress={onChangeHandler}>
              <Text style={styles.buttonAltText}>
                {isLogin ? 'Crear cuenta' : ' Inicia sesión'}
              </Text>
            </TouchableOpacity>
            {!isSession ? (
              <Button title="Iniciar sesión con Gloogle" onPress={signIn} />
            ) : null}

            <Text />
            <Text />
            {isSession ? (
              <Button title="Cerrar sesión con Gloogle" onPress={closeSesion} />
            ) : null}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    top: -300,
    //left: '5%',
    width: '95%',
    //height: '190%',
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '80%',
    marginTop: '40%',
    borderRadius: 30,
    maxHeight: 400,
    paddingBottom: '30%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '23%',
    marginTop: '5%',
    marginBottom: '30%',
    color: 'black',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PRIMARY,
    paddingTop: 10,
    fontSize: 20,
    minHeight: 40,
  },
  button: {
    width: '80%',
    backgroundColor: COLOR_PRIMARY,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  buttonAlt: {
    width: '80%',
    borderWidth: 3,
    height: 40,
    borderRadius: 50,
    borderColor: COLOR_PRIMARY,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonAltText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  message: {
    fontSize: 20,
    marginVertical: '5%',
  },
});
