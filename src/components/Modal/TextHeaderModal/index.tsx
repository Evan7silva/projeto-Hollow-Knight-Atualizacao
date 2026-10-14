import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet, Text } from "react-native";

type TextHeaderModalProps = {
    title: string
}

export const TextHeaderModal = ({title}: TextHeaderModalProps) => {
    return (
        <Text style={styles.textHeaderModal}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    textHeaderModal: {
        fontSize: 18,
        fontFamily: FONT_FAMILY.header,
        color: colors.white[100],
    },
})