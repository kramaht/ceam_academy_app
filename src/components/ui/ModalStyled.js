import React from "react";
import {
  Button,
  Modal,
  Center,
  Text,
  Box,
  HStack,
  Pressable,
  Spacer,
  Image,
} from "native-base";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./DimensionScreeen";
import theme from "../../utils/theme";

const ButtonModal = ({ text, showModal, setShowModal }) => {
  return (
    <Pressable
      onPress={() => setShowModal(false)}
      width={"50%"}
      {...theme.container}
    >
      <Text
        fontSize={20}
        letterSpacing={0.3}
        fontWeight={"500"}
        color={"rgba(156, 163, 175, 1)"}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default function ({ showModal, setShowModal }) {
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: "coolGray.800",
          },
          bg: "#000",
        }}
        size={"xl"}
        px={2}
      >
        <Modal.Content height={SCREEN_HEIGHT * 0.55} rounded={20}>
        <Modal.Header borderBottomWidth={0}></Modal.Header>
          <Modal.Body>
            <Box              
              _text={{
                fontWeight: "400",
                fontSize: 20,
                textAlign: "center",
                color: "rgba(135, 135, 135, 1)",
              }}
            >
              <Image
                source={require("../../../assets/images/imgModal.png")}
                w={248}
                h={156}
                mx={"auto"}
                alt="Image not found"
              />
              <Text
                textAlign={"center"}
                fontSize={24}
                fontWeight={"600"}
                color={"rgba(59, 120, 231, 1)"}
              >
                Exportar Preguntasss
              </Text>
              Descarga las preguntas que has creado en un archivo PDF fácil de
              guardar y compartir.
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <HStack>
              <ButtonModal
                text={"Cancelar"}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <ButtonModal
                text={"Guardar"}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
