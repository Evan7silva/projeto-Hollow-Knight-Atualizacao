import { Divider } from "@/components/Divider";
import { CustomModal } from "@/components/Modal";
import { CloseButtonModal } from "@/components/Modal/CloseButtonModal";
import { TextHeaderModal } from "@/components/Modal/TextHeaderModal";
import { TouchableVideModal } from "@/components/Modal/TouchableVideoModal";
import { TextHeader } from "@/components/TextHeader";
import { TouchableImage } from "@/components/TouchableImage";
import { styles } from "@/styles/stylesStacks";
import { Build, builds } from "@/utils/builds";
import { useState } from "react";
import { FlatList, Image, Linking, View } from "react-native";

export default function Builds() {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Build | null>(null);

    function handleButtonModal(item: Build) {
        setSelectedItem(item);
        setShowModal(true);
    }

    return (
        <View style={styles.container}>
            <TextHeader title="Builds" />
            <View style={styles.amuletosContent}>
                <FlatList
                    data={builds}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableImage
                            activeOpacity={0.7}
                            source={item.imageBuild}
                            style={item.estiloImageBuild}
                            onPress={() => handleButtonModal(item)}
                        />
                    )}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingVertical: 10,
                        gap: 10
                    }}
                />
                <CustomModal visible={showModal}>
                    {selectedItem && (
                        <View style={styles.modal}>
                            <View style={styles.itemBuildModal}>
                                <TextHeaderModal title={selectedItem.nome} />
                                <Image
                                    source={selectedItem.imageBuildAmuleto}
                                    style={selectedItem.estiloImageAmuleto}
                                />
                            </View>
                            <Divider />
                            <View style={styles.footerBuildModal}>
                                <TextHeaderModal title="Enacaixe" />
                                <Image
                                    source={selectedItem.imageEncaixe}
                                    style={selectedItem.estiloImageEncaixe}
                                />
                            </View>
                            <Divider />
                            <View style={styles.localizacaoModal}>
                                <TextHeaderModal title="Demonstração" />
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