import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import NewsScreen from "@screens/NewsScreen";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                // tabBarActiveTintColor: "#3B82F6",
                // tabBarInactiveTintColor: "#9CA3AF",

                tabBarActiveTintColor: "#1E9BFF",
                tabBarInactiveTintColor:
                    theme === "dark" ? "#6B7280" : "#A7B0BE",

                tabBarShowLabel: false,

                tabBarStyle: {
                    height: 60,
                    paddingBottom: 0,
                    paddingTop: 0,
                    borderTopWidth: 0,
                    elevation: 8,

                    backgroundColor:
                        theme === "dark"
                            ? "#101620"
                            : "#FFFFFF",
                },

                tabBarIcon: ({ color, size, focused }) => {
                    let iconName:
                        | "home"
                        | "home-outline"
                        | "newspaper"
                        | "newspaper-outline";

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else {
                        iconName = focused
                            ? "newspaper"
                            : "newspaper-outline";
                    }

                    return (
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: focused
                                    ? theme === "dark"
                                        ? "#1F2937"
                                        : "#EAF6FF"
                                    : "transparent",
                            }}
                        >
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        </View>
                    );
                },
            })}
        >
            
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Weather",
                }}
            />

            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    title: "News",
                }}
            />
        </Tab.Navigator>
    );
}