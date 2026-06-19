import SearchInput from "@/components/common/ui/SearchInput";
import Skeleton from "@/components/common/ui/Skeleton";
import ExtendedForecast from "@/components/home/ExtendedForecast";
import Header from "@/components/home/Header";
import HomeScreenSkeleton from "@/components/home/HomeScreenSkeleton";
import HourlyForecast from "@/components/home/HourlyForecast";
import ThreeDayForecast from "@/components/home/ThreeDayForecast";
import TomorrowOutlook from "@/components/home/TomorrowOutlook";
import useWeather, { DEFAULT_CITY } from "@/hooks/useWeather";
import MainLayout from "@/layouts/MainLayout";
import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
    const isFocused = useIsFocused();
    const [imagesMounted, setImagesMounted] = useState(false);
    const { fetchWeather, isLoading, weatherData } = useWeather();

    useEffect(() => {
        if (isFocused && !weatherData) {
            fetchWeather();
        }
    }, [isFocused, weatherData, fetchWeather]);

    useEffect(() => {
        if (isFocused && weatherData) {
            setImagesMounted(true);
        }
    }, [isFocused, weatherData]);

    const handleSearch = useCallback(
        (query: string) => {
            fetchWeather(query);
        },
        [fetchWeather],
    );

    if (isLoading && !weatherData) {
        return (
            <MainLayout>
                <HomeScreenSkeleton />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <View className="flex-1 w-full">
                <ScrollView
                    className="flex-1 w-full"
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerClassName="items-center pb-6"
                >
                    <SearchInput
                        onSearch={handleSearch}
                        isLoading={isLoading}
                        defaultCity={DEFAULT_CITY}
                    />
                    <Header weatherData={weatherData} showImages={imagesMounted} />
                    <HourlyForecast
                        weatherData={weatherData}
                        showImages={imagesMounted}
                    />
                    <TomorrowOutlook weatherData={weatherData} />
                    <ThreeDayForecast
                        weatherData={weatherData}
                        showImages={imagesMounted}
                    />
                    <ExtendedForecast
                        weatherData={weatherData}
                        showImages={imagesMounted}
                    />
                </ScrollView>

                {isLoading && weatherData && isFocused && (
                    <View className="absolute inset-0 z-50 items-center justify-center bg-black/30">
                        <Skeleton className="h-12 w-12 rounded-full" />
                    </View>
                )}
            </View>
        </MainLayout>
    );
}
