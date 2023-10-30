import { View, Text, TextInput } from 'react-native'
import React, { Fragment } from 'react'
import { useField } from 'formik'

export default function TextFieldStyled({
    name,
    placeholder="",
    ...rest
}) {

    const [
        field,
        meta,
        helpers
    ] = useField(name)

  return (
    <View
        style={{
            width: "100%",
            backgroundColor: "skyblue",
            marginVertical: 5
        }}
    >
        <TextInput
            value={field.value}
            onChangeText={helpers.setValue}
            onBlur={helpers.setTouched}
            placeholder={placeholder}
            style={{
                borderWidth: 1,
                borderColor: "#000000",
                width: "100%",
            }}
            {
                ...rest
            }
        />
        {
            meta.error
                && meta.touched
                    && (
                        <Text>
                            {
                                meta.error
                            }
                        </Text>
                    )
        }
    </View>
  )
}