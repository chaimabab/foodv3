import { createTheme, ThemeProvider } from "@rneui/themed";
import { Text } from "react-native";
import Header from "./src/Components/Header";
import { theme } from "./src/styles";
import Body from "./src/views/Body";
import logged from "./src/consts/logged";
import HomeScreen from "./src/Components/WelcomeScreens/HomeScreen";
import OnBoard from "./src/Components/WelcomeScreens/OnBoard";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const App = () => {
  // return <> {logged ? <Body /> : <Login />} </>;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoard} />{" "}
        <Stack.Screen name="Home" component={HomeScreen} />{" "}
        <Stack.Screen name="Dashborad" component={Body} />{" "}
      </Stack.Navigator>{" "}
    </NavigationContainer>
  );
};

export default AppWrapper;