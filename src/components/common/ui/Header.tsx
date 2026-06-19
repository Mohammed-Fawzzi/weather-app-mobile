import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
    onOpenSidebar: () => void;
};

export default function Header({ onOpenSidebar }: Props) {
    return (
        <View className="flex-row items-center mt-4 px-4 w-full pb-4">
            <Image
                source={require("@assets/logo.png")}
                className="w-10 h-10"
            />

            <Text className="flex-1 text-center text-2xl font-regular font-bold subtitle">
                Weather
            </Text>

            <Pressable
                onPress={onOpenSidebar}
                className="h-11 w-11 items-center justify-center rounded-full bg-[#EAF6FF] dark:bg-slate-700"
                accessibilityRole="button"
                accessibilityLabel="Open menu"
            >
                <Ionicons name="menu" size={22} color="#1E9BFF" />
            </Pressable>
        </View>
    );
}
