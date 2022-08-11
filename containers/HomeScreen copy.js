import { View, Text, Button } from "react-native";

import Link from "../components/Link";
// La props navigation est passée à notre screen car il est dans un Stack.Screen
function HomeScreen({ extraData, navigation }) {
  //   console.log(props);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{extraData}</Text>
      <Button
        title="Vers Details"
        onPress={() => {
          // Pour passer des informations au screen vers lequel je navigue, je donne un objet en deuxième argument à la fonction navigate
          navigation.navigate("Details", {
            id: 1234567890,
            otherParam: "un autre params",
          });
        }}
      />
      <Link to="Details" />
      <Link to="Inputs" />
    </View>
  );
}

export default HomeScreen;
