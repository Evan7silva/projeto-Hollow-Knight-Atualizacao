import { colors } from "@/styles/colors";
import { BlurView } from 'expo-blur';
import { Modal, StyleSheet, View } from "react-native";

type CustomModalProps = {
    visible: boolean;
    children?: React.ReactNode;
}

export const CustomModal = ({ visible, children }: CustomModalProps) => {

    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <BlurView
                intensity={100}
                tint="dark"
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        {children}
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 95,
    },
    modalContent: {
        width: 360,
        height: 420,
        borderRadius: 20,
        backgroundColor: colors.gray[100],
    },
})