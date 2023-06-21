/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigators from './navigations/TabNavigators';
import paths from './constants/routePaths';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostScreen from './screens/PostScreen';
import TodoList from './screens/TodoList';
import Bottom from './screens/DataScreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const linkScreens = [
  {
    name: paths.Home,
    component: HomeScreen,
  },
  {
    name: paths.Profile,
    component: ProfileScreen,
  },
  {
    name: paths.PostScreen,
    component: PostScreen,
  },
  {
    name: paths.TodoList,
    component: TodoList,
    options: {
      title: 'Todo List',
      headerStyle: {
        backgroundColor: '#22d3ee',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  {
    name: paths.DataScreen,
    component: Bottom,
  },
];

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="BottomTabNavigation"
              component={TabNavigators}
            />
            {linkScreens?.map(item => (
              <Stack.Screen
                name={item?.name}
                component={item?.component}
                options={item?.options}
              />
            ))}
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
