import { ImageSourcePropType } from "react-native";

const weatherBackgrounds = {
    sunny: require("@assets/images/sunny.png"),
    overcast: require("@assets/images/overcast.png"),
    thunderstorms: require("@assets/images/thunderstorms.png"),
    partlycloudy: require("@assets/images/partlycloudy.png"),
    cloud: require("@assets/images/cloud.png"),
    heavyrain: require("@assets/images/heavyrain.png"),
    moderaterain: require("@assets/images/moderaterain.png"),
    mist: require("@assets/images/mist.png"),
} as const satisfies Record<string, ImageSourcePropType>;

export function getWeatherBackground(conditionText: string): ImageSourcePropType {
    const text = conditionText.toLowerCase();

    if (text.includes("thunder")) return weatherBackgrounds.thunderstorms;
    if (text.includes("overcast")) return weatherBackgrounds.overcast;
    if (text.includes("heavy rain")) return weatherBackgrounds.heavyrain;
    if (text.includes("moderate rain") || text.includes("patchy rain"))
        return weatherBackgrounds.moderaterain;
    if (text.includes("rain") || text.includes("drizzle"))
        return weatherBackgrounds.moderaterain;
    if (text.includes("mist") || text.includes("fog")) return weatherBackgrounds.mist;
    if (text.includes("partly cloudy")) return weatherBackgrounds.partlycloudy;
    if (text.includes("cloudy") || text.includes("cloud")) return weatherBackgrounds.cloud;
    if (text.includes("sunny") || text.includes("clear")) return weatherBackgrounds.sunny;

    return weatherBackgrounds.partlycloudy;
}
