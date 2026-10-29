import { colors } from "@/styles/colors";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

SplashScreen.setOptions({
        duration: 1000,
        fade: true,
    });

export default function Layout() {
    const backgroundColor = colors.black[100];

    // Configuração do player de vídeo
    const [isReady, setIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        IM_Fell_Double_Pica: require("@/assets/fonts/IMFellDoublePica-Regular.ttf"),
        MSReferenceSansSerif: require('@/assets/fonts/REFSAN.ttf'),
    });

    // ⏳ Controla o tempo do loader (garante mínimo de 2s)
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        if (fontsLoaded) {
            timer = setTimeout(() => setIsReady(true), 2000)
        }
        return () => clearTimeout(timer);
    }, [fontsLoaded])

    // Enquanto carrega fontes → mostra loader
    if (!isReady) {
        return (
            <View style={styles.loaderContainer}>
                <Image
                    source={require("@/assets/images/LoaderKnight.gif")}
                    style={styles.loaderGif}
                />
            </View>
        );
    }

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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black[100],
    },
    loaderGif: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
});