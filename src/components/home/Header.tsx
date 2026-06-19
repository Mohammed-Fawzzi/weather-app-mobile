import Skeleton from "@/components/common/ui/Skeleton";
import SkeletonImage from "@/components/common/ui/SkeletonImage";
import { Text, View } from "react-native";

type Props = {
    weatherData: any | null;
    showImages?: boolean;
};

export default function Header({ weatherData, showImages = true }: Props) {
    if (!weatherData) return null;

    return (
        <View className="relative w-11/12 self-center mt-6">
            <View className="relative w-full h-64">
                {showImages ? (
                    <SkeletonImage
                        source={require("@assets/images/hero-current-weather.png")}
                        className="h-full w-full rounded-3xl"
                        skeletonClassName="rounded-3xl"
                        blurRadius={1}
                    />
                ) : (
                    <Skeleton className="h-full w-full rounded-3xl" />
                )}

                <View className="absolute inset-0 bg-black/35 rounded-3xl" />
            </View>

            <View className="absolute inset-0 items-center justify-center px-5">
                <View className="flex-row justify-center items-center">
                    {showImages ? (
                        <SkeletonImage
                            source={{
                                uri: `https:${weatherData.current.condition.icon}`,
                            }}
                            className="h-24 w-24"
                            resizeMode="contain"
                        />
                    ) : (
                        <Skeleton className="h-24 w-24 rounded-full" />
                    )}

                    <Text className="text-5xl text-white font-medium">
                        {Math.round(weatherData.current.temp_c)}°
                    </Text>
                </View>

                <Text className="text-base text-white font-semibold mb-2">
                    {weatherData.location?.name}, {weatherData.location?.country}
                </Text>

                <Text className="text-2xl text-white font-medium">
                    {weatherData.current.condition.text}
                </Text>

                <View className="mt-3 flex-row flex-wrap justify-center">
                    <Text className="text-white px-2">
                        Feels Like {Math.round(weatherData.current.feelslike_c)}°
                    </Text>

                    <Text className="text-white px-2">
                        Wind {weatherData.current.wind_kph} km/h
                    </Text>

                    <Text className="text-white px-2">
                        Visibility {weatherData.current.vis_km} km
                    </Text>

                    <Text className="text-white px-2">
                        Humidity {weatherData.current.humidity}%
                    </Text>
                </View>
            </View>
        </View>
    );
}
