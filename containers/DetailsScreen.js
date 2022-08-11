import { View, Text, Button } from "react-native";

// J'ai accès aux props navigation et route car mon composant est dans un Stack.Screen
function DetailsScreen({ navigation, route }) {
  console.log(route);
  const { id, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>
        L'id reçu est {id} et l'autre param est
        {otherParam}
      </Text>
      <Button
        title="goBack"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="push vers home"
        onPress={() => {
          // navigation.push permet de recharger l'écran vers lequel je navigue
          navigation.push("Home");
        }}
      />
      <Button
        title="pop to top"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

export default DetailsScreen;
