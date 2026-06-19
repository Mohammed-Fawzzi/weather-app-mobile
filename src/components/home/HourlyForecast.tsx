import Skeleton from "@/components/common/ui/Skeleton";
import SkeletonImage from "@/components/common/ui/SkeletonImage";
import { formatHourTime } from "@/utils/weatherHelpers";
import { ScrollView, Text, View } from "react-native";

type Props = {
    weatherData: any | null;
    showImages?: boolean;
};

export default function HourlyForecast({
    weatherData,
    showImages = true,
}: Props) {
    if (!weatherData?.forecast?.forecastday?.[0]?.hour) return null;

    const hours = weatherData.forecast.forecastday[0].hour;

    return (
        <View className="w-11/12 self-center mt-6">
            <View className="border-t border-slate-200 dark:border-slate-600 pt-4">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerClassName="gap-5 px-1"
                >
                    {hours.map((hour: any) => (
                        <View key={hour.time_epoch} className="items-center min-w-[52px]">
                            <Text className="text-xs secondary-text mb-2">
                                {formatHourTime(hour.time)}
                            </Text>
                            {showImages ? (
                                <SkeletonImage
                                    source={{
                                        uri: `https:${hour.condition.icon}`,
                                    }}
                                    className="mb-2 h-8 w-8"
                                    resizeMode="contain"
                                />
                            ) : (
                                <Skeleton className="mb-2 h-8 w-8 rounded-full" />
                            )}
                            <Text className="text-sm font-medium title mb-2">
                                {Math.round(hour.temp_c)}°
                            </Text>
                            <Text className="text-xs muted-text">
                                {hour.chance_of_rain}%
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
