import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen from "../../screens/OnboardingScreen";
import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import RoutesScreen from "../../screens/RoutesScreen";
import CapitulesScreen from "../../screens/CapitulesScreen";
import LearningCardScreen from "../../screens/LearningCardScreen";

import LearningQuestionScreen from "../../screens/LearningQuestionScreen";
import { Box, Text } from "native-base";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "./DimensionScreeen";

import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function ButtonTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />

      <Tab.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="RoutesScreen"
        component={RoutesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Box>
                <AntDesign
                  name="home"
                  size={SCREEN_WIDTH * 0.07}
                  color="#6B7280"
                />
              </Box>
            );
          },
          tabBarLabel: () => (
            <Text
              fontSize={10}
              fontWeight={"500"}
              letterSpacing={0.3}
              color={"#6B7280"}
            >
              Inicio
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="CapitulesScreen"
        component={CapitulesScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="LearningCardScreen"
        component={LearningCardScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="LearningQuestionScreen"
        component={LearningQuestionScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}
