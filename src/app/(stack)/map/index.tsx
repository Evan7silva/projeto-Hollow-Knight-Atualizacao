import { Button } from "@/components/Button";
import { CloseButton } from "@/components/CloseButton";
import { TextHeader } from "@/components/TextHeader";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import ImageViewing from "react-native-image-viewing";

const mapImage = require("@/assets/images/map/imgMap.png");

export default function Map() {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const openFullScreen = async () => {
        try {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
            );
            setIsFullScreen(true);
        } catch (error) {
            console.warn("Erro ao abrir tela cheia: ", error);
        }
    }

    const closeFullScreen = async () => {
        setIsFullScreen(false);
    }

    return (
        <View style={styles.container}>
            <TextHeader title="Map" />
            <View style={styles.contentMap}>
                <Image
                    source={mapImage}
                    style={styles.imageMap}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.buttonMap}>
                <Button
                    title="ABRIR"
                    onPress={openFullScreen}
                    accessibilityLabel="Abrir mapa em tela cheia"
                />
            </View>
            {isFullScreen && (
                <ImageViewing
                    images={[{ uri: Image.resolveAssetSource(mapImage).uri }]}
                    imageIndex={0}
                    visible={isFullScreen}
                    onRequestClose={closeFullScreen}
                    presentationStyle="fullScreen"
                    backgroundColor="black"
                    swipeToCloseEnabled={false}
                    doubleTapToZoomEnabled={true}
                    HeaderComponent={() => <CloseButton onPress={closeFullScreen} />}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    contentMap: {
        width: "100%",
        height: 250,
    },
    imageMap: {
        width: "100%",
        height: "100%",
    },
    buttonMap: {
        padding: 10,
    },
});