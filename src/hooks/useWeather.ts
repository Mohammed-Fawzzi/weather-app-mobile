import axios from "axios";
import { useCallback, useState } from "react";
import { ApiKey, BaseUrl } from "@utils/variables";

export default function useWeather() {
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeather = useCallback(async (city = "riyadh") => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${BaseUrl}/forecast.json?key=${ApiKey}&q=${city}&days=7`,
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { weatherData, isLoading, fetchWeather };
}
