import { FONT_FAMILY } from "@/assets/fonts/fonts";
import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white[100],
    fontSize: 24,
    fontFamily: FONT_FAMILY.button,
  },
});
