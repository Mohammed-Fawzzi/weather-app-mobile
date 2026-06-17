import { useEffect, useState } from "react";
import { BaseUrl, ApiKey } from "@utils/variables";
import axios from "axios";

export default function useWeather() {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function getExample() {
        try {
            setIsLoading(true);
            const weatherData = await axios.get(`${BaseUrl}/forecast.json?key=${ApiKey}&q=cairo&days=7`);
            setWeatherData(weatherData.data.forecast.forecastday);
            setIsLoading(false);
            return weatherData.data.forecast.forecastday;
        } catch (error) {
            setIsLoading(false);
            console.error("Error fetching weather data:", error);
        }
    }

    return (
        { weatherData, isLoading, getExample }
    )
}
