import SearchInput from "@/components/common/ui/SearchInput";
import { View } from "react-native";
import MainLayout from "@/layouts/MainLayout";

export default function HomeScreen() {
    return (
        <View className={`screen flex-1 items-center`}>
            <MainLayout>
                <SearchInput />
            </MainLayout>
        </View>
    )
}



