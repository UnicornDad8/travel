import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ImgToBase64 from 'react-native-image-base64';
import Share from 'react-native-share';
import InfoCard from '../../components/InfoCard';
import styles from './AttractionScreen.module.css';

const {height} = Dimensions.get('window');

const AttractionScreen = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 4) : [];
  const diffImages = item?.images?.length - slicedImages?.length;

  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    longitudeDelta: 0.005,
    latitudeDelta: 0.005,
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  const onShare = async () => {
    try {
      const base64Image = await ImgToBase64.getBase64String(mainImage);
      console.log('base64Imgae', base64Image);

      Share.open({
        title: item?.name,
        message: 'Hey, I wanted to share with you this amazing attraction',
        url: `data:image/jpg;base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (err) {
      console.log('sharing error', err);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ImageBackground
          style={{
            width: '100%',
            height: height / 2,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}>
          <View style={styles.imageHeader}>
            <Pressable onPress={onBack} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
            <Pressable hitSlop={8} onPress={onShare}>
              <Image
                style={styles.icon}
                source={require('../../assets/share.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigate} style={styles.imageFooter}>
            {slicedImages?.map((image, index) => (
              <View key={image} style={styles.miniImageContainer}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.middleHeaderContainer}>
          <View style={styles.middTitleContainer}>
            <Text style={styles.title}>{item?.name}</Text>
            <Text style={styles.price}>{item?.entry_price}</Text>
          </View>
          <Text style={styles.city}>{item?.city}</Text>
          <InfoCard icon={require('../../assets/location_circle.png')}>
            <Text style={styles.iconText}>{item?.address}</Text>
          </InfoCard>
          <InfoCard icon={require('../../assets/schedule.png')}>
            <Text style={styles.iconText}>OPEN</Text>
            <Text
              style={
                styles.iconText
              }>{`${item?.opening_time} - ${item?.closing_time}`}</Text>
          </InfoCard>
          <MapView style={styles.map} initialRegion={coords}>
            <Marker coordinate={coords} title={item?.name} />
          </MapView>
          <Text
            style={styles.mapText}
            onPress={() => navigation.navigate('Map', {item})}>
            Show full screen map
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttractionScreen;
