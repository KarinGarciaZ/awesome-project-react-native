import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/Home';
import AboutAppScreen from './src/screens/AboutApp';
import PlaceDetailScreen from './src/screens/PlaceDetail';
import AuthScreen from './src/screens/Auth';
import SignInScreen from './src/screens/SignIn';
import SharePlace from './src/screens/SharePlace';
import SettingsScreen from './src/screens/Settings';
import ProfileScreen from './src/screens/Profile';

import SideDrawerProfile from './src/components/Shared/SideDrawerProfile';

const AppNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    SignIn: SignInScreen,
    Home: {
      screen: createBottomTabNavigator(
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
          About: {
            screen: createDrawerNavigator(
              {
                About: AboutAppScreen,
              },
              {
                defaultNavigationOptions: ({ navigation }) => ({
                  drawerLabel: () => (navigation.state.routeName != 'About')? navigation.state.routeName: null,
                  drawerIcon: ({ tintColor }) => {
                    const { routeName } = navigation.state;
                    let icon = null;
                    switch (routeName) {
                      case 'Settings':
                        icon = <Icon name="cog" size={25} color={tintColor} />
                        break;
                      default:
                        icon = null
                        break;
                    }
            
                    // You can return any component that you like here!
                    return icon;
                  },
                }),
                drawerPosition: 'right',
                contentOptions: {
                  activeTintColor: '#333',
                  inactiveTintColor: '#999',
                },
                initialRouteName: 'About',    
                overlayColor: 10, 
              }
            )
          },          
          Profile: {
            screen: createDrawerNavigator(
              {
                Profile: ProfileScreen,
                Settings: SettingsScreen
              },
              {
                defaultNavigationOptions: ({ navigation }) => ({
                  drawerLabel: () => (navigation.state.routeName != 'Profile')? navigation.state.routeName: null,
                  drawerIcon: ({ tintColor }) => {
                    const { routeName } = navigation.state;
                    let icon = null;
                    switch (routeName) {
                      case 'Settings':
                        icon = <Icon name="cog" size={25} color={tintColor} />
                        break;
                      default:
                        icon = null
                        break;
                    }
            
                    // You can return any component that you like here!
                    return icon;
                  },
                }),
                drawerPosition: 'right',
                contentOptions: {
                  activeTintColor: '#333',
                  inactiveTintColor: '#999',
                },
                initialRouteName: 'Profile',    
                overlayColor: 10,
                contentComponent: SideDrawerProfile,
              }
            )
          },
          SharePlace: SharePlace,
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
                case 'Profile':
                  icon = <Icon name="user" size={25} color={tintColor} />
                  break;
                case 'SharePlace':
                  icon = <Icon name="share" size={25} color={tintColor} />
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