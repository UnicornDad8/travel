import {memo} from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {MapPinIcon} from 'react-native-heroicons/outline';
import styles from './AttractionCard.module.css';

const {width} = Dimensions.get('window');

const style = {
  width: (width - 50) / 2,
  height: 120,
};

const AttractionCard = ({imageSrc, title, subtitle, onPress, styleProp}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, styleProp]}>
      <Image style={[styles.image, style]} source={{uri: imageSrc}} />
      <View style={styles.cardBody}>
        <View style={styles.rowWrap}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.row}>
          <MapPinIcon size={22} color="#fff" />
          <View style={styles.rowWrap}>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(AttractionCard);
