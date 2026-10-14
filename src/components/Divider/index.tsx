import { LinearGradient } from "expo-linear-gradient";

export const Divider = () => (
  <LinearGradient
    colors={[
      "transparent",   // ponta esquerda
      "#FFFFFF",       // centro forte
      "transparent"    // ponta direita
    ]}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    style={{
      width: "90%",
      height: 1,
      marginVertical: 5,
      borderRadius: 2,
    }}
  />
);
