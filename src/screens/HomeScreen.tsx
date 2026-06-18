import SearchInput from "@/components/common/ui/SearchInput";
import Header from "@/components/home/Header";
import MainLayout from "@/layouts/MainLayout";

export default function HomeScreen() {
    return (
        <MainLayout>
            <SearchInput />
            <Header />
        </MainLayout>
    );
}