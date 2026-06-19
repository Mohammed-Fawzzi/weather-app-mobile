import Skeleton from "@/components/common/ui/Skeleton";
import SkeletonImage from "@/components/common/ui/SkeletonImage";
import { getDayLabel } from "@/utils/weatherHelpers";
import { Text, View } from "react-native";

type Props = {
    weatherData: any | null;
    showImages?: boolean;
};

export default function ExtendedForecast({
    weatherData,
    showImages = true,
}: Props) {
    if (!weatherData?.forecast?.forecastday) return null;

    const remainingDays = weatherData.forecast.forecastday.slice(3);
    if (remainingDays.length === 0) return null;

    return (
        <View className="w-11/12 self-center mt-5 mb-8">
            {remainingDays.map((day: any, index: number) => (
                <View
                    key={day.date}
                    className="flex-row items-center justify-between py-3 border-b border-slate-200 dark:border-slate-600"
                >
                    <View className="flex-row items-center gap-3 flex-1">
                        {showImages ? (
                            <SkeletonImage
                                source={{
                                    uri: `https:${day.day.condition.icon}`,
                                }}
                                className="h-8 w-8"
                                resizeMode="contain"
                            />
                        ) : (
                            <Skeleton className="h-8 w-8 rounded-full" />
                        )}
                        <Text className="text-base title">
                            {getDayLabel(day.date, index + 3)}
                        </Text>
                    </View>

                    <View className="flex-row gap-3">
                        <Text className="text-base font-medium title">
                            {Math.round(day.day.maxtemp_c)}°
                        </Text>
                        <Text className="text-base secondary-text">
                            {Math.round(day.day.mintemp_c)}°
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}
