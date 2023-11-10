import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 370,
    height: 370,
    top: -80,
  },
});
export default [
  {
    backgroundColor: "#fff",
    image: (
      <Image
        style={styles.image}
        source={require("../../assets/images/OnboardingImage.png")}
      />
    ),
    title: "Aprendizaje Personalizado",
    subtitle:
      "Antes de comenzar, aprende cómo calificar y personalizar tus tarjetas para un aprendizaje efectivo.",
  },
  {
    backgroundColor: "#fff",
    image: (
      <Image
        style={styles.image}
        source={require("../../assets/images/OnboardingImage.png")}
      />
    ),
    title: "Elige tu Calificación",
    subtitle:
      "Tu elección afectará la frecuencia con la que verás esta tarjeta en el futuro.",
  },
  {
    backgroundColor: "#fff",
    image: (
      <Image
        style={styles.image}
        source={require("../../assets/images/OnboardingImage.png")}
      />
    ),
    title: "Califica tus Tarjetas",
    subtitle:
      "Cuando calificas una tarjeta, determinas su repetición en función de tu nivel de comprensión.",
  },
];

export const data = [
  {
    id: 1,
    title: "Cardiologia",
    timeStamp: "12:47 PM",
    content: "12 capitulos · 2 horas aprox.",
    avatarUrl: require("../../assets/images/icons/icon_1.png"),
    dowload: true,
  },
  {
    id: 2,
    title: "Dermatología",
    timeStamp: "11:1",
    content: "12 capitulos · 2 horas aprox.",
    avatarUrl: require("../../assets/images/icons/icon_2.png"),
    dowload: false,
  },
  {
    id: 3,
    title: "Rayos X",
    timeStamp: "6:22 PM",
    content: "12 capitulos · 2 horas aprox.",
    avatarUrl: require("../../assets/images/icons/icon_3.png"),
    dowload: false,
  },
  {
    id: 4,
    title: "Neurología",
    timeStamp: "8:56 PM",
    content: "12 capitulos · 2 horas aprox.",
    avatarUrl: require("../../assets/images/icons/icon_4.png"),
    dowload: true,
  },
  {
    id: 5,
    title: "Oncologia",
    timeStamp: "12:47 PM",
    content: "12 capitulos · 2 horas aprox.",
    avatarUrl: require("../../assets/images/icons/icon_5.png"),
    dowload: false,
  },
  {
    id: 6,
    title: "Cirugía Plástica",
    timeStamp: "12:47 PM",
    content: "12 capitulos · 2 horas aprox..",
    avatarUrl: require("../../assets/images/icons/icon_6.png"),
    dowload: true,
  },
  {
    id: 7,
    title: "Cirugía Plástica",
    timeStamp: "12:47 PM",
    content: "12 capitulos · 2 horas aprox..",
    avatarUrl: require("../../assets/images/icons/icon_6.png"),
    dowload: false,
  },
  {
    id: 8,
    title: "Cirugía Plástica",
    timeStamp: "12:47 PM",
    content: "12 capitulos · 2 horas aprox..",
    avatarUrl: require("../../assets/images/icons/icon_6.png"),
    dowload: false,
  },
];


export const aboutUs = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Jhon Bon Doe",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Amelia Jhonson",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Sophia King",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
];
