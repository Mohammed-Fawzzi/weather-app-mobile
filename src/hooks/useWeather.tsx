import { useEffect, useState } from "react";
import { BaseUrl, ApiKey } from "../utils/variables";
import axios from "axios";

export default function useWeather() {
    const [weatherData, setWeatherData] = useState<any>(null);

    async function getExample() {
        const weatherData = await axios.get(`${BaseUrl}/forecast.json?key=${ApiKey}&q=cairo&days=7`);
        setWeatherData(weatherData.data.forecast.forecastday);
        return weatherData.data.forecast.forecastday;
    }

    return (
        { weatherData, getExample }
    )
}
