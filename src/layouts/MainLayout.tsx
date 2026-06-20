import { ReactNode, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/common/ui/Header";
import Sidebar from "@/components/common/ui/Sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import { StatusBar } from "expo-status-bar";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <View className="flex-1">
            <StatusBar style={theme === "dark" ? "light" : "dark"} />
            <SafeAreaView
                edges={["top", "left", "right"]}
                className="screen flex-1 items-center"
            >
                <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
                {children}
            </SafeAreaView>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </View>
    );
}
