
import React from 'react'
import { Box, Icon, Input } from 'native-base'
import ButtonStyled from './ButtonStyled'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './DimensionScreeen'
import { StyleSheet } from 'react-native'
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchInputStyled() {
  return (
    <Box mt={4} position={"relative"} justifyContent={"center"}>
      <Input
        placeholder={`Buscar`}
        placeholderTextColor={"#9CA3AF"}
        fontSize={SCREEN_HEIGHT * 0.018}
        height={SCREEN_HEIGHT * 0.079}
        bg={"#fff"}
        borderWidth={0}
        rounded={16}
        width={"100%"}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            color="#9CA3AF"
            size={SCREEN_WIDTH * 0.1}
            ml={2}
          />
        }
        InputRightElement={
          <ButtonStyled
            text={
              <FontAwesome
                name="sliders"
                size={SCREEN_HEIGHT * 0.035}
                color="#fff"
              />
            }
            alignItems={"center"}
            justifyContent={"center"}
            rounded={10}
            size={SCREEN_HEIGHT * 0.058}
            bg={{ linearGradient: styles.linearGradient }}
            mr={2}
          />
        }
      />
    </Box>
  )
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
  });
  