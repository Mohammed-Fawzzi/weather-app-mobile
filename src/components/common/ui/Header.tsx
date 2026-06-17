import { Image, Text, View } from "react-native";
import ModeToggle from "./ModeToggle";

export default function Header() {
    return (
        <View className="flex-row items-center justify-between mt-4">
            <Image
                source={require("@assets/logo.png")}
                className="w-10 h-10"
            />

            <Text className="text-3xl font-bold title">
                Weather
            </Text>

            <ModeToggle />
        </View>
    );
}