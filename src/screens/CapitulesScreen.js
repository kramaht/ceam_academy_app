import React from "react";
import {
  Box,
  View,
  Text,
  HStack,
  VStack,
  Avatar,
  Center,
  Progress,
  Spacer,
} from "native-base";
import SearchInputStyled from "../components/ui/SearchInputStyled";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../components/ui/DimensionScreeen";
import { AntDesign, Entypo } from "@expo/vector-icons";

import ButtonStyled from "../components/ui/ButtonStyled";
import { FlatListStyled } from "./RoutesScreen";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { aboutUs } from "../utils/OnboardingSlides";
import { StyleSheet } from "react-native";

export const SecondRoute = () => (
  <Box py={5} px={7}>
    <VStack space={2}>
      <Text {...styles.aboutUsTitle}>Lo que aprenderas</Text>
      <Text
        fontWeight={"400"}
        fontSize={SCREEN_WIDTH * 0.035}
        textAlign={"justify"}
        color={"rgba(135, 135, 135, 1)"}
      >
        Descubre la anatomía y fisiología del corazón de manera detallada y
        aplica ese conocimiento para evaluar y abordar problemas cardíacos con
        confianza.
      </Text>
      <Text {...styles.aboutUsTitle}>Autores</Text>
      <HStack flexWrap={"wrap"}>
        {aboutUs.map((item) => (
          <Box width={"50%"} key={item.id} mt={2}>
            <HStack space={1}>
              <Avatar
                size={SCREEN_WIDTH * 0.1}
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack justifyContent={"center"}>
                <Text
                  fontSize={SCREEN_WIDTH * 0.035}
                  color={"rgba(135, 135, 135, 1)"}
                  fontWeight={"400"}
                >
                  {item.fullName}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </HStack>
    </VStack>
  </Box>
);

export default function CapitulesScreen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Capitulos" },
    { key: "second", title: "Acerca de" },
  ]);

  const FirstRoute = () => (
    <Box px={3.5}>
      <FlatListStyled
        navigation={navigation}
        styles={styles}
        action={"LearningCardScreen"}
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
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <Box w={"100%"} h={"100%"}>
      <Box
        h={"10%"}
        justifyContent={"center"}
        alignItems={"center"}
        _text={{
          fontWeight: "700",
          fontSize: SCREEN_HEIGHT * 0.021,
          letterSpacing: 0.3,
          color: "#3B78E7",
        }}
        position={"relative"}
      >
        Cardiología
        <Box position={"absolute"} left={3}>
          <ButtonStyled
            text={
              <AntDesign
                name="left"
                size={SCREEN_WIDTH * 0.04}
                color="black"
              />
            }
            size={SCREEN_WIDTH * 0.1}
            borderWidth={2}
            borderColor={"#E5E7EB"}
            justifyContent={"center"}
            alignItems={"center"}
            rounded={12}
            onPress={() => navigation.navigate("RoutesScreen")}
          />
        </Box>
      </Box>

      <Box px={3.5}>
        <SearchInputStyled />
      </Box>

      <Box flex={1} mt={3}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: SCREEN_WIDTH }}
          renderTabBar={(props) => (
            <Box>
              <TabBar
                {...props}
                tabStyle={{ backgroundColor: "#F7F7F7" }}
                indicatorStyle={{
                  backgroundColor: "#1D3870",
                  height: 2,
                  bottom: -2,
                }}
                renderLabel={({ route }) => (
                  <Text
                    style={{
                      color: "#1D3870",
                      fontWeight: "500",
                      fontSize: 16,
                    }}
                  >
                    {route.title}
                  </Text>
                )}
              />
            </Box>
          )}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  containerBar: {
    position: "absolute",
    bottom: 3,
    left: 16,
    width: SCREEN_WIDTH * 0.13,
  },
  bar: {
    height: 3.5,
  },
  contentCard: {
    justifyContent: "center",
  },
  buttonCard: {
    borderRadius: 10,
    backgroundColor: "#5488E8D9",
  },
  aboutUsTitle: {
    fontWeight: "500",
    fontSize: 20,
    letterSpacing: 0.3,
    color: "rgba(29, 58, 112, 1)",
  },
});
