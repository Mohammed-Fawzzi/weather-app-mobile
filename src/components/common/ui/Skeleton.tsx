import { useEffect, useRef } from "react";
import { Animated, type ViewStyle } from "react-native";

type Props = {
    className?: string;
    style?: ViewStyle;
};

export default function Skeleton({ className = "", style }: Props) {
    const opacity = useRef(new Animated.Value(0.45)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 900,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.45,
                    duration: 900,
                    useNativeDriver: true,
                }),
            ]),
        );

        animation.start();

        return () => animation.stop();
    }, [opacity]);

    return (
        <Animated.View
            className={`bg-slate-200 dark:bg-slate-600 ${className}`}
            style={[style, { opacity }]}
        />
    );
}
