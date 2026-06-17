import { Image, Text, View } from "react-native";
import ModeToggle from "./ModeToggle";

export default function Header() {
    return (
        <View className="flex-row items-center justify-between my-5">
            <View className="flex-1 flex-row items-center gap-2">
                <Image
                    source={require("@assets/logo.png")}
                    className="w-10 h-10"
                />
                <Text className="text-3xl font-bold text-black dark:text-white">
                    Weather
                </Text>
            </View>

            <ModeToggle />
        </View>
    );
}