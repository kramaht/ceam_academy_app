import { Box, Text, HStack } from "native-base";
import React from "react";
import SearchInputStyled from "../components/ui/SearchInputStyled";
import ButtonStyled from "../components/ui/ButtonStyled";

import { FlatListStyled } from "./RoutesScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../components/ui/DimensionScreeen";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { StyleSheet } from "react-native";
import { SecondRoute } from "./CapitulesScreen";
export default function LearningCardScreen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Tarjetas" },
    { key: "second", title: "Acerca de" },
  ]);

  const FirstRoute = () => (
    <Box px={3.5}>
      <FlatListStyled
        navigation={navigation}
        sw={true}
        styles={styles}
        action={"LearningCardScreen"}
        text={<Entypo name="controller-play" size={SCREEN_WIDTH * 0.04} color="#fff" />}
      />
    </Box>
  );

  const SecondView = () => <SecondRoute />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondView,
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
        Enfermedades Cardiacas
        <Box position={"absolute"} left={3}>
          <ButtonStyled
            text={
              <AntDesign
                name="left"
                size={SCREEN_WIDTH * 0.05}
                color="black"
              />
            }
            size={SCREEN_WIDTH * 0.1}
            borderWidth={2}
            borderColor={"#E5E7EB"}
            justifyContent={"center"}
            alignItems={"center"}
            rounded={12}
            onPress={() => navigation.navigate("CapitulesScreen")}
          />
        </Box>
        <Box position={"absolute"} right={3}>
          <ButtonStyled
            text={<AntDesign name="plus" size={SCREEN_WIDTH * 0.05} color="black" />}
            size={SCREEN_WIDTH * 0.1}
            borderWidth={2}
            borderColor={"#E5E7EB"}
            justifyContent={"center"}
            alignItems={"center"}
            rounded={12}
            onPress={() => navigation.navigate("LearningQuestionScreen")}
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
    borderRadius: (SCREEN_WIDTH * 0.1) / 2,
    backgroundColor: "#57F8AA",
  },
});
