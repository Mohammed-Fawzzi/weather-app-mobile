import axios from "axios";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from "react";
import { BaseUrl, ApiKey } from "@utils/variables";

type WeatherContextType = {
    weatherData: any | null;
    isLoading: boolean;
    fetchWeather: (city?: string) => Promise<void>;
};

const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: { children: ReactNode }) {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeather = useCallback(async (city = "cairo") => {
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

    return (
        <WeatherContext.Provider value={{ weatherData, isLoading, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default function useWeather() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeather must be used within WeatherProvider");
    }
    return context;
}
