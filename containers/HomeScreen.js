import { useNavigation } from "@react-navigation/core";
import {
  Button,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";

export default function HomeScreen() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://express-airbnb-api.herokuapp.com/rooms"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const displayStars = (num) => {
    const tab = [];
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        tab.push(<Entypo key={i} name="star" size={24} color="yellow" />);
      } else {
        tab.push(<Entypo key={i} name="star" size={24} color="gray" />);
      }
    }
    return tab;
  };

  const navigation = useNavigation();
  return isLoading ? (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(elem) => elem._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Room", { id: item._id });
              }}
            >
              <ImageBackground
                style={styles.imageBackground}
                source={{ uri: item.photos[0].url }}
              >
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.price} €</Text>
                </View>
              </ImageBackground>
              <View style={styles.bottomPart}>
                <View style={styles.leftPart}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.title}
                  </Text>
                  <View style={styles.starsContainer}>
                    {displayStars(item.ratingValue)}
                    {/* {[
                      <Entypo name="star" size={24} color="yellow" />,
                      <Entypo name="star" size={24} color="yellow" />,
                      <Entypo name="star" size={24} color="yellow" />,
                      <Entypo name="star" size={24} color="yellow" />,
                      <Entypo name="star" size={24} color="gray" />,
                    ]} */}
                  </View>

                  {/* {[
                    <Entypo name="star" size={24} color="black" />,
                    <Entypo name="star" size={24} color="black" />,
                    <Entypo name="star" size={24} color="black" />,
                    <Entypo name="star" size={24} color="black" />,
                    <Entypo name="star" size={24} color="black" />,
                  ]} */}
                </View>
                <View style={styles.rightPart}>
                  <Image
                    style={styles.ownerPicture}
                    source={{ uri: item.user.account.photo.url }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  imageBackground: {
    height: 250,
    justifyContent: "flex-end",
  },
  priceContainer: {
    backgroundColor: "black",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    color: "white",
    fontSize: 20,
  },
  starsContainer: {
    flexDirection: "row",
  },
  ownerPicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  bottomPart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
  },
  leftPart: {
    width: "80%",
  },
  rightPart: {
    width: "20%",
    alignItems: "flex-end",
  },
});
