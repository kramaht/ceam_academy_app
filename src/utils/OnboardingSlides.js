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


