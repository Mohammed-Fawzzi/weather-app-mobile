import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchInput() {
    return (
        <View className="w-11/12 flex-row items-center rounded-3xl bg-slate-100 dark:bg-slate-700/80 px-4 mt-5">
            <Ionicons name="search" size={20} color="#1E9BFF" />

            <TextInput
                className="ml-2 flex-1"
                placeholder="Search your location..."
                placeholderTextColor="#1E9BFF"
            />
        </View>
    );
}