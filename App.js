import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="allPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add-circle-outline"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("addPlaces")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="addPlaces"
            component={AddPlace}
            options={{
              title: "Add new Place",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}