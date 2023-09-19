import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import './AttractionScreen.module.css';

const AttractionScreen = ({navigation, route}) => {
  const {item} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text onPress={onBack} style={{margin: 32}}>
        BACK
      </Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default AttractionScreen;
