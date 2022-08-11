import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

const RoomScreen = ({ route, navigation }) => {
  const [showText, setShowText] = useState(false);

  console.log(route);
  return (
    <View>
      <Text>RoomScreen</Text>
      <Text>id reçu lors de la navigation : {route.params.id}</Text>
      <TouchableOpacity
        onPress={() => {
          setShowText(!showText);
        }}
      >
        <Text numberOfLines={showText ? null : 2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
          facilis dolorem at quibusdam est incidunt, accusantium dolore quia
          eligendi rem ex esse qui ut! Aliquam odit a nostrum ad?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomScreen;
