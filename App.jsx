import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AttractionScreen from './src/screens/AttractionScreen';
import GalleryScreen from './src/screens/GalleryScreen';

const Stack = createNativeStackNavigator();
enableLatestRenderer();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator headerMode="screen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AttractionDetails" component={AttractionScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
