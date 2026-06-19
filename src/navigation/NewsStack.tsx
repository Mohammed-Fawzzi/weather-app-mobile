import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsDetailScreen from "@screens/NewsDetailScreen";
import NewsScreen from "@screens/NewsScreen";
import { NewsStackParamList } from "./types";

const Stack = createNativeStackNavigator<NewsStackParamList>();

export default function NewsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NewsList" component={NewsScreen} />
            <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        </Stack.Navigator>
    );
}
