import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SearchScreen from './src/screens/SearchScreen';
import Home from './src/screens/Home'
import History from './src/screens/History'
import SendRequest from './src/screens/SendRequest'
import LogIn from './src/screens/LogIn'

// const HomeStackNavigator = createStackNavigator({
//   LogIn: LogIn,
//   Home: Home
// },
//   {
//     initialRouteName: 'LogIn',
//     defaultNavigationOptions: {
//       title: 'Log In'
//     }
//   });

const navigator = createDrawerNavigator({
  // 'Log Out': {
  //   screen: LogIn
  // },
  Home: {
    screen: Home
  },
  History: {
    screen: History
  },
  'Send Request': {
    screen: SendRequest
  },
  'Log Out': {
    screen: Home
  }
});


export default createAppContainer(navigator);