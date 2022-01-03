import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ShoppingListView } from "./views/ShoppingList";

import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login View"
          component={ShoppingListView}
          options={{ title: "Read it Later - Maybe" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
