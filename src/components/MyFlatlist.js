import React, { Component } from 'react';
import {
    View, Text, StatusBar, Platform, SafeAreaView, 
    Button, TouchableOpacity, StyleSheet, FlatList,ActivityIndicator, TextInput, SwipeableListView
} from 'react-native';
import MonAn from '../model/MonAn';


const lstMonAn = [
    { id: 1, image:require('../assets/hinh1.jpeg'), name: 'Chả cá', description: 'Ngon lành cành đào', price: '100000' },
    { id: 2, image: require('../assets/hinh2.jpeg'), name: 'Bún giò', description: 'Ngon lành cành đào', price: '200000' },
    { id: 3, image: require('../assets/hinh3.jpeg'), name: 'Bánh canh', description: 'Ngon lành cành đào', price: '300000' },
    { id: 4, image: require('../assets/hinh4.jpeg'), name: 'Bún riêu', description: 'Ngon lành cành đào', price: '400000' },
    { id: 5, image: require('../assets/hinh5.jpeg'), name: 'Phở', description: 'Ngon lành cành đào', price: '500000' },
    { id: 6, image: require('../assets/hinh5.jpeg'), name: 'Phở', description: 'Ngon lành cành đào', price: '500000' },
    //{ id: 7, image: require('../assets/hinh5.jpeg'), name: 'Phở', description: 'Ngon lành cành đào', price: '500000' },
    //{ id: 8, image: require('../assets/hinh5.jpeg'), name: 'Phở', description: 'Ngon lành cành đào', price: '500000' },
    //{ id: 9, image: require('../assets/hinh5.jpeg'), name: 'Phở', description: 'Ngon lành cành đào', price: '500000' },
    //{ id: 10, image: require('../assets/hinh5.jpeg'), name: 'Phở', description: 'Ngon lành cành đào', price: '500000' }
]
export default class MyFlatlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: lstMonAn
        }
    }
    removeItem = (id)=>{
       // console.log(id)
        newData = [...this.state.data].filter(item=>{
            return item.id != id
        })
        //console.log(JSON.stringify(newData))
        this.setState({
            data:newData,
            loading: false
        })
    }
    onChageTextSearch = text =>{
        this.setState({
            loading:true
        })
        setTimeout(() => {
            this.getNewData(text)
        }, 1000);
    }
    getNewData = text =>{
        newData = [...lstMonAn].filter(item=>{
            if(text ==='')
                return true
            else
            return item.name.toLocaleLowerCase()
                        .includes(text.toLocaleLowerCase()) 
        })
        this.setState({
            data:newData,
            loading: false
        })
    }
    renderHeader = ()=>{
        return(
            <TextInput style = {{height:45,backgroundColor:'white',borderRadius:10,
            justifyContent:'center',borderColor:'gray',borderWidth:1,
            paddingLeft:20,marginBottom:5}} placeholder='Type here...' 
            onChangeText = {
                (text)=>{
                    this.onChageTextSearch(text)
                }
            } />
        )
    }
    renderFooter = ()=>{
        if (!this.state.loading) return null;
        return(
            <View
            style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
            }}>
            <ActivityIndicator animating size='large' />
        </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1,paddingHorizontal:10}} >
                <FlatList numColumns = {1}
                data={this.state.data}
                renderItem={({ item }) =>
                  <TouchableOpacity onPress={()=>{
                      this.removeItem(item.id)}} >
                         <MonAn monan={item} parentFlatlist = {this} />
                </TouchableOpacity> }
                    keyExtractor={item => String(item.id)} 
                    ItemSeparatorComponent={()=>
                    <View style={{width:'100%',height:1,backgroundColor:'darkcyan'}}></View>}
                    ListHeaderComponent={this.renderHeader()}
                    ListFooterComponent = {this.renderFooter()}
                    />
            </SafeAreaView>
        )
    }
}