import SearchInput from "@/components/common/ui/SearchInput";
import ExtendedForecast from "@/components/home/ExtendedForecast";
import Header from "@/components/home/Header";
import HourlyForecast from "@/components/home/HourlyForecast";
import ThreeDayForecast from "@/components/home/ThreeDayForecast";
import TomorrowOutlook from "@/components/home/TomorrowOutlook";
import useWeather from "@/contexts/WeatherContext";
import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
    const { fetchWeather } = useWeather();

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return (
        <MainLayout>
            <ScrollView
                className="flex-1 w-full"
                showsVerticalScrollIndicator={false}
                contentContainerClassName="items-center pb-6"
            >
                <SearchInput />
                <Header />
                <HourlyForecast />
                <TomorrowOutlook />
                <ThreeDayForecast />
                <ExtendedForecast />
            </ScrollView>
        </MainLayout>
    );
}
