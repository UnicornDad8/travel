import {memo} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './Categories.module.css';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <View>
      <FlatList
        horizontal
        style={styles.flatList}
        data={categories}
        renderItem={({item}) => {
          const selected = selectedCategory === item;

          return (
            <TouchableOpacity
              onPress={() => onCategoryPress(item)}
              style={[
                styles.itemContainer,
                selected ? styles.selectedItemContainer : {},
              ]}>
              <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(Categories);
