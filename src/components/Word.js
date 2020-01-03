import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {width,height} from './Dimension'
export default class Word extends Component {
    render() {
        const{en,vi,isMemorized} = this.props;
        return (
            <View style={{flex:1, borderRadius:15,backgroundColor:'#F0F0F0',
                        marginTop:5,marginBottom:5}} >
            <View style = {{
                            flexDirection:'row',
                            justifyContent:'space-around',
                            padding:20,
                            }}>
                <Text style={{color:'#53A451',fontSize:width/15,
                        fontWeight:'bold'}}>{en}</Text>
                <Text style={{color:'#CB444B',fontSize:width/15,
                        fontWeight:'bold'}}>{isMemorized===true?'---':vi}</Text>
            </View>
            <View style = {{
                            flexDirection:'row',
                            justifyContent:'space-around',
                            paddingBottom:10,
                            backgroundColor:'#F0F0F0'}}>
                <TouchableOpacity onPress={()=>{
                    alert('Da nhan')
                }} >
                <Text style={{color:'#53A451',fontSize:width/20,
                        color:'white',padding:10,
                        backgroundColor:`${isMemorized===true?'#53A451':'#CB444B'}`}}>
                            {isMemorized === true?'Forgot':'Memorized'}
                </Text>
                </TouchableOpacity>              
                <TouchableOpacity>
                <Text style={{color:'black',fontSize:width/20,
                        padding:10,backgroundColor:'#F6C344',
                        }}>Remove</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
