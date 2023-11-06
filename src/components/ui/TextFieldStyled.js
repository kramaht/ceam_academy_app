import { View, Text, TextInput } from "react-native";

import { Input, Box } from "native-base";
import React, { Fragment } from "react";

import { useField } from "formik";

export default function TextFieldStyled({
  name,
  type,
  styles,
  placeholder = "",
  ...rest
}) {
  const [field, meta, helpers] = useField(name);

  return (
    <Box>
      <Input
        type={type}
        value={field.value}
        onChangeText={helpers.setValue}
        onBlur={helpers.setTouched}
        placeholder={placeholder}        
        {...rest}
      />
      {meta.error && meta.touched && <Text>{meta.error}</Text>}
    </Box>
  );
}
