import { useTheme } from "@/contexts/ThemeContext";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Linking,
    Modal,
    Pressable,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ModeToggle from "./ModeToggle";
import SkeletonImage from "./SkeletonImage";

const SIDEBAR_WIDTH = Math.min(Dimensions.get("window").width * 0.8, 300);

const PROFILE_IMAGE = "https://github.com/Mohammed-Fawzzi.png";

const SOCIAL_LINKS = [
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamed-fawzzi98/",
        family: "ion" as const,
        icon: "logo-linkedin",
        color: "#0A66C2",
    },
    {
        label: "GitHub",
        url: "https://github.com/Mohammed-Fawzzi",
        family: "ion" as const,
        icon: "logo-github",
        color: "#181717",
    },
    {
        label: "WhatsApp",
        url: "https://wa.me/966541005479",
        family: "ion" as const,
        icon: "logo-whatsapp",
        color: "#25D366",
    },
    {
        label: "Telegram",
        url: "https://t.me/MohamedFawzzi",
        family: "fa5" as const,
        icon: "telegram",
        color: "#26A5E4",
    },
];

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: isOpen ? 0 : SIDEBAR_WIDTH,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: isOpen ? 1 : 0,
                duration: 250,
                useNativeDriver: true,
            }),
        ]).start();
    }, [isOpen, slideAnim, fadeAnim]);

    const handleOpenLink = async (url: string) => {
        const canOpen = await Linking.canOpenURL(url);

        if (canOpen) {
            await Linking.openURL(url);
        }
    };

    const accentColor = "#1E9BFF";
    const githubColor = theme === "dark" ? "#FFFFFF" : "#181717";
    const iconColor = theme === "dark" ? "#FFFFFF" : "#1E293B";

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="none"
            onRequestClose={onClose}
        >
            <View className="flex-1">
                <Animated.View
                    className="absolute inset-0 bg-black/45"
                    style={{ opacity: fadeAnim }}
                >
                    <Pressable
                        className="flex-1"
                        onPress={onClose}
                        accessibilityRole="button"
                        accessibilityLabel="Close sidebar"
                    />
                </Animated.View>

                <Animated.View
                    style={{
                        width: SIDEBAR_WIDTH,
                        transform: [{ translateX: slideAnim }],
                        paddingTop: 10,
                        paddingBottom: insets.bottom,
                    }}
                    className="absolute bottom-0 right-0 top-0 bg-white shadow-xl dark:bg-slate-800"
                >
                    <View className="flex-row items-center justify-between px-5 pb-4 border-b border-slate-200 dark:border-slate-600">
                        <Pressable
                            onPress={onClose}
                            className="h-10 w-10 items-center justify-center rounded-full bg-[#EAF6FF] dark:bg-slate-700"
                            accessibilityRole="button"
                            accessibilityLabel="Close menu"
                        >
                            <Ionicons
                                name="close"
                                size={22}
                                color={accentColor}
                            />
                        </Pressable>

                        <ModeToggle />
                    </View>

                    <View className="items-center px-6 pt-8">
                        <View className="h-28 w-28 overflow-hidden rounded-full border-4 border-[#EAF6FF] dark:border-slate-600">
                            <SkeletonImage
                                source={{ uri: PROFILE_IMAGE }}
                                className="h-full w-full"
                                skeletonClassName="rounded-full"
                                resizeMode="cover"
                            />
                        </View>

                        <Text className="mt-4 text-xl font-bold title">
                            Mohamed Fawzzi
                        </Text>

                        <Text className="mt-1 text-center text-sm secondary-text">
                            Front-End Developer
                        </Text>
                    </View>

                    <View className="mt-10 px-5">
                        <Text className="mb-4 text-sm font-semibold secondary-text uppercase tracking-wide">
                            Connect with me
                        </Text>

                        {SOCIAL_LINKS.map((link) => {
                            const brandColor =
                                link.label === "GitHub"
                                    ? githubColor
                                    : link.color;

                            return (
                                <Pressable
                                    key={link.label}
                                    onPress={() => handleOpenLink(link.url)}
                                    className="mb-3 flex-row items-center rounded-2xl bg-slate-50 px-4 py-3.5 active:bg-slate-100 dark:bg-slate-700/80 dark:active:bg-slate-700"
                                    accessibilityRole="link"
                                    accessibilityLabel={link.label}
                                >
                                    <View className="mr-4 h-11 w-11 items-center justify-center rounded-full bg-[#EAF6FF] dark:bg-slate-600">
                                        {link.family === "fa5" ? (
                                            <FontAwesome5
                                                name={link.icon}
                                                size={22}
                                                color={brandColor}
                                                brand
                                            />
                                        ) : (
                                            <Ionicons
                                                name={
                                                    link.icon as
                                                        | "logo-whatsapp"
                                                        | "logo-github"
                                                        | "logo-linkedin"
                                                }
                                                size={22}
                                                color={brandColor}
                                            />
                                        )}
                                    </View>

                                    <Text className="flex-1 text-base font-medium title">
                                        {link.label}
                                    </Text>

                                    <Ionicons
                                        name="open-outline"
                                        size={18}
                                        color={iconColor}
                                    />
                                </Pressable>
                            );
                        })}
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}
