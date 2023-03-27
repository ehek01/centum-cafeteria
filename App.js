import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Main from "./src/screen/Main";
import CafeteriaDetail from "./src/screen/CafeteriaDetail";
import AllTable from "./src/screen/AllTable";

const Stack = createNativeStackNavigator();
const screenOptions = {
  title: "센텀구내식당",
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitle: "뒤로가기",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="cafeteriaDetail" component={CafeteriaDetail} />
        <Stack.Screen name="allTable" component={AllTable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
