import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const loginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.p}>Let's start!</Text>
      <TextInput style={styles.textInput}
        placeholder='example@example.com'
        placeholderTextColor={'white'}
      />
      <TextInput style={styles.textInput}
        placeholder='Password'
        placeholderTextColor={'white'}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate("chat")}><Text>Login</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  btnPrimary:{
    padding:16,
    backgroundColor: 'white',
    borderRadius: 16,
    width: "80%",

    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#026CD2',
    alignItems: 'center',
    paddingTop: 100
  },
  welcome: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12
  },
  p: {
    color: 'white',
    fontSize: 24,
    marginBottom: 36
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    padding: 16,
    marginBottom: 24,
    borderRadius: 30,
    color: 'white'
  }
});

export default loginPage;