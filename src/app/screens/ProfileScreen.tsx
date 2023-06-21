import React from 'react';
// import {Box, Button, Center, NativeBaseProvider, Text} from 'native-base';
// import Messi from '../../assets/images.jpeg';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TodoList from './TodoList';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

function ProfileScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={TodoList} />
    </Drawer.Navigator>
  );
}

export default ProfileScreen;
