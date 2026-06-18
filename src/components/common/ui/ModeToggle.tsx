import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable
      onPress={toggleTheme}
      className="h-11 w-11 items-center justify-center rounded-full bg-[#EAF6FF] dark:bg-slate-700"
    >
      <Ionicons
        name={theme === "dark" ? "sunny" : "moon"}
        size={22}
        color="#1E9BFF"
      />
    </Pressable>
  );
}