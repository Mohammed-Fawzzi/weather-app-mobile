import AsyncStorage from "@react-native-async-storage/async-storage";

export const THEME_STORAGE_KEY = "@weather-app/theme";

export type ThemePreference = "light" | "dark" | "system";

export async function getStoredTheme(): Promise<ThemePreference> {
    const saved = await AsyncStorage.getItem(THEME_STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
        return saved;
    }

    return "system";
}

export async function saveTheme(theme: "light" | "dark") {
    await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
}
