import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import NewsScreen from "@screens/NewsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#3B82F6",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarShowLabel: false,

                tabBarStyle: {
                    height: 65,
                    paddingBottom: 8,
                    paddingTop: 8,
                    borderTopWidth: 0,
                    elevation: 8,
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
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
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