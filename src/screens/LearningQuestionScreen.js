import React from "react";
import { Box, Image, Text, ScrollView, VStack, FormControl, HStack } from "native-base";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../components/ui/DimensionScreeen";
import ButtonStyled from "../components/ui/ButtonStyled";
import TextFieldStyled from "../components/ui/TextFieldStyled";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { loginSchema } from "../utils/schemas";
import theme from "../utils/theme";
export default function LearningQuestionScreen({ navigation }) {
  return (
    <ScrollView w={"100%"} h={"100%"} bg={"#fff"}>
      <Box alignItems={"center"} mb={10}>
        <Box position={"absolute"} right={3} top={5}>
          <ButtonStyled
            text={
              <AntDesign
                name="close"
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
            onPress={() => navigation.navigate("LearningCardScreen")}
          />
        </Box>
        <Box mt={10}>
          <Image
            source={require("../../assets/images/imgLearningQuestion.png")}
            alt="Image not Found"
            size={SCREEN_WIDTH * 0.65}
          />
        </Box>
        <Box mt={5}>
          <Text
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={32}
            color={"rgba(59, 120, 231, 1)"}
          >
            Agregar una Pregunta
          </Text>
          <Text
            textAlign={"center"}
            fontWeight={"400"}
            fontSize={16}
            color={"rgba(135, 135, 135, 1)"}
          >
            Tu experiencia y conocimiento son valiosos. Completa estos pasos
            para agregar una pregunta al banco de datos y enriquecer el
            aprendizaje de la comunidad médica.
          </Text>
        </Box>
        <Box>
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
                    Tarjeta de aprendizaje:
                  </FormControl.Label>
                  <TextFieldStyled
                    name="email"
                    type={"text"}
                    placeholder="Seleccione una opción"
                    rounded={16}
                    height={65}
                    bg={"#F9FAFB"}
                    borderWidth={0}
                    fontSize={16}
                  />
                </FormControl>
                <FormControl position={"relative"}>
                  <FormControl.Label _text={styles.label}>
                    Pregunta:
                  </FormControl.Label>
                  <TextFieldStyled
                    name="password"
                    type={ "text"}
                    placeholder="Tu pregunta..."
                    rounded={16}
                    height={65}
                    borderWidth={0}
                    bg={"#F9FAFB"}
                    fontSize={16}                    
                  />
                  
                    <HStack>
                    <ButtonStyled text={'subir'}/>
                    <Box>png jpg</Box>
                    </HStack>
                  
                </FormControl>
                <FormControl position={"relative"}>
                  <FormControl.Label _text={styles.label}>
                    Respuesta:
                  </FormControl.Label>
                  <TextFieldStyled
                    name="password"
                    type={ "text"}
                    placeholder="Tu respuesta..."
                    rounded={16}
                    height={65}
                    borderWidth={0}
                    bg={"#F9FAFB"}
                    fontSize={16}                    
                  />
                </FormControl>
                <FormControl marginTop={9}>
                  <ButtonStyled
                    text={"Solicitar"}
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