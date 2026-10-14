import { Button } from "@/components/Button";
import { colors } from "@/styles/colors";
import { router, Stack } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

const headerImage = require("@/assets/images/imgHeader.png");
const basebordTopImage = require("@/assets/images/imgContent.png");
const baseboardBottomImagem = require("@/assets/images/imgMenuBottom.png");

export default function LayoutRoute() {

    const backgroundColor = colors.black[100];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={headerImage}
                    style={styles.imgHeader}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerContent}>
                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor
                    }
                }} />
            </View>

            <View style={styles.baseboard}>
                <Image
                    source={basebordTopImage}
                    style={styles.baseboardTopImage}
                    resizeMode="contain"
                />
                <Button
                    title="VOLTAR"
                    onPress={() => router.back()}
                />
                <Image
                    source={baseboardBottomImagem}
                    style={styles.baseboardBottomImage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
    },
    header: {
        width: "100%",
        height: 200,
    },
    imgHeader: {
        width: "100%",
        height: 200,
    },
    containerContent: {
        flex: 1,
    },
    baseboard: {
        width: "100%",
        height: 170,
        alignContent: "center",
        alignItems: "center",
    },
    baseboardTopImage: {
        width: "100%",
        height: 60,
    },
    baseboardBottomImage: {
        width: 150,
        height: 50,
    },
})