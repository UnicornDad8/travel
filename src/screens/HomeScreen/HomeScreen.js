import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
