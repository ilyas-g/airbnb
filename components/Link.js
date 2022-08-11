import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Link = ({ to }) => {
  // useNavigation permet de créer une variable qui va nous permettre de naviguer même si on n'est pas dans l'enfant d'un stack screen
  const navigation = useNavigation();
  return (
    <Button
      title={"Navigons vers " + to}
      onPress={() => {
        navigation.navigate(to, { id: 4567890, otherParam: "salut" });
      }}
    />
  );
};

export default Link;
