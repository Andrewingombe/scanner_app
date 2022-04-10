import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askCameraPersmission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askCameraPersmission();
  }, []);

  const handleScannedBarCode = ({ type, data }) => {
    setScanned(true);
    setText(data);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for Camera Permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Requesting for Camera Permission</Text>
        <Button title="Allow Camera" onPress={() => askCameraPersmission()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcode}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleScannedBarCode}
          style={{ height: 400, width: 400 }}
        />
      </View>

      <Text style={styles.mainText}>{text}</Text>
      {scanned && (
        <Button
          title="Scan again"
          onPress={() => setScanned(false)}
          color="lightseagreen"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  barcode: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "lightseagreen",
  },
  mainText: {
    fontSize: 16,
    margin: 20,
  },
});
