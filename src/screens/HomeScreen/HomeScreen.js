import {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import styles from './HomeScreen.module.css';

const ALL = 'All';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No items found</Text>
          }
          ListHeaderComponent={
            <View>
              <Header />
              <Title text="Explore Attractions" style={styles.categoryTitle} />
              <Categories
                selectedCategory={selectedCategory}
                onCategoryPress={setSelectedCategory}
                categories={[ALL, ...categories]}
              />
            </View>
          }
          keyExtractor={item => String(item?.id)}
          renderItem={({item, index}) => (
            <AttractionCard
              key={item.id}
              styleProp={
                index % 2 === 0
                  ? {marginRight: 12, marginLeft: 32}
                  : {marginRight: 32}
              }
              title={item.name}
              subtitle={item.city}
              imageSrc={item.images?.length ? item.images[0] : null}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
