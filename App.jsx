import { ImageBackground, Text, View } from "react-native";
import Picachu from "./components/Picachu";

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.redd.it/k9qljzis5d6b1.gif' }} 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{
        flex: 1,
        alignItems: "center",
        marginTop: 120,
        height: "90%",
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: 'center'
        }}>
          Gerar Pokemon Aleatório
        </Text>
        <Picachu />
      </View>
    </ImageBackground>
  );
}



