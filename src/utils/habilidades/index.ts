import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import { styles } from "./styles";

export type Habilidade = {
  id: string;
  nome: string;
  imagem: ImageSourcePropType;
  itemImage: ImageSourcePropType; 
  estiloImagem: StyleProp<ImageStyle>;
  estiloItem: StyleProp<ImageStyle>;
  efeito: string;
  controle: string;
  localizacao: string;
};

export const habilidades: Habilidade[] = [
  {
    id: "1",
    nome: "Manto de Asa Mariposa",
    imagem: require("@/assets/images/habilidades/Manto de Asa da Mariposa.png"),
    itemImage: require("@/assets/images/habilidades/item/Manto de Asa de Mariposa.png"),
    efeito:
      "Esquiva por uma curta distância. O tempo de recarga entre as esquivas é de 0,6s.",
    estiloImagem: styles.habilidadeImage,
    estiloItem: styles.itemImagem,
    controle: "Pressione RT.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=27&end=127",
  },
  {
    id: "2",
    nome: "Garra de Louva-a-deus",
    imagem: require("@/assets/images/habilidades/Garra de Louva a deus.png"),
    itemImage: require("@/assets/images/habilidades/item/Garra de Louva-a-deus.png"),
    estiloImagem: styles.habilidadeImage,
    estiloItem: styles.itemImagem,
    efeito: "Enquanto desliza contra uma parede para pular novamente.",
    controle: "Pressione A.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=127&end=240",
  },
  {
    id: "3",
    nome: "Coração de Crital",
    imagem: require("@/assets/images/habilidades/Coração de Cristal.png"),
    itemImage: require("@/assets/images/habilidades/item/Coracao de cristal.png"),
    estiloImagem: styles.habilidadeImageId_2,
    estiloItem: styles.itemImagem,
    efeito:
      "O núcleo de energia de um golem minerador antigo, formado em torno de um cristal potente. A energia do cristal pode ser canalizada para lançar o seu portador para frente em velocidades perigosas.",
    controle: "Segure LT e solte SUPER INVESTIDA.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=247&end=340",
  },
  {
    id: "4",
    nome: "Ferrão dos Sonhos",
    imagem: require("@/assets/images/habilidades/Ferrão dos Sonhos.png"),
    itemImage: require("@/assets/images/habilidades/item/Ferrao dos sonhos.png"),
    estiloImagem: styles.habilidadeImage,
    estiloItem: styles.itemImagemId_4,
    efeito:
      "Permite que o portador corte o véu entre os sonhos e a realidade. Pode ser usado para revelar sonhos escondidos ou abrir passagens. O Ferrão dos Sonhos pode coletar Essência, remanescentes de desejos e sonhos.",
    controle: "Segure Y.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=341&end=486",
  },
  {
    id: "5",
    nome: "Asas do Monarca",
    imagem: require("@/assets/images/habilidades/Asas do Monarca.png"),
    itemImage: require("@/assets/images/habilidades/item/Asas do Monarca.png"),
    estiloImagem: styles.habilidadeImageId_4,
    estiloItem: styles.itemImagem,
    efeito:
      "Asas de um material etéreo que brilha no escuro. Permite que seu portador salte novamente no ar.",
    controle: "Precione A.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=490&end=535",
  },
  {
    id: "6",
    nome: "Lágrima de Isma",
    imagem: require("@/assets/images/habilidades/Lágrima de Isma.png"),
    itemImage: require("@/assets/images/habilidades/item/Lagrimas de Isma.png"),
    estiloImagem: styles.habilidadeImageId_5,
    estiloItem: styles.itemImagem,
    efeito:
      "Fruta formada de uma única lágrima endurecida. Uma vez ingerida, fornece proteção contra as piscinas abrasivas e ácidas encontradas em algumas partes de Hallownest.",
    controle: "Nade em águas ácidas sem tomar qualquer dano.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=536&end=667",
  },
  {
    id: "7",
    nome: "Manto Sombrio",
    imagem: require("@/assets/images/habilidades/Manto Sombrio.png"),
    itemImage: require("@/assets/images/habilidades/item/Manto Sombrio.png"),
    estiloImagem: styles.habilidadeImageId_6,
    estiloItem: styles.itemImagem,
    efeito:
      "Manto formado pela substância negra do Abismo. Permite que seu portador esquive por dentro de inimigos e seus ataques sem levar dano.",
    controle: "Precione RT.",
    localizacao: "https://www.youtube.com/embed/JK_STY9Y9_Q?start=668&end=950",
  },
];
