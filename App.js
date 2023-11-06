import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import ButtonTabs from "./src/components/ui/ButtonTabs";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
const LinearGradient = require("expo-linear-gradient").LinearGradient;
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <SafeAreaView
          style={{
            marginTop: Constants.statusBarHeight,
            flex: 1,            
          }}
        >
          <ButtonTabs />
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
