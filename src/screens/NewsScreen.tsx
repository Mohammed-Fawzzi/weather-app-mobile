import NewsCard from "@/components/news/NewsCard";
import Loading from "@/components/common/ui/Loading";
import useNews from "@/contexts/NewsContext";
import MainLayout from "@layouts/MainLayout";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

export default function NewsScreen() {
    const { articles, isLoading, fetchNews } = useNews();

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    if (isLoading) {
        return (
            <MainLayout>
                <Loading />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <ScrollView
                className="flex-1 w-full"
                showsVerticalScrollIndicator={false}
                contentContainerClassName="items-center pb-6 px-4"
            >
                <View className="w-11/12 self-center mt-2 mb-4">
                    <Text className="text-xl font-bold title">
                        Weather News
                    </Text>
                    <Text className="text-sm secondary-text mt-1">
                        Latest headlines about weather
                    </Text>
                </View>

                <View className="w-11/12 self-center">
                    {articles.map((article, index) => (
                        <NewsCard
                            key={`${article.url}-${index}`}
                            article={article}
                        />
                    ))}
                </View>
            </ScrollView>
        </MainLayout>
    );
}
