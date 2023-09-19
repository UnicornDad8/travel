import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './InfoCard.module.css';

const InfoCard = ({icon, children}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.text}>{children}</View>
    </View>
  );
};

export default InfoCard;
