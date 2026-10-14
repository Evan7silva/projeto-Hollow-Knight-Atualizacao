import { Image, StyleSheet, TouchableOpacity } from "react-native";

const videoImage = require("@/assets/images/Video.png");

type TouchableVideModalProps = {
    onPress: () => void
}
export const TouchableVideModal = ({ onPress }: TouchableVideModalProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Image
                source={videoImage}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 35,
    },
});