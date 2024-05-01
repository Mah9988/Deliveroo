import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function SearchBox() {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 p-2 rounded">
        <MagnifyingGlassIcon size={20} color="#00CCBB" />
        <TextInput
          placeholder="Reasturant and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
  );
}
