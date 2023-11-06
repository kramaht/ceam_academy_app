import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen from "../../screens/OnboardingScreen";
import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
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
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
}
