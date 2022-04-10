import { StatusBar } from "expo-status-bar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Home({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Scanner");
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <View>
        <Text style={styles.headingText}>QR-SCANNER</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/qr-code-svgrepo-com.svg")}
        />
      </View>

      <TouchableOpacity style={styles.startBtn} onPress={handleNavigate}>
        <Text style={styles.btnText}>Start by scanning a QR Code</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#212121",
    marginTop: 40,
  },

  startBtn: {
    backgroundColor: "lightseagreen",
    padding: 20,
    width: "80%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
  },
});
