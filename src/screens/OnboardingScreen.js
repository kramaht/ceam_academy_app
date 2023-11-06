import { StyleSheet, View, Dimensions } from "react-native";

import React from "react";
import { Box, Pressable, Text } from "native-base";
import Onboarding from "react-native-onboarding-swiper";
import OnboardingSlides from "../utils/OnboardingSlides";
import ButtonStyled from "../components/ui/ButtonStyled";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Next = ({ isLight, ...props }) => (
  <Box position={"absolute"} top={-windowWidth+280} left={windowWidth/2.4 *-1 }>
    <ButtonStyled
      text={"Siguiente"}
      bg={{ linearGradient: styles.linearGradient }}
      alignItems={"center"}
      justifyContent={"center"}
      rounded={20}
      height={65}
      width={201}
      _text={styles.buttonText}
      {...props}
    />
  </Box>
);



const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "rgba(59,120,231,1)" : "rgba(59,120,231,0.5)";
  } else {
    backgroundColor = selected ? "rrgba(59,120,231,1)" : "rgba(59,120,231,0.5)";
  }
  return (
    <Box      
      top={-170}
      height={44}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <View
        style={{
          width: 9,
          height: 9,
          borderRadius: 4.5,
          backgroundColor,
          marginHorizontal: 15,
        }}
      />
    </Box>    
  );
};

export default function OnboardingScreen({navigation}) {

  const Done = ({ isLight, ...props }) => (
    <Box position={"absolute"}  top={-windowWidth+280} left={windowWidth/2.4 *-1 }>
      <ButtonStyled
        text={"Finalizar"}
        bg={{ linearGradient: styles.linearGradient }}
        alignItems={"center"}
        justifyContent={"center"}
        rounded={20}
        height={65}
        width={201}
        _text={styles.buttonText}
        onPress={()=>{navigation.navigate("HomeScreen")}}
      />
    </Box>
  );



  const Skip = ({ isLight }) => (
    <Pressable  onPress={()=>{navigation.navigate('HomeScreen')}} position={'absolute'} top={windowHeight*-1+50} left={windowWidth-60}>
      <Text
        style={{
          fontSize: 18,          
          letterSpacing: 0.3,
          color: "rgba(156, 163, 175, 1)",
        }}
      >
        Saltar
      </Text>
    </Pressable>
  );

  return (
    <Box flex={1} position={"relative"}>
      <Onboarding        
        controlStatusBar={false}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        SkipButtonComponent={Skip}
        showSkip={true}
        DotComponent={Square}
        bottomBarColor="#fff"
        titleStyles={styles.textTitle}
        subTitleStyles={styles.textSubTitle}
        pages={OnboardingSlides}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    colors: ["#6898EE", "#3B78E7"],
    start: [0, 0.45],
    end: [0, 0.9],
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  textTitle: {
    color: "#3B78E7",
    fontSize: 32,
    fontWeight: "700",
    width: 250,
    top: -160,
  },
  textSubTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
    top: -170,
    width: 300,
  },
});
