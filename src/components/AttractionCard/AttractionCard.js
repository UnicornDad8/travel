import {memo} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import styles from './AttractionCard.module.css';

const {width} = Dimensions.get('window');

const style = {
  width: (width - 80) / 2,
  height: 120,
};

const AttractionCard = ({imageSrc, title, subtitle}) => {
  return (
    <View style={styles.card}>
      <Image style={[styles.image, style]} source={{uri: imageSrc}} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require('../../assets/location.png')}
          />
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(AttractionCard);
