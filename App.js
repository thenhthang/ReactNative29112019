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

export default class App extends Component{
  renderTitle(){
    if(Platform.OS === 'ios'){
      return "IOS";
    }else{
      return "ANDROID";
    }
  }
  render(){
    return(
      <SafeAreaView>
        <View style = {styles.container} >
          <Text>{this.renderTitle()}</Text>
          <Text style = {styles.parent}> 
            Tiêu đề: 
            <Text style = {styles.children} >
              Khóa học lập trình React-native
            </Text>
          </Text>
          <Text style={styles.textstyle} numberOfLines={3}  >
          --Theo luật sư Ứng, vụ án này khá đặc biệt khi hành vi phạm tội của 14 bị cáo không có sự bàn bạc. Quá trình triển khai dự án, ông Son điều hành theo tinh thần của Thủ tướng, điều hành với tư cách người đứng đầu một bộ chứ không phải "chủ mưu cầm đầu" như cáo trạng quy kết.
          Luật sư Phạm Công Hùng cũng cho rằng ông Son không phải chủ mưu. Ngay từ giai đoạn điều tra, điều tra viên đã "sắp sẵn" quan điểm này.
          </Text>
        </View>
      </SafeAreaView>
      
    )
  }
}


