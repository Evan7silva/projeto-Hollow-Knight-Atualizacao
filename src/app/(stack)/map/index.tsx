import { Button } from "@/components/Button";
import { CloseButton } from "@/components/CloseButton";
import { ImagemButton } from "@/components/ImageButton";
import { TextHeader } from "@/components/TextHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useRef, useState } from "react";
import {
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import ImageZoomLib from "react-native-image-pan-zoom";

const imageMap = require("@/assets/images/map/imgMap.png")
const imageMarker = require("@/assets/images/Marker64x64.png")
const imageButtonMarker = require("@/assets/images/buttonMarker64x64.png")
const imageZoomMap = require("@/assets/images/zoomMap.png")
const mapImage = require("@/assets/images/map/imgMap.png");

const ImageZoom = ImageZoomLib as any
const { width, height } = Dimensions.get("screen")

// DIMENSÕES REAIS DO MAPA

const MAP_WIDTH = 1960
const MAP_HEIGHT = 1600

export default function Map() {

    const [isFullScreen, setFullScreen] = useState(false);
    const [markers, setMarkers] = useState<{ x: number; y: number }[]>([])
    const [isAddingMarker, setIsAddingMarker] = useState(false)
    const [activeButton, setActiveButton] = useState<"zoom" | "marker" | null>(null)
    const [isPinchEnabled, setIsPinchEnabled] = useState(true)

    const imageZoomRef = useRef<any>(null)
    const hasActivatedZoom = useRef(false)

    // Carregar marcadores salvos
    useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem("mapMarkers")
                if (saved) {
                    setMarkers(JSON.parse(saved))
                }
            } catch (error) {
                console.warn("Erro ao carregar marcadores:", error)
            }
        })()
    }, [])

    // Salvar marcadores
    const saveMarkers = async (data: { x: number; y: number }[]) => {
        try {
            await AsyncStorage.setItem("mapMarkers", JSON.stringify(data))
        } catch (error) {
            console.warn("Erro ao salvar marcadores:", error)
        }
    }

    // Adicionar marcador
    const handleAddMarker = (event: any) => {
        const { locationX, locationY } = event.nativeEvent
        const relativeX = locationX / MAP_WIDTH
        const relativeY = locationY / MAP_HEIGHT
        const newMarkers = [...markers, { x: relativeX, y: relativeY }]
        setMarkers(newMarkers)
        saveMarkers(newMarkers)
    }

    // Remover marcador
    const handleRemoveMarker = (index: number) => {
        const updated = markers.filter((_, i) => i !== index)
        setMarkers(updated)
        saveMarkers(updated)
    }

    // Resetar todos os marcadores
    //const resetMarkers = async () => {
    // await AsyncStorage.removeItem("mapMarkers") // apaga do armazenamento
    // setMarkers([]) // limpa do estado atual
    //}

    // Tela cheia
    const openFullScreen = async () => {
        try {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
            );
            setFullScreen(true);
        } catch (error) {
            console.warn("Erro ao abrir tela cheia: ", error);
        }
    }

    // Tela fechada
    const closeFullScreen = async () => {
        setFullScreen(false)
        setActiveButton(null)
        setIsAddingMarker(false)
        setIsPinchEnabled(true)
        hasActivatedZoom.current = false
        try {
            await ScreenOrientation.unlockAsync()
        } catch (error) {
            console.warn("Erro ao fechar tela cheia:", error)
        }
    }

    // Verifica se o mapa voltou para a posição e zoom iniciais
    const resetZoomModeIfInitial = (position: any) => {
        const tolerance = 0.5

        const isInitialPosition =
            Math.abs(position.positionX) <= tolerance &&
            Math.abs(position.positionY) <= tolerance &&
            Math.abs(position.scale - 1) <= 0.01

        if (isInitialPosition) {
            setActiveButton(null)
            hasActivatedZoom.current = false
        }
    }
    return (
        <View style={styles.container}>
            <TextHeader title="Mapa" />
            <View style={styles.contentMap}>
                <Image
                    source={mapImage}
                    style={styles.imageMap}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.buttonMap}>
                <Button
                    title="ABRIR"
                    onPress={openFullScreen}
                    accessibilityLabel="Abrir mapa em tela cheia"
                />
                {/*<Button title="RESETAR MARCADORES" onPress={resetMarkers} />*/}
            </View>
            {/* Tela Abrir Mapa */}
      <Modal
        visible={isFullScreen}
        animationType="fade"
        transparent={false}
        onRequestClose={closeFullScreen} // Android botão voltar
        statusBarTranslucent={true} // deixa a barra do topo visível
      >
        <View style={styles.fullscreen}>
          {/* Button Marcar Mapa */}
          <ImagemButton
            source={imageButtonMarker}
            onPress={() => {
              setIsAddingMarker(true)
              setActiveButton("marker")
              setIsPinchEnabled(false)
            }}
            style={{
              position: "absolute",
              top: 665,
              left: 100,
              zIndex: 40,
              opacity: activeButton === "marker" ? 1 : 0.7,
            }}
          />

          {/* Button Notifica Zoom */}
          <ImagemButton
            source={imageZoomMap}
            onPress={() => {
              setIsAddingMarker(false)
              setIsPinchEnabled(true)
              if (activeButton !== "zoom") {

                // Primeira ativação
                setActiveButton("zoom")
                if (!hasActivatedZoom.current) {
                  imageZoomRef.current?.centerOn({
                    x: 0,
                    y: 0,
                    scale: 1.1,
                    duration: 200,
                  })
                  hasActivatedZoom.current = true

                }
                return
              }
              // Só entra aqui se já estiver no modo Mapa
              // e o usuário clicar novamente no botão Mapa.
              setActiveButton(null)
              hasActivatedZoom.current = false

              imageZoomRef.current?.centerOn({
                x: 0,
                y: 0,
                scale: 1,
                duration: 200,
              })
            }}
            style={{
              position: "absolute",
              top: 680,
              left: 200,
              zIndex: 40,
              opacity: activeButton === "zoom" ? 1 : 0.7,
            }}
          />

          {/* Button Fechar Mapa */}
          <CloseButton
            title="FECHAR"
            onPress={(closeFullScreen)} />

          {/* Lib que gerencia toda funcionalidade sobre Mapa */}
          <ImageZoom
            ref={imageZoomRef}
            cropWidth={width}
            cropHeight={height}
            imageWidth={MAP_WIDTH}
            imageHeight={MAP_HEIGHT}
            enableDoubleClickZoom={false}
            pinchToZoom={isPinchEnabled}
            minScale={1}
            maxScale={5}
            onMove={(position: any) => {
              resetZoomModeIfInitial(position)
              // Só permite que o gesto de pinch ative o botão Mapa
              // quando o modo Marker não estiver ativo
              if (!isAddingMarker && position.scale > 1 && activeButton !== "zoom") {
                setActiveButton("zoom")
                hasActivatedZoom.current = true
              }
              {/* Consultar position 
                  console.log("MAPA MOVENDO:", position)
                }}

                onStart={() => {
                  console.log("MAPA START")
                }}

                onStop={(position: any) => {
                  console.log("MAPA STOP:", position)*/}
            }}
          >
            <View
              style={{
                width: MAP_WIDTH,
                height: MAP_HEIGHT,
                justifyContent: "center",
                alignItems: "center",
              }}
            >

              {/* Image Mapa */}
              <Image
                source={imageMap}
                style={{
                  width: MAP_WIDTH,
                  height: MAP_HEIGHT,
                }}
                resizeMode="contain"
              />

              {/* Gerencia Marcadores visuais */}
              {markers.map((m, i) => (
                <View
                  key={i}
                  style={{
                    position: "absolute",
                    left: m.x * MAP_WIDTH - 16,
                    top: m.y * MAP_HEIGHT - 16,
                    zIndex: 20,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handleRemoveMarker(i)}
                    activeOpacity={0.8}
                    disabled={!isAddingMarker}
                  >
                    <Image
                      source={imageMarker}
                      style={{ width: 32, height: 32, resizeMode: "contain" }}
                    />
                  </TouchableOpacity>
                </View>
              ))}

              {/* Modo de adicionar marcador */}
              {isAddingMarker && (
                <View style={styles.touchLayer} pointerEvents="box-none">
                  <TouchableOpacity
                    style={StyleSheet.absoluteFill}
                    activeOpacity={1}
                    onPress={handleAddMarker}
                  />
                </View>
              )}
            </View>
          </ImageZoom>
        </View>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    imageMap: {
        width: "100%",
        height: "100%",
    },
    buttonMap: {
        padding: 10,
    },
    
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
    gap: 10,
  },
  styleImage: {
    flex: 1,
    width,
    height,
  },
  fullscreen: {
    backgroundColor: "black",
  },
  touchLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
  },
  contentMap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});