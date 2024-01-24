// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './config'; 

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'categories'));
        const categoriesData = [];
        querySnapshot.forEach((doc) => {
          categoriesData.push(doc.data());
        });
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Playground', { category: item.id })}
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 20 }}>
        Categories
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
