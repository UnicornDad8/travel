import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AttractionScreen from './src/screens/AttractionScreen';
import GalleryScreen from './src/screens/GalleryScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AttractionDetails" component={AttractionScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
