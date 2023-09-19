import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import styles from './AttractionScreen.module.css';

const {height} = Dimensions.get('window');

const AttractionScreen = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images.length ? item?.images[0] : null;

  console.log('mainImage', mainImage);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: height / 2}}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}
        />
        <Text onPress={onBack} style={{margin: 32}}>
          BACK
        </Text>
        <Text>{item?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AttractionScreen;
