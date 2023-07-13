import {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import styles from './HomeScreen.module.css';

categories = [
  {
    id: 'asdasfdfnh-1',
    name: 'All',
  },
  {
    id: 'qwyierbasa-2',
    name: 'Popular',
  },
  {
    id: 'Ljlkqweass-3',
    name: 'Historical',
  },
  {
    id: 'asjghfaksj-4',
    name: 'Recomended',
  },
  {
    id: 'asdasdlkfj-5',
    name: 'Most Viewed',
  },
  {
    id: 'ipyuqqqwdaa-6',
    name: 'Most Visited',
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <FlatList
          data={data}
          numColumns={2}
          ListHeaderComponent={
            <View>
              <Header />
              <Title text="Explore Attractions" style={styles.categoryTitle} />
              <Categories
                selectedCategory={selectedCategory}
                onCategoryPress={setSelectedCategory}
                categories={categories}
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
