import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/common/ui/Header";

type Props = {
    children: ReactNode;
};

export default function MainLayout({
    children,
}: Props) {
    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="screen flex-1 items-center"
        >
            <Header />
            {children}
        </SafeAreaView>
    );
}