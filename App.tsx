import "./global.css";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
    const [themeReady, setThemeReady] = useState(false);
    const [fontsLoaded] = useFonts({
        PoppinsRegular: require("@assets/fonts/Poppins-Regular.ttf"),
        PoppinsMedium: require("@assets/fonts/Poppins-Medium.ttf"),
        PoppinsBold: require("@assets/fonts/Poppins-Bold.ttf"),
    });

    const handleThemeReady = useCallback(() => {
        setThemeReady(true);
    }, []);

    useEffect(() => {
        if (fontsLoaded && themeReady) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, themeReady]);

    return (
        <SafeAreaProvider>
            <ThemeProvider onReady={handleThemeReady}>
                {fontsLoaded ? <AppNavigator /> : null}
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
