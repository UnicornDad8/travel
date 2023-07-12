import React from 'react';
import {View} from 'react-native';
import Title from '../Title';
import GradientText from '../GradientText';
import styles from './Header.module.css';

const Header = () => {
  return (
    <View>
      <Title text="Where do" />
      <GradientText style={styles.textGradient}>you want to go?</GradientText>
    </View>
  );
};

export default Header;
