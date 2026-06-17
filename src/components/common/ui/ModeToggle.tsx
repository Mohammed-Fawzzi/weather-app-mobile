import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function ModeToggle() {
  return (
    <Pressable className="h-11 w-11 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <Ionicons
        name="moon"
        size={22}
        color="#000"
      />
    </Pressable>
  );
}