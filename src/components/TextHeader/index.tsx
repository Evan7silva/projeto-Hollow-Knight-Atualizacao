import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

type TextHeaderProps = {
    title: string;
}

export const TextHeader = ({ title }: TextHeaderProps) => {
    return (
        <View style={styles.viewText}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewText: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textHeader: {
        fontSize: 24,
        fontFamily: FONT_FAMILY.header,
        color: colors.white[100],
    },
})