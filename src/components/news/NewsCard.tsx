import { NewsStackParamList } from "@/navigation/types";
import { NewsArticle } from "@/types/news";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    Text,
    View,
} from "react-native";

type NavigationProp = NativeStackNavigationProp<
    NewsStackParamList,
    "NewsList"
>;

type Props = {
    article: NewsArticle;
};

function formatDate(isoDate: string) {
    return new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function NewsCardImage({ uri }: { uri: string }) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <View className="relative w-full h-40 bg-slate-100 dark:bg-slate-600">
            {(isLoading || hasError) && (
                <View className="absolute inset-0 items-center justify-center">
                    {hasError ? (
                        <Ionicons
                            name="image-outline"
                            size={36}
                            color="#94A3B8"
                        />
                    ) : (
                        <ActivityIndicator size="small" color="#1E9BFF" />
                    )}
                </View>
            )}

            {!hasError && (
                <Image
                    source={{ uri }}
                    className={`w-full h-40 ${isLoading ? "opacity-0" : "opacity-100"}`}
                    resizeMode="cover"
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                    }}
                />
            )}
        </View>
    );
}

export default function NewsCard({ article }: Props) {
    const navigation = useNavigation<NavigationProp>();
    const { title, description, urlToImage, source, publishedAt } = article;

    return (
        <Pressable
            className="card overflow-hidden mb-4"
            onPress={() => navigation.navigate("NewsDetail", { article })}
        >
            {urlToImage ? <NewsCardImage uri={urlToImage} /> : null}

            <View className="p-4">
                <Text className="text-xs secondary-text mb-2">
                    {source.name} · {formatDate(publishedAt)}
                </Text>

                <Text className="text-base font-bold title" numberOfLines={2}>
                    {title}
                </Text>

                {description ? (
                    <Text
                        className="text-sm secondary-text mt-2"
                        numberOfLines={3}
                    >
                        {description}
                    </Text>
                ) : null}
            </View>
        </Pressable>
    );
}
