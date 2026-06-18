import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    ReactNode,
} from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import { useColorScheme } from "nativewind";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const toggleTheme = useCallback(() => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(180, "easeInEaseOut", "opacity"),
        );
        toggleColorScheme();
    }, [toggleColorScheme]);

    const value = useMemo(
        () => ({
            theme: (colorScheme ?? "light") as Theme,
            toggleTheme,
        }),
        [colorScheme, toggleTheme],
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}
