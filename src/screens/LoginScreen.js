import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import TextFieldStyled from '../components/ui/TextFieldStyled'
import { loginSchema } from '../utils/schemas'

export default function LoginScreen() {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Formik
        initialValues={{
            email: "",
            password: ""
        }}
        validationSchema={loginSchema}
      >
        {
            ({

            }) => (
                <View>
                    <Text>
                        123123123123
                    </Text>
                    <TextFieldStyled
                        name="email"
                        placeholder='Correo electronico'
                    />
                    <TextFieldStyled
                        name="password"
                    />
                </View>
            )
        }
      </Formik>
    </View>
  )
}