import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Constants from 'expo-constants';

export default function App() {

  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LoginScreen/>
    </SafeAreaView>
  );
}


