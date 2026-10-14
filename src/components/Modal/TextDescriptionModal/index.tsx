import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet, Text } from "react-native";

type TextDescriptionModalProps = {
    title: string
}

export const TextDescriptionModal = ({title}: TextDescriptionModalProps) => {
    return (
        <Text style={styles.TextDescriptionModal}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    TextDescriptionModal: {
        fontSize: 12,
        textAlign: "center",
        fontFamily: FONT_FAMILY.description,
        color: colors.white[100],
    },
})