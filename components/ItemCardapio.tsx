
import { View, Text, StyleSheet } from "react-native";

type Props = {
  nome: string;
  emoji: string;
  preco: number;
  disponivel: boolean;
};

export default function ItemCardapio(props: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.emoji}>{props.emoji}</Text>

      <View style={styles.info}>
        <Text style={styles.nome}>{props.nome}</Text>

        <Text style={styles.preco}>
          R$ {props.preco.toFixed(2).replace(".", ",")}
        </Text>

        <Text
          style={[
            styles.status,
            {
              color: props.disponivel ? "#C4B5FD" : "#FB7185",
            },
          ]}
        >
          {props.disponivel
            ? "✅ Disponível"
            : "❌ Esgotado"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#17121F",
    borderWidth: 1,
    borderColor: "#6D28D9",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    gap: 14,
  },
  emoji: {
    fontSize: 38,
  },
  info: {
    flex: 1,
  },
  nome: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 6,
  },
  preco: {
    color: "#C084FC",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  status: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
