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

export default function SkeletonImage({
    source,
    className = "w-full h-full",
    skeletonClassName = "rounded-none",
    resizeMode = "cover",
    blurRadius,
}: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const sourceKey = getSourceKey(source);

    useEffect(() => {
        setIsLoading(true);
    }, [sourceKey]);

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
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
        </View>
    );
}
