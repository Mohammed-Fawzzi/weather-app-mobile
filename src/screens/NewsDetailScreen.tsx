import { useTheme } from "@/contexts/ThemeContext";
import { NewsStackParamList } from "@/navigation/types";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView, WebViewNavigation } from "react-native-webview";

type Props = NativeStackScreenProps<NewsStackParamList, "NewsDetail">;

export default function NewsDetailScreen({ navigation, route }: Props) {
    const { article } = route.params;
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);

    const iconColor = theme === "dark" ? "#FFFFFF" : "#000000";

    const handleNavigationChange = useCallback((navState: WebViewNavigation) => {
        setIsLoading(navState.loading);
    }, []);

    const hideLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="screen flex-1"
        >
            <View className="flex-row items-center px-4 py-3 border-b border-slate-200 dark:border-slate-600">
                <Pressable
                    onPress={() => navigation.goBack()}
                    className="mr-3 p-1"
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                >
                    <Ionicons name="arrow-back" size={24} color={iconColor} />
                </Pressable>

                <Text className="flex-1 text-base font-bold title" numberOfLines={1}>
                    {article.source.name}
                </Text>
            </View>

            <View className="flex-1">
                {isLoading ? (
                    <View className="absolute inset-0 z-10 items-center justify-center">
                        <ActivityIndicator size="large" color="#1E9BFF" />
                    </View>
                ) : null}

                <WebView
                    source={{ uri: article.url }}
                    onNavigationStateChange={handleNavigationChange}
                    onLoad={hideLoading}
                    onError={hideLoading}
                    onHttpError={hideLoading}
                    style={{ flex: 1 }}
                />
            </View>
        </SafeAreaView>
    );
}
