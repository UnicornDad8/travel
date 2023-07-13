import {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Header />
        <Title text="Explore Attractions" style={styles.categoryTitle} />
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={categories}
        />
        <View style={styles.row}>
          <AttractionCard
            title="Nature Landing"
            subtitle="dummy text"
            imageSrc="https://github.com/Ceci007/image-repository/blob/master/course-3.jpg?raw=true"
          />
          <AttractionCard
            title="Nature Landing"
            subtitle="dummy text"
            imageSrc="https://github.com/Ceci007/image-repository/blob/master/course-3.jpg?raw=true"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
