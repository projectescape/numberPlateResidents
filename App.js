import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./src/screens/Home";
import History from "./src/screens/History";
import SendRequest from "./src/screens/SendRequest";
import LogIn from "./src/screens/LogIn";

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
  Home: Home,
  History: History,
  "Send Request": SendRequest,
  "Log Out": LogIn
});

const HomeSwitchNavigator = createSwitchNavigator({
  LogIn: LogIn,
  Home: navigator
});

export default createAppContainer(HomeSwitchNavigator);
