import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import InfoCard from '../../components/InfoCard';
import styles from './AttractionScreen.module.css';

const {height} = Dimensions.get('window');

const AttractionScreen = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 4) : [];
  const diffImages = item?.images?.length - slicedImages?.length;

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
            <Pressable hitSlop={8}>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AttractionScreen;
