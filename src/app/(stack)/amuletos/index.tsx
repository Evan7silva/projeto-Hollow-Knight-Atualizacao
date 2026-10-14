import { Divider } from "@/components/Divider";
import { CustomModal } from "@/components/Modal";
import { CloseButtonModal } from "@/components/Modal/CloseButtonModal";
import { TextDescriptionModal } from "@/components/Modal/TextDescriptionModal";
import { TextHeaderModal } from "@/components/Modal/TextHeaderModal";
import { TouchableVideModal } from "@/components/Modal/TouchableVideoModal";
import { TextHeader } from "@/components/TextHeader";
import { TouchableImage } from "@/components/TouchableImage";
import { styles } from "@/styles/stylesStacks";
import { Amuleto, amuletos } from "@/utils/amuletos";
import { useState } from "react";
import { FlatList, Image, Linking, View } from "react-native";

export default function Amuletos() {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Amuleto | null>(null);

    function handleButtonModal(item: Amuleto) {
        setSelectedItem(item);
        setShowModal(true);
    }

    return (
        <View style={styles.container}>
            <TextHeader title="Amuletos" />
            <View style={styles.amuletosContent}>
                <FlatList
                    data={amuletos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableImage
                            activeOpacity={0.7}
                            source={item.amuletoImage}
                            style={item.estiloImage}
                            onPress={() => handleButtonModal(item)}
                        />
                    )}
                    numColumns={5}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingVertical: 10,
                        gap: 5,
                    }}
                />
                <CustomModal visible={showModal}>
                    {selectedItem && (
                        <View style={styles.modal}>
                            <View style={styles.itemModal}>
                                <View style={styles.viewImageDLC}>
                                    <Image source={selectedItem.imageDLC} />
                                    <TextHeaderModal title={selectedItem.nome} />
                                </View>
                                <Image
                                    source={selectedItem.amuletoImage}
                                    style={selectedItem.estiloImage}
                                />
                            </View>
                            <Divider />
                            <View style={styles.descriptionModal}>
                                <TextHeaderModal title="Efeito" />
                                <TextDescriptionModal title={selectedItem.descricao} />
                            </View>
                            <Divider />
                            <View style={styles.footerModal}>
                                <TextHeaderModal title="Encaixe" />
                                <Image
                                    source={selectedItem.encaixeImage}
                                    style={selectedItem.estiloEncaixe}
                                />
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
                    )}
                </CustomModal>
            </View>

        </View>
    )
}