import React, { useState } from "react";
import { Formik } from "formik";
import { loginSchema } from "../utils/schemas";
import {
  VStack,
  FormControl,
  Box,
  Center,
  Image,
  ScrollView,
  Pressable,
  Icon
} from "native-base";

import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

import TextFieldStyled from "../components/ui/TextFieldStyled";
import ButtonStyled from "../components/ui/ButtonStyled";
import theme from "../utils/theme";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../components/ui/DimensionScreeen";

export default function LoginScreen({ navigation }) {
  const [pwd, setPwd] = useState(true);
  return (
    <ScrollView>
      <Box size={"100%"} {...theme.container}>
        <Box>
          <Center
            _text={{
              fontWeight: "700",
              fontSize: SCREEN_HEIGHT * 0.05,
              color: "#1D3A70",
            }}
          >
            Bienvenido a
          </Center>
          <Center
            top={-12}
            _text={{
              fontWeight: "700",
              fontSize: SCREEN_HEIGHT * 0.05,
              color: "#3B78E7",
            }}
          >
            CEAM
          </Center>
        </Box>
        <Box>
          <Image
            source={require("../../assets/images/imgLogin.png")}
            alt="Image not Found"
            h={SCREEN_HEIGHT * 0.3}
            w={SCREEN_WIDTH * 0.9}
          />
        </Box>
        <Box
          marginTop={4}
          w={SCREEN_WIDTH * 0.9}
          _text={{
            fontWeight: "400",
            fontSize: SCREEN_HEIGHT * 0.014,
            letterSpacing: 0.3,
            textAlign: "center",
            color: "#6B7280",
          }}
        >
          Tu puerta de entrada al éxito en el examen de residencia médica en
          Bolivia. Aprende, practica y domina con nuestras flashcards
          personalizadas.
        </Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
        >
          {({}) => (
            <VStack space={4} w={SCREEN_WIDTH * 0.9} mt={4}>
              <FormControl>
                <FormControl.Label _text={styles.label}>
                  Correo electrónico:
                </FormControl.Label>
                <TextFieldStyled
                  name="email"
                  type={"email"}
                  placeholder="ejemplo@ceam.app"
                  rounded={16}
                  height={65}
                  bg={"#F9FAFB"}
                  borderWidth={0}
                  fontSize={16}
                />
              </FormControl>
              <FormControl position={"relative"}>
                <FormControl.Label _text={styles.label}>
                  Contraseña:
                </FormControl.Label>
                <TextFieldStyled
                  name="password"
                  type={pwd ? "password" : "text"}
                  placeholder="Contraseña"
                  rounded={16}
                  height={65}
                  borderWidth={0}
                  bg={"#F9FAFB"}
                  fontSize={16}
                  InputRightElement={
                    <Pressable onPress={() => setPwd(!pwd)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={pwd ? "visibility-off" : "visibility"}
                          />
                        }
                        size={SCREEN_HEIGHT*0.03}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              </FormControl>
              <FormControl marginTop={9}>
                <ButtonStyled
                  text={"Iniciar sessión"}
                  bg={{ linearGradient: styles.linearGradient }}
                  {...theme.container}
                  rounded={20}
                  height={60}
                  _text={styles.buttonText}
                  onPress={() => navigation.navigate("OnboardingScreen")}
                />
              </FormControl>
            </VStack>
          )}
        </Formik>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "500",
    color: "#3B78E7",
    fontSize: 14,
    letterSpacing: 0.3,
  },
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
});
