import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { ImageSourcePropType } from 'react-native'

interface TabIconProps {
  icon: ImageSourcePropType;
  title: string;
  focused: boolean;
  color: string; // This prop is typically passed by `tabBarIcon`
}

const TabIcon = ({ icon, title, focused, color }: TabIconProps) => {
  if (focused) {
    return (
        <ImageBackground
          source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={icon} tintColor="#151312" className="size-5" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
}

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 26,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen 
      name="index" 
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({focused, color}) => TabIcon({icon: icons.home, title: "Home", focused, color}),
      }}
      />
      <Tabs.Screen name="search"
      options={{
        title: "Search",
        headerShown: false,
        tabBarIcon: ({focused, color}) => TabIcon({icon: icons.search, title: "Search", focused, color}),
      }}
      />
      <Tabs.Screen name="saved" 
      options={{
        title: "Saved",
        headerShown: false,
        tabBarIcon: ({focused, color}) => TabIcon({icon: icons.save, title: "Saved", focused, color}),
      }}
      />
      <Tabs.Screen name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({focused, color}) => TabIcon({icon: icons.person, title: "Profile", focused, color}),
      }}
      />
    </Tabs>
  )
}

export default _Layout