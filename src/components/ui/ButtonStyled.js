import React from "react";
import { Box } from "native-base";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ButtonStyled({ text, onPress, ...rest }) {
  return (
    <TouchableOpacity {...rest} onPress={onPress}>
      <Box {...rest}>{text}</Box>
    </TouchableOpacity>
  );
}
