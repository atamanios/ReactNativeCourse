import * as React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { validateEmail } from '../utils/index';
import { useState } from 'react';
import  Button  from '../components/Button';



const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = useState('');

  const isEmailValid = validateEmail(email)

  

  return ( <View style={subscribeStyles.container}>

    <Image style={subscribeStyles.logo} source={require('../assets/little-lemon-logo-grey.png')}
      resizeMode='contain'
      accessible={true}
      accessibilityLabel={'Little Lemon Logo Monocolor'}/>

    <Text style={subscribeStyles.text}> Subscribe to our newsletter for our lates delicious recipes! </Text>

    <TextInput 
    style={subscribeStyles.inputBox}
    value={email}
    onChangeText={setEmail}
    placeholder={'john@doe.com'}
    keyboardType="email-address"
    textContentType="emailAddress" />


  <Button onPress={ () => {Alert.alert('Thanks for subscribing')}} disabled={!isEmailValid}>
    Subscribe
  </Button>

  </View>
)};

const subscribeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
    
  },
  text:{
    margin: 30,
    padding: 20,
    textAlign: 'center'

  },
  logo: {
    width: 100,
    height: 200,
    padding: 20,
    margin: 20,
  },
  inputBox: {
    height: 40,
    width: 300,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },


});

export default SubscribeScreen;
