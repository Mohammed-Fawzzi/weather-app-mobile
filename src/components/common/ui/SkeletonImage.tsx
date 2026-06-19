import { useEffect, useState } from "react";
import {
    Image,
    type ImageResizeMode,
    type ImageSourcePropType,
    View,
} from "react-native";
import Skeleton from "./Skeleton";

type Props = {
    source: ImageSourcePropType;
    className?: string;
    skeletonClassName?: string;
    resizeMode?: ImageResizeMode;
    blurRadius?: number;
};

function getSourceKey(source: ImageSourcePropType) {
    if (typeof source === "number") {
        return String(source);
    }

    if (Array.isArray(source)) {
        return source.map(getSourceKey).join("|");
    }

    return source.uri ?? JSON.stringify(source);
}

function isLocalSource(source: ImageSourcePropType) {
    if (typeof source === "number") {
        return true;
    }

    if (Array.isArray(source)) {
        return source.every((item) => typeof item === "number");
    }

    return false;
}

export default function SkeletonImage({
    source,
    className = "w-full h-full",
    skeletonClassName = "rounded-none",
    resizeMode = "cover",
    blurRadius,
}: Props) {
    const localSource = isLocalSource(source);
    const sourceKey = getSourceKey(source);
    const [isLoading, setIsLoading] = useState(!localSource);

    useEffect(() => {
        if (localSource) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);

        const timer = setTimeout(() => setIsLoading(false), 5000);

        return () => clearTimeout(timer);
    }, [sourceKey, localSource]);

    return (
        <View className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <View className="absolute inset-0 z-10">
                    <Skeleton className={`h-full w-full ${skeletonClassName}`} />
                </View>
            )}

            <Image
                source={source}
                className={`h-full w-full ${isLoading ? "opacity-0" : "opacity-100"}`}
                resizeMode={resizeMode}
                blurRadius={blurRadius}
                onLoad={() => setIsLoading(false)}
                onLoadStart={() => {
                    if (!localSource) {
                        setIsLoading(true);
                    }
                }}
                onLoadEnd={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
        </View>
    );
}
