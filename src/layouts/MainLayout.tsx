import { ReactNode, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/common/ui/Header";
import Sidebar from "@/components/common/ui/Sidebar";
import { StatusBar } from "expo-status-bar";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="screen flex-1 items-center"
        >
            <StatusBar style="auto" />
            <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
            {children}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </SafeAreaView>
    );
}
