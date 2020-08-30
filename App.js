/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  Image,
  Easing,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


let _this=null;
class App extends React.Component{

  constructor (){
    super();
    _this=this;
    this.spinValue = new Animated.Value(0)
    this.state={ value:1  }
  }

  updateValue(){
    _this.setState({value:_this.state.value+1})
  }


  componentDidMount(){
     this.spin();

  }

  spin(){
    this.spinValue.setValue(0.5)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(()=>this.spin())
  }

  render(){
    
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return(
     <SafeAreaView>
       <View style={{margin:20}}>
     
          <Animated.Image
        style={{
          width: 100,
          height: 100,
          resizeMode:'contain',
          transform: [{rotate: spin}] 
         
         }}
          source={{uri:'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      />
         </View>
       </SafeAreaView>
    )
  }
}


export default App;

