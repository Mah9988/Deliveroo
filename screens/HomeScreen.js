import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { getFeatures } from "../data";
import client from "../sanity";
export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client.fetch(getFeatures()).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.androidSafeArea} className="bg-white pt-5 ">
      {/* Header */}
      <Header />

      {/* Search */}
      <SearchBox />

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FlatList
          data={featuredCategories}
          renderItem={({ item }) => (
            <FeaturedRow
              id={item._id}
              title={item.name}
              desc={item.short_description}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
