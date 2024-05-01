import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* Category Card */}
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <CategoryCard
            imgUrl={urlFor(item.image).width(200).url()}
            title={item.name}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </ScrollView>
  );
}
