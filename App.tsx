import "./global.css";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("@assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("@assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("@assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}