import React, { Component } from 'react'
import { Text, View, TextInput, Image,StyleSheet,
    ImageBackground, 
    CheckBox} from 'react-native'


export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/bg2.jpg')} style={{width: '100%', height: '100%'}}>
                <View style = {styles.container} >
                <View style = {styles.logo}>
                    <Image source={require('../assets/logo.png')}
                    style={{width:250,height:250}} />
                </View>
                <View style={styles.textinput}>
                <Image
                        source={require('../assets/email2.png')}
                        style={styles.ImageStyle}/>
                    <TextInput placeholderTextColor='white' 
                    placeholder='Email' style={styles.textColor} />
                </View>
                <View style={styles.textinput}>
                <Image
                        source={require('../assets/password.png')}
                        style={styles.ImageStyle}/>
                    <TextInput placeholderTextColor='white' 
                    placeholder='Password' style={styles.textColor} />
                </View>
                <View style={styles.foget}>
                    <View style={{flexDirection:'row', marginRight:10}} >
                        <CheckBox style={{width:15,height:15,borderColor:'white',
                        marginRight:10,backgroundColor:'white',color:'black'}}/>
                        <Text style={styles.textColor}>Remember Me</Text>
                    </View>
                    <View style={{flexDirection:'row'}} >
                    <CheckBox style={{width:15,height:15,borderColor:'white',
                        marginRight:10,backgroundColor:'white',color:'black'}}/>
                        <Text style={styles.textColor}>Foget PassWord</Text>
                    </View>
                </View>
                <View style = {styles.button}>
                    <Text style={styles.textColor}>LOGIN</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.textColor}>SIGN UP</Text>
                </View>
            </View>
            </ImageBackground>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        //justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'#3882A5',
        
    },
    foget:{
        flexDirection:'row',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#2E6B88',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        height:50,
        width:'80%',
        marginBottom:10,
        borderWidth:1,
        borderColor:'white'
    },
    textinput:{
        flexDirection:'row',
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'flex-start',
        borderRadius:30,
        height:60,
        paddingLeft:20,fontWeight:'bold',
        color:'white',
        width:'80%',
        marginBottom:10,
        borderWidth:1,
        borderColor:'white'
    },
    textColor:{
        fontWeight:'bold',
        color:'white'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      }
}
)