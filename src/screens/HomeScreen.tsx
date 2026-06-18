import SearchInput from "@/components/common/ui/SearchInput";
import Loading from "@/components/common/ui/Loading";
import ExtendedForecast from "@/components/home/ExtendedForecast";
import Header from "@/components/home/Header";
import HourlyForecast from "@/components/home/HourlyForecast";
import ThreeDayForecast from "@/components/home/ThreeDayForecast";
import TomorrowOutlook from "@/components/home/TomorrowOutlook";
import useWeather from "@/hooks/useWeather";
import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
    const { fetchWeather, isLoading, weatherData } = useWeather();

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    if (isLoading && !weatherData) {
        return (
            <MainLayout>
                <Loading />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <ScrollView
                className="flex-1 w-full"
                showsVerticalScrollIndicator={false}
                contentContainerClassName="items-center pb-6"
            >
                <SearchInput />
                <Header weatherData={weatherData} />
                <HourlyForecast weatherData={weatherData} />
                <TomorrowOutlook weatherData={weatherData} />
                <ThreeDayForecast weatherData={weatherData} />
                <ExtendedForecast weatherData={weatherData} />
            </ScrollView>
        </MainLayout>
    );
}
