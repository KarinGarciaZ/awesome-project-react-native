import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/Home';
import AboutAppScreen from './src/screens/AboutApp';
import PlaceDetailScreen from './src/screens/PlaceDetail';
import AuthScreen from './src/screens/Auth';
import SignInScreen from './src/screens/SignIn';

const AppNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    SignIn: SignInScreen,
    Home: {
      screen: createBottomTabNavigator(
        // {
        //   Home:  HomeScreen,
        //   PlaceDetail: PlaceDetailScreen,
        //   About: AboutAppScreen
        // },
        {
          Home: {
            screen: createStackNavigator(
              {
                Home:  HomeScreen,
                PlaceDetail: PlaceDetailScreen,
              },
              {
                initialRouteName: "Home",
                headerMode: 'none',
              }
            )
          },
          About: AboutAppScreen  
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
                case 'About':
                  icon = <Icon name="info-circle" size={25} color={tintColor} />
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
            activeTintColor: '#333',
            inactiveTintColor: '#999',
          },
            initialRouteName: "Home",
        }
      )
    }
  },
  {
    initialRouteName: "Auth",
    headerMode: 'none',
  }
)






const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;