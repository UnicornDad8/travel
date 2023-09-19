import {memo} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './Categories.module.css';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item, index}) => {
          const selected = selectedCategory === item;

          return (
            <TouchableOpacity
              onPress={() => onCategoryPress(item)}
              style={[
                styles.itemContainer,
                selected ? styles.selectedItemContainer : {},
                index === 0 ? {marginLeft: 20} : {},
              ]}>
              <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(Categories);
