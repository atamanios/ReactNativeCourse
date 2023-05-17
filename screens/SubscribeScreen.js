import * as React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { validateEmail } from '../utils';



const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState('');

  const isEmailValid = validateEmail(email)

  // const buttonAlert = () => Alert.alert( '', 'Thanks for subscribing, stay tuned!', [{
  //   text: 'Ok',
  //   onPress: () => console.log('Ok Pressed'),
  // }]);

  return ( <View style={subscribeStyles.container}>

    <Image style={subscribeStyles.logo} source={require('../assets/little-lemon-logo-grey.png')}
      resizeMode='contain'
      accessible={true}
      accessibilityLabel={'Little Lemon Logo Monocolor'}/>

    <Text style={subscribeStyles.text}> Subscribe to our newsletter for our lates delicious recipes! </Text>

    <TextInput 
    style={subscribeStyles.inputBox}
    value={email}
    onChange={onChangeEmail}
    placeholder='john@doe.com' />

<Pressable onPress={ () => { Alert.alert('Thanks for subscribing, stay tuned!')} } 
style={ subscribeStyles.buttonActive }> 

<Text style={subscribeStyles.buttonText}>Newsletter</Text>

</Pressable>

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
  buttonActive: {

    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',

  },

  buttonPassive: {

    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'grey',

  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    textAlignVertical: 'center',
    
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
