import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/Home';
import AboutApp from './src/screens/AboutApp';

const AppNavigator = createBottomTabNavigator(
  {
    Home:  HomeScreen,
    About: AboutApp
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = null;
        switch (routeName) {
          case 'Home':
            icon = <Icon name="home" size={25} color={tintColor} />
            break;
        
          default:
            icon = <Icon name="info-circle" size={25} color={tintColor} />
            break;
        }

        // You can return any component that you like here!
        return icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
      initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;