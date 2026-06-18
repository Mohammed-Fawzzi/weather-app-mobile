import { formatHourTime } from "@/utils/weatherHelpers";
import { Image, ScrollView, Text, View } from "react-native";

type Props = {
    weatherData: any | null;
};

export default function HourlyForecast({ weatherData }: Props) {
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
                            <Image
                                source={{ uri: `https:${hour.condition.icon}` }}
                                className="w-8 h-8 mb-2"
                            />
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
