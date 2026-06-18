import { NewsArticle } from "@/types/news";
import { Image, Linking, Pressable, Text, View } from "react-native";

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

export default function NewsCard({ article }: Props) {
    const { title, description, url, urlToImage, source, publishedAt } =
        article;

    return (
        <Pressable
            className="card overflow-hidden mb-4"
            onPress={() => Linking.openURL(url)}
        >
            {urlToImage ? (
                <Image
                    source={{ uri: urlToImage }}
                    className="w-full h-40"
                    resizeMode="cover"
                />
            ) : null}

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
