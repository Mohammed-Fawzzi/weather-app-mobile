import { useEffect } from "react";
import SearchInput from "@/components/common/ui/SearchInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import useWeather from "@hooks/useWeather";
import { StatusBar } from "expo-status-bar";
import Loading from "@/components/common/ui/Loading";
import Header from "@/components/common/ui/Header";

export default function HomeScreen() {
    const { weatherData, isLoading, getExample } = useWeather();

    useEffect(() => {
        getExample()
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <SafeAreaView className="flex-1 items-center">
            <View>
                <StatusBar style="dark" />
                <View className="flex-1 w-full">
                    <Header />
                    <SearchInput />
                </View>
            </View>
        </SafeAreaView>
    )
}



