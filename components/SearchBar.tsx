import { View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { icons } from '@/constants/icons'

interface SearchBarProps {
    onPress: () => void;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholderTextColor: string;
}

const SearchBar = ({onPress, placeholder, value, onChangeText, placeholderTextColor}: SearchBarProps) => {
    return (
        <View className="flex-row items-center bg-dark-200
rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5"
                resizeMode="contain" tintColor="#ab8bff" />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
                className="flex-1 ml-2 text-white"
            />
        </View>
    )
}

export default SearchBar