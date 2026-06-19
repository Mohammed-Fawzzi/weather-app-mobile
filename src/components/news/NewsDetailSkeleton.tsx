import Skeleton from "@/components/common/ui/Skeleton";
import { View } from "react-native";

export default function NewsDetailSkeleton() {
    return (
        <View className="flex-1 px-4 pt-6">
            <Skeleton className="mb-4 h-48 w-full rounded-2xl" />
            <Skeleton className="mb-3 h-6 w-full rounded" />
            <Skeleton className="mb-3 h-6 w-11/12 rounded" />
            <Skeleton className="mb-2 h-4 w-full rounded" />
            <Skeleton className="mb-2 h-4 w-full rounded" />
            <Skeleton className="mb-2 h-4 w-full rounded" />
            <Skeleton className="mb-2 h-4 w-10/12 rounded" />
            <Skeleton className="mt-4 h-4 w-full rounded" />
            <Skeleton className="mt-2 h-4 w-full rounded" />
            <Skeleton className="mt-2 h-4 w-9/12 rounded" />
        </View>
    );
}
