import { Image, Text, View } from "react-native";
import ModeToggle from "./ModeToggle";

export default function Header() {
    return (
        <View className="flex-row items-center justify-between mt-4 px-4 w-full">
            <Image
                source={require("@assets/logo.png")}
                className="w-10 h-10"
            />

            <Text className="text-2xl font-regular font-bold subtitle">
                Weather
            </Text>

            <ModeToggle />
        </View>
    );
}