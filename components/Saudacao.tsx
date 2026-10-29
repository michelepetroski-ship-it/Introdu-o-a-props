
import { View, Text } from "react-native";

type SaudacaoProps = {
  nome: string;
};

export default function Saudacao(props: SaudacaoProps) {
  return (
    <View style={{
      backgroundColor: "#DBEAFE",
      padding: 12,
      marginVertical: 5,
      borderRadius: 10
    }}>
      <Text style={{ color: "#1D4ED8", fontSize: 17 }}>
        Olá, {props.nome}!
      </Text>
    </View>
  );
}
