import { StyleSheet, ViewStyle } from "react-native";

const baseCentered: ViewStyle = {
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  gap: 5,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  // Organiza Image da Tela Habilidade
  habilidadesContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    gap: 15,
  },
  // Organiza aréa da Tela Amuletos/Builds
  amuletosContent: {
    height: 400,
  },
  // Mantém Imagem DLC ao lado do nome Amuleto
  viewImageDLC: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 5,
  },
  modal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  itemModal: {
    width: 200,
    height: 100,
    ...baseCentered,
  },
  // Organiza aréa da Tela Builds
  itemBuildModal: {
    width: "auto",
    height: 170,
    ...baseCentered,
  },
  descriptionModal: {
    width: 320,
    height: 120,
    ...baseCentered,
  },
  // Local da CustomModal onde fica Encaixe ou Controle
  footerModal: {
    width: "auto",
    height: 50,
    ...baseCentered,
  },
  // Local da CustomModal de onze peças de encaixe 
  footerBuildModal: {
    width: "auto",
    height: 100,
    ...baseCentered,
  },
  localizacaoModal: {
    width: "auto",
    height: 60,
    ...baseCentered,
  },
});
