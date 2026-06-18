import { ActivityIndicator, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

type Props = {
    onSearch: (query: string) => void;
    isLoading?: boolean;
};

export default function SearchInput({ onSearch, isLoading = false }: Props) {
    const [query, setQuery] = useState("");

    const handleSubmit = () => {
        const trimmedQuery = query.trim();
        if (!trimmedQuery || isLoading) return;
        Keyboard.dismiss();
        onSearch(trimmedQuery);
    };

    return (
        <View className="w-11/12 h-14 flex-row items-center rounded-3xl bg-slate-100 dark:bg-slate-700/80 mt-5 overflow-hidden border border-slate-200 dark:border-slate-600">
            <TextInput
                className="flex-1 px-4 text-slate-700 dark:text-slate-200"
                placeholder="Search country or city..."
                placeholderTextColor="#1E9BFF"
                value={query}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setQuery}
                onSubmitEditing={handleSubmit}
                returnKeyType="search"
            />

            <TouchableOpacity
                onPress={handleSubmit}
                className="h-full items-center justify-center rounded-r-3xl bg-blue-500 px-5"
                activeOpacity={0.8}
                disabled={isLoading}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text className="text-sm font-semibold text-white">بحث</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}