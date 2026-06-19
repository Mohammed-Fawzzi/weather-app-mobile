import Skeleton from "@/components/common/ui/Skeleton";
import { View } from "react-native";

export default function Loading() {
    return (
        <View className="flex-1 items-center justify-center">
            <Skeleton className="h-12 w-12 rounded-full" />
        </View>
    );
}
