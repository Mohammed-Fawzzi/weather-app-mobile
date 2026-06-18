import SearchInput from "@/components/common/ui/SearchInput";
import Loading from "@/components/common/ui/Loading";
import ExtendedForecast from "@/components/home/ExtendedForecast";
import Header from "@/components/home/Header";
import HourlyForecast from "@/components/home/HourlyForecast";
import ThreeDayForecast from "@/components/home/ThreeDayForecast";
import TomorrowOutlook from "@/components/home/TomorrowOutlook";
import useWeather from "@/hooks/useWeather";
import MainLayout from "@/layouts/MainLayout";
import { useCallback, useEffect } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";

export default function HomeScreen() {
    const { fetchWeather, isLoading, weatherData } = useWeather();

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    const handleSearch = useCallback(
        (query: string) => {
            fetchWeather(query);
        },
        [fetchWeather],
    );

    if (isLoading && !weatherData) {
        return (
            <MainLayout>
                <Loading />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <View className="flex-1 w-full">
                <ScrollView
                    className="flex-1 w-full"
                    showsVerticalScrollIndicator={false}
                    contentContainerClassName="items-center pb-6"
                >
                    <SearchInput onSearch={handleSearch} isLoading={isLoading} />
                    <Header weatherData={weatherData} />
                    <HourlyForecast weatherData={weatherData} />
                    <TomorrowOutlook weatherData={weatherData} />
                    <ThreeDayForecast weatherData={weatherData} />
                    <ExtendedForecast weatherData={weatherData} />
                </ScrollView>

                {isLoading && weatherData && (
                    <View className="absolute inset-0 z-50 items-center justify-center bg-black/30">
                        <ActivityIndicator size="large" color="#3B82F6" />
                    </View>
                )}
            </View>
        </MainLayout>
    );
}
