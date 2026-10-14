import { Image, ImageProps, ImageStyle, StyleProp, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    source: ImageProps["source"]
    style: StyleProp<ImageStyle>
}

export function TouchableImage({ source, style, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <Image
                source={source}
                style={style} />
        </TouchableOpacity>
    )
}