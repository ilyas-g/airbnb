import { View, Text, Image } from "react-native";

const LogoHeader = () => {
  return (
    <Image
      style={{ height: 40, width: 40 }}
      source={require("../assets/images/logo.png")}
    />
  );
};

export default LogoHeader;
