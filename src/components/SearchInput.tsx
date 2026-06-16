import { Text, TextInput, View } from "react-native";

export default function SearchInput() {
    return (
        <View className="flex-row items-center justify-between bg-gray-200 rounded-full px-4 w-11/12">
            <TextInput placeholder="Search your location..."></TextInput>
        </View>
    )
}
