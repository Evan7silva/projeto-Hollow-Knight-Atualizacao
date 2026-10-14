import { Divider } from "@/components/Divider";
import { CustomModal } from "@/components/Modal";
import { CloseButtonModal } from "@/components/Modal/CloseButtonModal";
import { TextDescriptionModal } from "@/components/Modal/TextDescriptionModal";
import { TextHeaderModal } from "@/components/Modal/TextHeaderModal";
import { TouchableVideModal } from "@/components/Modal/TouchableVideoModal";
import { TextHeader } from "@/components/TextHeader";
import { TouchableImage } from "@/components/TouchableImage";
import { styles } from "@/styles/stylesStacks";
import { Habilidade, habilidades } from "@/utils/habilidades";
import { useState } from "react";
import { Image, Linking, View } from "react-native";

export default function Habilidades() {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Habilidade | null>(null);

    function handleButtonModal(item: Habilidade) {
        setSelectedItem(item);
        setShowModal(true)
    }
    return (
        <View style={styles.container}>
            <TextHeader title="Habilidades" />
            <View style={styles.habilidadesContent}>
                {habilidades.map((item) => (
                    <TouchableImage
                        key={item.id}
                        source={item.imagem}
                        activeOpacity={0.7}
                        style={[item.estiloImagem]}
                        onPress={() => handleButtonModal(item)}
                    />
                ))}
            </View>
            <CustomModal visible={showModal}>
                {selectedItem && (
                    <View style={styles.modal}>
                        <View style={styles.itemModal}>
                            <TextHeaderModal title={selectedItem.nome} />
                            <Image
                                source={selectedItem.itemImage}
                                style={selectedItem.estiloItem} />
                        </View>
                        <Divider />
                        <View style={styles.descriptionModal}>
                            <TextHeaderModal title="Descrição" />
                            <TextDescriptionModal title={selectedItem.efeito} />
                        </View>
                        <Divider />
                        <View style={styles.footerModal}>
                            <TextHeaderModal title="Controle" />
                            <TextDescriptionModal title={selectedItem.controle} />
                        </View>
                        <Divider />
                        <View style={styles.localizacaoModal}>
                            <TextHeaderModal title="Localização" />
                            <TouchableVideModal onPress={() => {
                                selectedItem.localizacao &&
                                    Linking.openURL(selectedItem.localizacao)
                            }} />
                        </View>
                        <CloseButtonModal onPress={() => setShowModal(false)} />
                    </View>
                )
                }
            </CustomModal>
        </View>
    )
}