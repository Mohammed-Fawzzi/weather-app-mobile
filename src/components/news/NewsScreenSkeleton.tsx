import NewsCardSkeleton from "@/components/news/NewsCardSkeleton";
import Skeleton from "@/components/common/ui/Skeleton";
import { ScrollView, View } from "react-native";

export default function NewsScreenSkeleton() {
    return (
        <ScrollView
            className="flex-1 w-full"
            showsVerticalScrollIndicator={false}
            contentContainerClassName="items-center pb-6 px-4"
        >
            <View className="mb-4 mt-2 w-11/12 self-center">
                <Skeleton className="h-7 w-28 rounded" />
                <Skeleton className="mt-2 h-4 w-56 rounded" />
            </View>

            <View className="w-11/12 self-center">
                {Array.from({ length: 3 }).map((_, index) => (
                    <NewsCardSkeleton key={index} />
                ))}
            </View>
        </ScrollView>
    );
}
