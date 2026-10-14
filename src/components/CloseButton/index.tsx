import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CloseButtonProps = {
    onPress: () => void;
}

export const CloseButton = ({ onPress }: CloseButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.closeButton}
            onPress={onPress}
            accessibilityLabel="Fechar visualização"
        >
            <Text style={styles.title}>FECHAR</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.black[100],
  },
  title: {
    color: colors.white[100],
    fontSize: 24,
    fontFamily: FONT_FAMILY.button,
  },
});