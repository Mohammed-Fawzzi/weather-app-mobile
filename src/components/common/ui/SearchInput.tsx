import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchInput() {
    return (
        <View className="w-11/12 flex-row items-center rounded-lg bg-gray-200 px-4 mt-5">
            <Ionicons name="search" size={20} color="#9CA3AF" />

            <TextInput
                className="ml-2 flex-1"
                placeholder="Search your location..."
                placeholderTextColor="#9CA3AF"
            />
        </View>
    );
}