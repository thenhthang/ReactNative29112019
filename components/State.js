import React,{Component} from 'react'
import {View,Text, SafeAreaView} from 'react-native'
class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }
    componentDidMount() {
      let that = this;
      setInterval(function () {
        that.increase();
      }, 1000);
    }
  
    increase() {
      this.setState({count: this.state.count + 1});
    }
  
    render() {
      return (
        <View>
          <Text style={{fontSize:50,color:'red'}}>count: {this.state.count}</Text>
        </View>
      );
    }
  }
  
  export class MainState extends Component {
    render(){
      return(
          <SafeAreaView>
            <View>
                <Timer/>
            </View>
          </SafeAreaView>
        
      );
    }
  }