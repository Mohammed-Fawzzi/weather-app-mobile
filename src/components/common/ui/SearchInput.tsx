import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { useState } from "react";

type Props = {
    onSearch: (query: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
    const [query, setQuery] = useState("");

    const handleSubmit = () => {
        const trimmedQuery = query.trim();
        if (!trimmedQuery) return;
        onSearch(trimmedQuery);
    };

    return (
        <View className="w-11/12 flex-row items-center rounded-3xl bg-slate-100 dark:bg-slate-700/80 px-4 mt-5">
            <Ionicons name="search" size={20} color="#1E9BFF" />

            <TextInput
                className="ml-2 flex-1 text-slate-700 dark:text-slate-200"
                placeholder="Search country or city..."
                placeholderTextColor="#1E9BFF"
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSubmit}
                returnKeyType="search"
            />
        </View>
    );
}