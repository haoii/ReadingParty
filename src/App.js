import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Screen from './Screen';
import BookshelfScreen from './bookshelf/BookshelfScreen';
import BookScreen from './book/BookScreen';

const MainBottomTab = createBottomTabNavigator(
  {
    首页: {
      screen: Screen,
    },
    关注: {
      screen: BookshelfScreen,
    },
    发布: {
      screen: Screen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: ({focused, tintColor}) => {
          return <View />;
        },
      }),
    },
    消息: {
      screen: Screen,
    },
    我的: {
      screen: Screen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === '首页') {
          const iconName = `md-home${focused ? '' : ''}`;
          return <IconIonicons name={iconName} size={26} color={tintColor} />;
        }
        if (routeName === '关注') {
          const iconName = `md-bookmarks${focused ? '' : ''}`;
          return <IconIonicons name={iconName} size={26} color={tintColor} />;
        }
        if (routeName === '发布') {
          const iconName = `ios-add-circle${focused ? '' : ''}`;
          return <IconIonicons name={iconName} size={45} color="#039BE5" />;
        }
        if (routeName === '消息') {
          const iconName = `md-notifications${focused ? '' : ''}`;
          return <IconIonicons name={iconName} size={26} color={tintColor} />;
        }
        if (routeName === '我的') {
          const iconName = `md-person${focused ? '' : ''}`;
          return <IconIonicons name={iconName} size={26} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#039BE5',
      // inactiveTintColor: '#000',
      labelStyle: {
        // fontSize: 11,
      },
      style: {
        // borderTopWidth: 0.5,
        // borderTopColor: '#c3c3c3',
        // height: 50,
        // backgroundColor: '#f8f8f8',
        // paddingVertical: 2,
      },
    },
  },
);

export default createAppContainer(
  createStackNavigator(
    {
      MainBottomTab: {
        screen: MainBottomTab,
        navigationOptions: {
          header: null,
        },
      },
      BookScreen: {
        screen: BookScreen,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: 'MainBottomTab',
      defaultNavigationOptions: {
        headerStyle: {
          height: 45,
        },
        headerTitleStyle: {
          fontSize: 16,
        },
      },
    },
  ),
);
