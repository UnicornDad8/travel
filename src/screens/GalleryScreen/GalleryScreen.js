import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './GalleryScreen.module.css';

const GalleryScreen = ({navigation, route}) => {
  const {images} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container} scrollI>
      <View style={styles.gallery}>
        <FlatList
          data={images}
          style={styles.imagesContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Image key={item} source={{uri: item}} style={styles.image} />
          )}
        />
        <TouchableOpacity onPress={onBack} style={styles.backContainer}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GalleryScreen;
