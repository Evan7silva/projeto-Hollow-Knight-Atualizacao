import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import { styles } from "./styles";

export type Build = {
    id: string
    nome: string
    imageBuild: ImageSourcePropType
    estiloImageBuild: StyleProp<ImageStyle>
    imageBuildAmuleto: ImageSourcePropType
    estiloImageAmuleto: StyleProp<ImageStyle>
    imageEncaixe: ImageSourcePropType
    estiloImageEncaixe: StyleProp<ImageStyle>
    localizacao: string
}

export const builds : Build [] = [
    {   
        id: "1",
        nome: "Build I",
        imageBuild: require("@/assets/images/build/buld 1.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/buld I.png"),
        estiloImageAmuleto: styles.imageAmuleto,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=168&end=202"
    },
     {   
        id: "2",
        nome: "Build II",
        imageBuild: require("@/assets/images/build/build 2.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build II.png"),
        estiloImageAmuleto: styles.imageAmuletoCinco,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=203&end=246"
    },
     {   
        id: "3",
        nome: "Build III",
        imageBuild: require("@/assets/images/build/build 3.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build III.png"),
        estiloImageAmuleto: styles.imageAmuletoCinco,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=247&end=333"
    },
    {   
        id: "4",
        nome: "Build IV",
        imageBuild: require("@/assets/images/build/build 4.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build IV.png"),
        estiloImageAmuleto: styles.imageAmuleto,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=334&end=363"
    },
     {   
        id: "5",
        nome: "Build V",
        imageBuild: require("@/assets/images/build/build 5.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build V.png"),
        estiloImageAmuleto: styles.imageAmuletoCinco,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=364&end=465"
    },
     {   
        id: "6",
        nome: "Build VI",
        imageBuild: require("@/assets/images/build/build 6.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build VI.png"),
        estiloImageAmuleto: styles.imageAmuletoSeis,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=466&end=510"
    },
    {   
        id: "7",
        nome: "Build VII",
        imageBuild: require("@/assets/images/build/build 7.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build VII.png"),
        estiloImageAmuleto: styles.imageAmuletoCinco,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=511&end=561"
    },
     {   
        id: "8",
        nome: "Build VIII",
        imageBuild: require("@/assets/images/build/build 8.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build VIII.png"),
        estiloImageAmuleto: styles.imageAmuleto,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=562&end=588"
    },
     {   
        id: "9",
        nome: "Build IX",
        imageBuild: require("@/assets/images/build/build 9.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build IX.png"),
        estiloImageAmuleto: styles.imageAmuletoSeis,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/onzeEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=589&end=624 "
    },
    {   
        id: "10",
        nome: "Build IX",
        imageBuild: require("@/assets/images/build/build 10.png"),
        estiloImageBuild: styles.imageBuild,
        imageBuildAmuleto: require("@/assets/images/build/amuletoBuild/build X.png"),
        estiloImageAmuleto: styles.imageAmuletoSeis,
        imageEncaixe: require("@/assets/images/amuletos/encaixes/dezEncaixe.png"),
        estiloImageEncaixe: styles.imageEncaixe,
        localizacao: "https://www.youtube.com/embed/VKkpiZUbBtA?start=625&end=720 "
    },
]