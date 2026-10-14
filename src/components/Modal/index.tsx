import { colors } from "@/styles/colors";
import { Modal, StyleSheet, View } from "react-native";

type CustomModalProps = {
    visible: boolean;
    children?: React.ReactNode;
}

export const CustomModal = ({ visible, children }: CustomModalProps) => {
    
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    {children}
                </View>
            </View>
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