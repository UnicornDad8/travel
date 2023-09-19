import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import './AttractionScreen.module.css';

const AttractionScreen = ({route}) => {
  const {item} = route?.params || {};
  return (
    <SafeAreaView>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default AttractionScreen;
