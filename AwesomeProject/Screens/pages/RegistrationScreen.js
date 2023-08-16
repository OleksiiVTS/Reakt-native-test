import { useState } from 'react';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
// import add from '../images/add.svg';
import addPhoto from '../images/addPhoto.jpg';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImage}>
        <Image alignToCenter style={styles.image} source={addPhoto}></Image>
        <Pressable
          style={
            true
              ? styles.buttonImage
              : [styles.buttonImage, styles.buttonAddImage]
          }
        >
          <View
            style={true ? styles.plus : [styles.plus, styles.iconAddImage]}
          />
          <View
            style={true ? styles.minus : [styles.minus, styles.iconAddImage]}
          />
        </Pressable>
      </View>
      <ScrollView alignItems="center" style={styles.form}>
        <Text style={styles.text}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          onChange={setLogin}
          value={login}
          placeholder="Логін"
          autoFocus
        />
        <TextInput
          style={styles.input}
          dataDetectorTypes="address"
          inputMode="email"
          placeholder="Адреса електронної пошти"
        />
        <TextInput style={styles.input} secureTextEntry placeholder="Пароль" />
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Зареєстуватися</Text>
        </Pressable>
        <Text style={styles.link} dataDetectorType="link">
          Вже є акаунт? Увійти
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  containerImage: {
    position: 'absolute',
    left: '50%',
    marginLeft: -60,
    top: 203,
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  buttonImage: {
    zIndex: 2,
    position: 'absolute',
    bottom: 14,
    right: -12.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FF6C00',
    borderRadius: 25,
  },
  plus: {
    position: 'absolute',
    height: 13,
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FF6C00',
  },
  minus: {
    position: 'absolute',
    width: 13,
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FF6C00',
  },
  buttonAddImage: {
    transform: [{ rotate: '45deg' }],
    borderColor: '#E8E8E8',
  },
  iconAddImage: {
    borderColor: '#E8E8E8',
  },
  text: {
    marginTop: 92,
    color: '#212121',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  textButton: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  link: {
    justifyContent: 'center',
    marginTop: 16,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    color: '#1B4371',
    textAlign: 'center',
  },

  form: {
    display: 'flex',
    // alignItems: 'center',
    marginTop: 263,
    width: 375,
    minHeight: 549,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#FFFFFF',
  },

  input: {
    width: 343,
    height: 50,
    padding: 16,
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
});
