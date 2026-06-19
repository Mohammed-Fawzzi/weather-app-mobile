import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Skeleton from "@/components/common/ui/Skeleton";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";

type Props = {
    onSearch: (query: string) => void;
    isLoading?: boolean;
    defaultCity?: string;
};

export default function SearchInput({
    onSearch,
    isLoading = false,
    defaultCity = "riyadh",
}: Props) {
    const [query, setQuery] = useState("");

    const handleChangeText = (text: string) => {
        setQuery(text);

        if (text.trim() === "" && query.trim() !== "" && !isLoading) {
            onSearch(defaultCity);
        }
    };

    const handleSubmit = () => {
        const trimmedQuery = query.trim();
        if (!trimmedQuery || isLoading) return;
        Keyboard.dismiss();
        onSearch(trimmedQuery);
    };

    return (
        <View className="mt-5 w-11/12 flex-row items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-700/90">
            <View className="h-14 flex-1 flex-row items-center px-4">
                <Ionicons
                    name="search-outline"
                    size={20}
                    color="#94A3B8"
                    style={{ marginRight: 10 }}
                />

                <TextInput
                    className="flex-1 text-base text-slate-800 dark:text-slate-100"
                    placeholder="Search country or city..."
                    placeholderTextColor="#94A3B8"
                    value={query}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChangeText}
                    onSubmitEditing={handleSubmit}
                    returnKeyType="search"
                    editable={!isLoading}
                />
            </View>

            <Pressable
                onPress={handleSubmit}
                disabled={isLoading}
                className="h-14 min-w-[88px] items-center justify-center rounded-r-2xl bg-blue-500 px-5 active:bg-blue-600 disabled:opacity-70"
            >
                {isLoading ? (
                    <Skeleton className="h-5 w-16 rounded-md bg-blue-400 dark:bg-blue-400" />
                ) : (
                    <View className="flex-row items-center gap-1.5">
                        <Ionicons name="search" size={18} color="#fff" />
                        <Text className="text-base font-semibold text-white">
                            Search
                        </Text>
                    </View>
                )}
            </Pressable>
        </View>
    );
}
