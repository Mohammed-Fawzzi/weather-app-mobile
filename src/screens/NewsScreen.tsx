import { Text, View } from "react-native";
import MainLayout from "@layouts/MainLayout"
export default function NewsScreen() {
    return (
        <MainLayout>
            <View className="flex-1 items-center justify-center screen text-white">
                <Text className="subtitle">News Screen</Text>
            </View>
        </MainLayout>
    )
}
