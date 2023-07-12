import React from 'react';
import {Text} from 'react-native';
import styles from './Title.module.css';

const Title = ({text}) => {
  return <Text style={styles.subtitle}>{text}</Text>;
};

export default Title;
