import 'react-native-gesture-handler';
import * as React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
const Stack = createStackNavigator();

class AppNavigator extends React.Component {

  constructor(props: any) {
    super(props);
  }

  defaultStack = () => {
    return (

      <Stack.Navigator
      initialRouteName='Login'
        screenOptions={{
          gestureEnabled: true,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#6EB1F7' },
          headerTitleStyle: {
            color:'white'
        }
        }}
     >
        <Stack.Screen name={'Login'}
        options={{headerShown: false}}
        component={Login} />

        <Stack.Screen name={'Home'} component={Home}/>
        <Stack.Screen name={'Profile'} component={Profile}/>
      </Stack.Navigator>
    );
  };

  render() {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <NavigationContainer>
           {this.defaultStack()}
        </NavigationContainer>
      </View>
    );
  }
}

export default AppNavigator;
