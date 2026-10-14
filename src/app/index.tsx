import { Button } from "@/components/Button";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/imgFundo.png')}
                style={styles.imgBottom}
                resizeMethod="resize"
            />
            <View style={styles.menu}>
                <Image
                    source={require('@/assets/images/imgMenuTop.png')}
                    style={styles.imgMenuTop}
                />
                <Button title="AMULETOS" onPress={() => router.navigate("/amuletos")} />
                <Button title="BUILDS" onPress={() => router.navigate("/builds")} />
                <Button title="HABILIDADES" onPress={() => router.navigate("/habilidades")} />
                <Button title="MAP" onPress={() => router.navigate("/map")} />
                <Image
                    source={require('@/assets/images/imgMenuBottom.png')}
                    style={styles.imgMenuBottom}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    imgBottom: {
        width: "100%",
        height: 610,
    },
    menu: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50,
    },
    imgMenuTop: {
        width: 310,
        height: 70,
    },
    imgMenuBottom: {
        width: 200,
        height: 30,
    },
});
