import React, { Component } from "react";
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from "./screens/login"
import BottomTabNavigator from "./components/BottomTabNavigator";
import RideScreen from "./screens/Ride";
import RideHistoryScreen from "./screens/RideHistory";

export default class App extends Component {
  render(){
    return  <AppContainer/>
  }
}
 const AppSwitchNavigator = createSwitchNavigator(
  {
    Login:{screen:LoginScreen},
    BottomTab:{screen:BottomTabNavigator},
    Ride:{RideScreen},
    RideHistory:{RideHistoryScreen}
  },
  {
    initialRouteName:"Login"
  }

 );
 const AppContainer = createAppContainer(AppSwitchNavigator)