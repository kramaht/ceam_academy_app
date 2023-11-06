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
} from "native-base";

import TextFieldStyled from "../components/ui/TextFieldStyled";
import ButtonStyled from "../components/ui/ButtonStyled";
import { StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({navigation}) {
  const [pwd, setPwd] = useState(true);
  return (
    <ScrollView width={"100%"} height={"100%"}>
      <Box alignItems={"center"} justifyContent={"center"} my={5} bg={'#fff'}>
        <Box>
          <Center _text={{ fontWeight: "700", fontSize: 45, color: "#1D3A70" }}>
            Bienvenido a
          </Center>
          <Center
            top={-15}
            _text={{ fontWeight: "700", fontSize: 40, color: "#3B78E7" }}
          >
            CEAM
          </Center>
        </Box>
        <Box>
          <Image
            source={require("../../assets/images/imgLogin.png")}
            alt="Alternate Text"
            width={370}
            height={296.3}
          />
        </Box>
        <Box
          /*bg={'red.500'}*/
          marginTop={4}
          width={361}
          height={51}
          _text={{
            fontWeight: "400",
            fontSize: 11,
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
            <VStack space={4} width={370} marginTop={4} /*bg={'blue.400'}*/>
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
                />
                <Pressable
                  onPress={() => setPwd(!pwd)}
                  position={"absolute"}
                  right={2}
                  bottom={5}
                >
                  <FontAwesome
                    name={pwd ? "eye" : "eye-slash"}
                    size={windowHeight * 0.03}
                    color="#6B7280"
                  />
                </Pressable>
              </FormControl>
              <FormControl marginTop={2}>
                <ButtonStyled
                  text={"Iniciar sessión"}
                  bg={{ linearGradient: styles.linearGradient }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  rounded={20}
                  height={65}
                  _text={styles.buttonText}
                  onPress={()=>navigation.navigate('OnboardingScreen')}
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
