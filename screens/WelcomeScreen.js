import * as React from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return ( 
    <View style={welcomeStyle.container}>
      <View style={welcomeStyle.contentContainer}> 
      <Image style={welcomeStyle.logo} source={require('../assets/little-lemon-logo.png')}
      resizeMode='contain'
      accessible={true}
      accessibilityLabel={'Little Lemon Logo'}/>

      <Text style={welcomeStyle.text}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
        <Pressable onPress={ () => navigation.navigate('Subscribe') } style={welcomeStyle.button}> 

          <Text style={welcomeStyle.buttonText}>Newsletter</Text>
    
        </Pressable>
    </View>
    )};

export default WelcomeScreen;

const welcomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      padding:24,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
    },
    contentContainer:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },

    logo: {
      width: 200,
      height: 200,
      borderRadius: 20,
      margin: 20,
      padding: 20,
    
    }, 
    text: {
      maxWidth: 300,
      fontSize: 15,

      padding: 50,

    },
    
    button: {

      width: 300,
      height: 40,
      borderRadius: 10,
      backgroundColor: 'green',
    },

    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 25,
      textAlignVertical: 'center',
      
    },
    bottom: {
      flex: 0.1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
});
