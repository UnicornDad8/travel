import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './MapScreen.module.css';

const {width} = Dimensions.get('window');

const MapScreen = ({navigation, route}) => {
  const {item} = route?.params || {};

  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    longitudeDelta: 0.05,
    latitudeDelta: 0.05,
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>

      <TouchableOpacity
        style={[styles.header, {width: width - 48}]}
        onPress={onBack}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.backIcon}
        />
        <Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
