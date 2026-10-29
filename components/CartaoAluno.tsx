
import { View, Text } from "react-native";

type CartaoAlunoProps = {
  nome: string;
  curso: string;
  idade: number;
};

export default function CartaoAluno(props: CartaoAlunoProps) {
  return (
    <View style={{
      backgroundColor: "#FFFFFF",
      padding: 15,
      marginVertical: 6,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#C7D2FE"
    }}>
      <Text style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#4338CA"
      }}>
        {props.nome}
      </Text>
      <Text>Curso: {props.curso}</Text>
      <Text>Idade: {props.idade} anos</Text>
    </View>
  );
}
