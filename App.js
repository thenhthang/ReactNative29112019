/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//sip macos color picker
//StatusBar: Thanh tren cung hien thi pin
//Platform: Check he dieu hanh dang chay
//SafeAreaView: Tu canh thanh StatusBar cua ios va android, khong bi mat chu
//flex: Trong su dung flex, thi ben ngoai phai co the flex. Uu tien chia
//chi le chuan truoc, chia theo ti le flax sau. Lay theo chi le chuan, phan
//con lai chia cho ty le flex
//justifyContent: Canh huong noi dung cua thang con
//alignItems: Canh huong noi dung cua thang con
//CSS 3
//react-native css cheat sheet
import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet
} from 'react-native';

class App extends Component{
  renderTitle(){
    if(Platform.OS === 'ios'){
      return "IOS";
    }else{
      return "ANDROID";
    }
  }
  render(){
    return(
      <SafeAreaView style={{flex:1,flexDirection:'column'}} >
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{height:100,width:100,backgroundColor:'red',
              justifyContent:'center',alignItems:'center',borderRadius:50,borderWidth:10,
              borderColor:'green'}} onPress={()=>{
                alert("Hello world")
              }} >
            <Text>Click</Text>
          </TouchableOpacity>
          <Text styles = {styles.parent}>
            Tiêu đề
            <Text style={styles.children}>Khóa học lập trình react native</Text>
          </Text>
        </View>
      </SafeAreaView>
      // <SafeAreaView style={styles.container}>
        
      //   {/* <View style={{flex:1,backgroundColor:'red',flexDirection:'column'}} >
      //     <View style={{flex:1,backgroundColor:'#aabbcc',justifyContent:'flex-end',alignItems:'center'}}><Text>A</Text></View>
      //     <View style={{flex:1,backgroundColor:'#aaddcc',justifyContent:'flex-start',alignItems:'center'}}><Text>B</Text></View>
      //     <View style={{flex:1,backgroundColor:'#aaffcc',justifyContent:'center',alignItems:'center'}}><Text>C</Text></View>
      //     <View style={{flex:1,backgroundColor:'#aacccc',justifyContent:'center',alignItems:'center'}}><Text>D</Text></View>
      //   </View>
      //   <View style={{flex:1,backgroundColor:'green',flexDirection:'row'}}>
      //   <View style={{flex:1,backgroundColor:'#ddbbcc',justifyContent:'center',alignItems:'center'}}><Text>A</Text></View>
      //     <View style={{flex:1,backgroundColor:'#ddddcc',justifyContent:'center',alignItems:'center'}}><Text>B</Text></View>
      //     <View style={{flex:1,backgroundColor:'#ddffcc',justifyContent:'center',alignItems:'center'}}><Text>C</Text></View>
      //     <View style={{flex:1,backgroundColor:'#ddcccc',justifyContent:'center',alignItems:'center'}}><Text>D</Text></View>
      //   </View> */}
      // {/* <View style = {{flex:1,backgroundColor:'#cecece',
      // alignItems:'center',flexDirection:'column'}} >
      //   <Text style={{backgroundColor:'green',width:100,height:50}}>{this.renderTitle()}</Text>
      //   <Text style={{backgroundColor:'red',width:100,height:50}} >VIEW 1</Text>
      // </View>
      // <View style = {{flex:2,backgroundColor:'#75D0ED',flexDirection:'row',alignItems:'flex-start'}} >
      //   <Text style={{backgroundColor:'#C94612',flex:1,height:'100%'}} >Trần Ngọc Quốc</Text>
      //   <Text style={{backgroundColor:'#E67217',flex:1,height:'70%'}}>Trần Thị Ngọc Trang</Text>
      //   <Text style={{backgroundColor:'#EEA435',flex:1,height:'50%'}}>Trần Thị Xuân Lựu</Text>
      //   <Text style={{backgroundColor:'#6BA2D0',flex:1,height:'20%'}}>Trần Văn Tèo</Text>
      // </View>
      // <View style = {{flex:3,backgroundColor:'#dbbbee',flexDirection:'row',alignItems:'flex-end'}} >
      //   <View style={{flex:1}}>
      //     <Text style={{backgroundColor:'#F6A615',flex:1,color:'white',fontWeight:'bold',paddingTop:30}} >Trần Ngọc Quốc</Text>
      //     <Text style={{backgroundColor:'#E82A37',flex:1}} >Trần Ngọc Quốc 2</Text>
      //     <Text style={{backgroundColor:'#0DA921',flex:1}} >Trần Ngọc Quốc 3</Text>
      //   </View>
      //   <Text style={{backgroundColor:'green',flex:1,height:'70%'}}>Trần Thị Ngọc Trang</Text>
      //   <Text style={{backgroundColor:'blue',flex:1,height:'50%'}}>Trần Thị Xuân Lựu</Text>
      //   <Text style={{backgroundColor:'yellow',flex:1,height:'20%'}}>Trần Văn Tèo</Text>
      // </View>
      // <View style = {{width:'50%',height:100,backgroundColor:'#ccffdd'}} >
      //   <Text style={{textAlign:'right',color:'red'}}>ABC</Text>
      //   <Text style={{textAlign:'left',color:'green'}}>DEF</Text>
      //   <Text style={{textAlign:'center',color:'blue'}}>GHI</Text>
      //   <Text style={{textAlign:'justify',color:'red'}}>KRM</Text>
      //   <TouchableOpacity onPress={()=>{alert('Xin chào')}}><Text style={{borderStyle:'dashed',
      // borderColor:'red',borderRadius:20,backgroundColor:'#aabbcc',height:30,width:100}}>Button</Text></TouchableOpacity> 
      // </View> */}
      // </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column'
  },
  textStyle:{
    backgroundColor:'red'
  },
});
export default App;
