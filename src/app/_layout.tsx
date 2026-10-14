import { colors } from "@/styles/colors";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function Layout() {

    const [fontsLoaded] = useFonts({
        IM_Fell_Double_Pica: require("@/assets/fonts/IMFellDoublePica-Regular.ttf"),
        MSReferenceSansSerif: require('@/assets/fonts/REFSAN.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const backgroundColor = colors.black[100];

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor
                },
            }}
        />
    )
}