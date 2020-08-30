import * as React from 'react'
import {StyleSheet, View, Platform } from 'react-native'
import AppNavigator from './Navigator/AppNavigator'
import { Provider } from 'react-redux';
import store from './redux/Store';
// covering ts type - any, null, undefined, object, never, typeassertions
export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

}



  componentWillUnmount() {

}
  error(message: string) {
    throw new Error(message)
  }

// Inferred return type is never
  fail() {
    return this.error('Something failed')
  }

// Function returning never must have unreachable end point
  infiniteLoop(): never {
    while (true) {
    }
  }

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator/>
      </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})