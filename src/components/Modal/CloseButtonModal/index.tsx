import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CloseButtonModalProps = {
    onPress: () => void
}

export const CloseButtonModal = ({ onPress }: CloseButtonModalProps) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
            >
                <Text style={styles.title}>FECHAR</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "flex-end",
        alignItems: "center",
        height: 50,
    },
    title: {
        color: colors.white[100],
        fontSize: 24,
        fontFamily: FONT_FAMILY.button,
    },
})