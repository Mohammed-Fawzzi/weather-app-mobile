import { Text, View } from "react-native";

type Props = {
    weatherData: any | null;
};

export default function TomorrowOutlook({ weatherData }: Props) {
    const tomorrow = weatherData?.forecast?.forecastday?.[1];
    if (!tomorrow) return null;

    const { condition, maxtemp_c } = tomorrow.day;

    return (
        <View className="w-11/12 self-center mt-5">
            <View className="card p-4 bg-slate-100 dark:bg-slate-700/80">
                <Text className="text-xs secondary-text mb-2">Tomorrow&apos;s Outlook</Text>
                <Text className="text-base title">
                    {condition.text} tomorrow. High of {Math.round(maxtemp_c)}°
                </Text>
            </View>
        </View>
    );
}
