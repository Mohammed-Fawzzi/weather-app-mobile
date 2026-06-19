import Skeleton from "@/components/common/ui/Skeleton";
import { ScrollView, View } from "react-native";

export default function HomeScreenSkeleton() {
    return (
        <ScrollView
            className="flex-1 w-full"
            showsVerticalScrollIndicator={false}
            contentContainerClassName="items-center pb-6"
        >
            <Skeleton className="mt-5 h-14 w-11/12 rounded-2xl" />

            <Skeleton className="mt-6 h-64 w-11/12 rounded-3xl" />

            <View className="mt-6 w-11/12 flex-row justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-600">
                {Array.from({ length: 6 }).map((_, index) => (
                    <View key={index} className="items-center gap-2">
                        <Skeleton className="h-3 w-10 rounded" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-4 w-8 rounded" />
                        <Skeleton className="h-3 w-6 rounded" />
                    </View>
                ))}
            </View>

            <View className="mt-5 w-11/12 rounded-2xl bg-slate-100 p-4 dark:bg-slate-700/80">
                <Skeleton className="mb-2 h-3 w-28 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="mt-2 h-4 w-4/5 rounded" />
            </View>

            <View className="mt-5 w-11/12 flex-row gap-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <View key={index} className="flex-1 overflow-hidden rounded-2xl">
                        <Skeleton className="h-44 w-full rounded-none" />
                        <Skeleton className="h-9 w-full rounded-none" />
                    </View>
                ))}
            </View>

            <View className="mt-5 w-11/12 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <View
                        key={index}
                        className="flex-row items-center justify-between border-b border-slate-200 py-3 dark:border-slate-600"
                    >
                        <View className="flex-row items-center gap-3">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-4 w-24 rounded" />
                        </View>
                        <View className="flex-row gap-3">
                            <Skeleton className="h-4 w-8 rounded" />
                            <Skeleton className="h-4 w-8 rounded" />
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
