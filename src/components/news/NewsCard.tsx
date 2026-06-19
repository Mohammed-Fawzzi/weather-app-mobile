import { NewsStackParamList } from "@/navigation/types";
import { NewsArticle } from "@/types/news";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import Skeleton from "@/components/common/ui/Skeleton";
import { Image, Pressable, Text, View } from "react-native";

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

function NewsImagePlaceholder() {
    return (
        <View className="h-40 w-full items-center justify-center bg-slate-100 dark:bg-slate-600">
            <Ionicons name="newspaper-outline" size={40} color="#94A3B8" />
        </View>
    );
}

function NewsCardImage({ uri }: { uri: string | null | undefined }) {
    const imageUri = uri?.trim() || null;
    const [isLoading, setIsLoading] = useState(!!imageUri);
    const [hasError, setHasError] = useState(!imageUri);

    if (!imageUri || hasError) {
        return <NewsImagePlaceholder />;
    }

    return (
        <View className="relative w-full h-40 bg-slate-100 dark:bg-slate-600">
            {isLoading && (
                <View className="absolute inset-0">
                    <Skeleton className="h-full w-full rounded-none" />
                </View>
            )}

            <Image
                source={{ uri: imageUri }}
                className={`w-full h-40 ${isLoading ? "opacity-0" : "opacity-100"}`}
                resizeMode="cover"
                onLoad={() => setIsLoading(false)}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
            />
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
            <NewsCardImage uri={urlToImage} />

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
