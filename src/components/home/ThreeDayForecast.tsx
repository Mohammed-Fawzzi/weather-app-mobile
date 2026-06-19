import Skeleton from "@/components/common/ui/Skeleton";
import SkeletonImage from "@/components/common/ui/SkeletonImage";
import { getDayLabel } from "@/utils/weatherHelpers";
import { getWeatherBackground } from "@/utils/weatherImages";
import { Text, View } from "react-native";

type Props = {
    weatherData: any | null;
    showImages?: boolean;
};

export default function ThreeDayForecast({
    weatherData,
    showImages = true,
}: Props) {
    if (!weatherData?.forecast?.forecastday) return null;

    const days = weatherData.forecast.forecastday.slice(0, 3);

    return (
        <View className="w-11/12 self-center mt-5 flex-row gap-3">
            {days.map((day: any, index: number) => (
                <View key={day.date} className="flex-1 rounded-2xl overflow-hidden">
                    <View className="relative h-44">
                        {showImages ? (
                            <SkeletonImage
                                source={getWeatherBackground(
                                    day.day.condition.text,
                                )}
                                className="h-full w-full"
                            />
                        ) : (
                            <Skeleton className="h-full w-full rounded-none" />
                        )}
                        <View className="absolute inset-0 bg-black/30" />

                        <View className="absolute inset-0 items-center justify-center px-2 pb-6">
                            {showImages ? (
                                <SkeletonImage
                                    source={{
                                        uri: `https:${day.day.condition.icon}`,
                                    }}
                                    className="h-10 w-10"
                                    resizeMode="contain"
                                />
                            ) : (
                                <Skeleton className="h-10 w-10 rounded-full" />
                            )}
                            <Text
                                className="text-white text-xs font-medium mt-1 text-center"
                                numberOfLines={1}
                            >
                                {day.day.condition.text}
                            </Text>
                            <Text className="text-white text-2xl font-bold mt-1">
                                {Math.round(day.day.maxtemp_c)}°
                            </Text>
                        </View>
                    </View>

                    <View className="bg-white dark:bg-slate-700 py-2 items-center">
                        <Text className="text-sm font-bold text-black dark:text-white">
                            {getDayLabel(day.date, index)}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}
