import { router } from "expo-router";
import { View, Image } from "react-native";
import { ScrollView } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full
Z-0"/>
      <ScrollView className="flex-1 px-5"
        showsVerticalScrollIndicator={false} contentContainerStyle={{
          minHeight: "100%", paddingBottom: 10
        }}>
        <Image source={icons.logo} className="w-12 h-10
mt-20 mb-5 mx-auto" />
          <View className="flex-1 mt-5">
            <SearchBar 
            onPress={() => router.push("/search")}
            placeholder="Type a movie name"
            value=""
            onChangeText={() => {}}
            placeholderTextColor="#a8b5db"
            />
          </View>
      </ScrollView>
    </View>
  );
}
