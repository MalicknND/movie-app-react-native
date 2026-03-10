import { Image, TextInput, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#abb5db"
        className="flex-1 text-white text-base font-medium ml-2"
        onChangeText={() => {}}
        value=""
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBar;
