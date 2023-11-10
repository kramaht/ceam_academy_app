import React, { useState } from "react";

import {
  Box,
  Text,
  VStack,
  Flex,
  Image,
  Heading,
  FlatList,
  HStack,
  Avatar,
  Spacer,
  Progress,
  Pressable,
  Icon,
} from "native-base";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../components/ui/DimensionScreeen";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ButtonStyled from "../components/ui/ButtonStyled";
import { StyleSheet } from "react-native";
import { data } from "../utils/OnboardingSlides";
import SearchInputStyled from "../components/ui/SearchInputStyled";
import theme from "../utils/theme";

import ModalStyled from "../components/ui/ModalStyled";
const FlatListCard = ({
  title,
  text,
  content,
  avatarUrl,
  styles,
  navigation,
  action,
  dw,
  sw = false,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <HStack
      space={[2, 3]}
      justifyContent="space-between"
      bg={"#fff"}
      rounded={20}
      p={3}
      mt={3}
      position={"relative"}
    >
      <Box bg={"#011AFF0D"} rounded={12} p={1}>
        <Avatar
          bg={"transparent"}
          size={SCREEN_WIDTH * 0.13}
          source={avatarUrl}
        />
        {dw && sw && (
          <Pressable
            bg={"rgba(255, 255, 255, 0.85)"}
            position={"absolute"}
            borderWidth={1.5}
            rounded={(SCREEN_WIDTH * 0.045) / 1.1}
            p={0.5}
            bottom={-2}
            right={-7}
            borderColor={"#3B78E7BF"}
            onPress={() => setShowModal(!showModal)}
          >
            <SimpleLineIcons
              name="cloud-download"
              size={SCREEN_WIDTH * 0.045}
              color="#3B78E7BF"
              fontWeight={'bold'}
            />
          </Pressable>
        )}
        <ModalStyled showModal={showModal} setShowModal={setShowModal} />
      </Box>
      <Box w="100%" style={styles.containerBar}>
        <Progress
          style={styles.bar}
          _filledTrack={{ bg: "#49E3BF" }}
          value={Math.random() * 100}
        />
      </Box>
      <VStack style={styles.contentCard}>
        <Text fontWeight={"600"} fontSize={18} color={"#596191"}>
          {title}
        </Text>
        <Text fontWeight={"400"} fontSize={12} color={"#878787"}>
          {content}
        </Text>
      </VStack>
      <Spacer />
      <Box justifyContent={"center"}>
        <ButtonStyled
          style={styles.buttonCard}
          text={text}
          onPress={() => navigation.navigate(action)}
          {...theme.buttonCard}
        />
      </Box>
    </HStack>
  );
};

export const FlatListStyled = ({ navigation, styles, action, text, sw }) => {
  return (
    <FlatList      
      showsVerticalScrollIndicator={false}
      data={data}
      mt={2}
      renderItem={({ item }) => (
        <Box height={SCREEN_HEIGHT * 0.095} justifyContent={"center"} mb={5}>
          <FlatListCard
            title={item.title}
            content={item.content}
            avatarUrl={item.avatarUrl}
            sw={sw}
            dw={item.dowload}
            navigation={navigation}
            action={action}
            styles={styles}
            text={text}
          />
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default function RoutesScreen({ navigation }) {
  return (
    <Box py={6} px={3.5} bg={"#FAFAFD"} height={"100%"}>
      <VStack>
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box _text={{ fontWeight: "500", fontSize: SCREEN_HEIGHT * 0.022 }}>
            Hola
            <Text
              fontWeight={"700"}
              fontSize={SCREEN_HEIGHT * 0.03}
              color={"#3B78E7"}
            >
              Jhon Bon Doe 👋
            </Text>
          </Box>
          <Box>
            <Image
              source={require("../../assets/images/imgCuadrados.png")}
              alt="Image not found"
              size={SCREEN_HEIGHT * 0.1}
            />
          </Box>
        </Flex>
        <SearchInputStyled />
        <Box mt={5} height={SCREEN_HEIGHT * 0.67}>
          <Heading
            color={"#1D3A70"}
            fontWeight={"700"}
            fontSize={20}
            letterSpacing={0.3}
          >
            Rutas de aprendizaje
          </Heading>
          <FlatListStyled
            navigation={navigation}
            styles={styles}
            action={"CapitulesScreen"}
            text={
              <Entypo
                name="chevron-thin-right"
                size={SCREEN_WIDTH * 0.04}
                color="#fff"
                fontWeight={"800"}
              />
            }
          />
        </Box>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    colors: ["#FFED7A", "#FCE341"],
    start: [0, 0.45],
    end: [0, 0.9],
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  containerBar: {
    position: "absolute",
    bottom: SCREEN_WIDTH * 0.03,
    left: SCREEN_WIDTH * 0.13 + 50,
    width: "50%",
  },
  buttonCard: {
    borderRadius: 10,
    backgroundColor: "#5488E8D9",
  },
});
