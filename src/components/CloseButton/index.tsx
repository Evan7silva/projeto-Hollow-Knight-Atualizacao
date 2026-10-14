import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CloseButtonProps = {
    title: string
    onPress: () => void;
}

export const CloseButton = ({ onPress, title, ...rest }: CloseButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.closeButton}
            activeOpacity={0.7}
            onPress={onPress} {...rest}
            accessibilityLabel="Fechar visualização"
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 35,
    right: 20,
    padding: 5,
    borderRadius: 10,
    zIndex: 40,
  },
  title: {
    color: colors.white[100],
    fontSize: 24,
    fontFamily: FONT_FAMILY.button,
  },
});