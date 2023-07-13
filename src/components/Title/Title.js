import React from 'react';
import {Text} from 'react-native';
import styles from './Title.module.css';

const Title = ({text, style}) => {
  return <Text style={[styles.subtitle, style]}>{text}</Text>;
};

export default Title;
