import {memo} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './Categories.module.css';

const Categories = ({categories, selectedCategory}) => {
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => {
          const selected = selectedCategory === item;

          return (
            <View
              style={[
                styles.itemContainer,
                selected ? styles.selectedItemContainer : {},
              ]}>
              <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
                {item.name}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(Categories);
