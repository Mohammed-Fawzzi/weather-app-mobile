import {
    getStoredTheme,
    saveTheme,
    ThemePreference,
} from "@/lib/themeStorage";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
} from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import { useColorScheme } from "nativewind";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
    onReady?: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

function isThemeApplied(
    preference: ThemePreference | null,
    colorScheme: "light" | "dark" | undefined,
) {
    if (preference === null) {
        return false;
    }

    if (preference === "system") {
        return colorScheme !== undefined;
    }

    return colorScheme === preference;
}

export function ThemeProvider({ children, onReady }: ThemeProviderProps) {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [preference, setPreference] = useState<ThemePreference | null>(null);
    const [isBootstrapped, setIsBootstrapped] = useState(false);

    useEffect(() => {
        getStoredTheme().then((stored) => {
            setPreference(stored);
            setColorScheme(stored);
        });
    }, [setColorScheme]);

    const themeApplied = isThemeApplied(preference, colorScheme);

    useEffect(() => {
        if (themeApplied && !isBootstrapped) {
            setIsBootstrapped(true);
            onReady?.();
        }
    }, [themeApplied, isBootstrapped, onReady]);

    const toggleTheme = useCallback(() => {
        const current = (colorScheme ?? "light") as Theme;
        const next: Theme = current === "dark" ? "light" : "dark";

        LayoutAnimation.configureNext(
            LayoutAnimation.create(180, "easeInEaseOut", "opacity"),
        );
        setColorScheme(next);
        setPreference(next);
        void saveTheme(next);
    }, [colorScheme, setColorScheme]);

    const value = useMemo(
        () => ({
            theme: (colorScheme ?? "light") as Theme,
            toggleTheme,
        }),
        [colorScheme, toggleTheme],
    );

    if (!isBootstrapped) {
        return null;
    }

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
