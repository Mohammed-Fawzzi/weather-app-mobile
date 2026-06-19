import Skeleton from "@/components/common/ui/Skeleton";
import { View } from "react-native";

export default function NewsCardSkeleton() {
    return (
        <View className="card mb-4 overflow-hidden">
            <Skeleton className="h-40 w-full rounded-none" />

            <View className="p-4">
                <Skeleton className="mb-2 h-3 w-32 rounded" />
                <Skeleton className="h-5 w-full rounded" />
                <Skeleton className="mt-2 h-5 w-4/5 rounded" />
                <Skeleton className="mt-3 h-4 w-full rounded" />
                <Skeleton className="mt-2 h-4 w-full rounded" />
                <Skeleton className="mt-2 h-4 w-2/3 rounded" />
            </View>
        </View>
    );
}
