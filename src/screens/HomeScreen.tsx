import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { ApiKey, BaseUrl } from "../utils/variables";
import useWeather from "../hooks/useWeather";

export default function HomeScreen() {
    const { weatherData, getExample } = useWeather();

    useEffect(() => {
        getExample()
    }, [])

    return (
        <SafeAreaView className="flex-1 items-center my-5">
            <SearchInput />
            {weatherData && weatherData.map((day: any) => {
                return (
                    <View key={day.date}>
                        <Text>{day.date}</Text>
                        <Text>{day.day.avgtemp_c}</Text>
                    </View>
                )
            })}
        </SafeAreaView>
    )
}
