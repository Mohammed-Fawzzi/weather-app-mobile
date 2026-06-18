import useWeather from "@/contexts/WeatherContext";
import { Image, Text, View } from "react-native";

export default function Header() {
    const { weatherData } = useWeather();

    if (!weatherData) return null;

    return (
        <View className="relative w-11/12 self-center mt-6">
            <View className="relative w-full h-64">
                <Image
                    source={require("@assets/images/hero-current-weather.png")}
                    className="w-full h-full rounded-3xl"
                    blurRadius={1}
                />

                <View className="absolute inset-0 bg-black/35 rounded-3xl" />
            </View>

            <View className="absolute inset-0 items-center justify-center px-5">
                <View className="flex-row justify-center items-center">
                    <Image
                        source={{
                            uri: `https:${weatherData.current.condition.icon}`,
                        }}
                        className="w-24 h-24"
                    />

                    <Text className="text-5xl text-white font-medium">
                        {Math.round(weatherData.current.temp_c)}°
                    </Text>
                </View>

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
