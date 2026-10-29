
import { ScrollView, Text, View, StyleSheet } from "react-native";
import ItemCardapio from "../components/ItemCardapio";

export default function Index() {
  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.container}>
        <Text style={styles.emojiTopo}>🍽️</Text>

        <Text style={styles.titulo}>Cantinho do Sabor</Text>

        <Text style={styles.subtitulo}>
          Sabores especiais para o seu dia!
        </Text>

        <Text style={styles.categoria}>🍕 Comidas</Text>

        <ItemCardapio
          nome="Pizza de Calabresa"
          emoji="🍕"
          preco={22}
          disponivel={true}
        />

        <ItemCardapio
          nome="Pastel de Queijo"
          emoji="🥟"
          preco={9}
          disponivel={true}
        />

        <Text style={styles.categoria}>🍰 Sobremesas</Text>

        <ItemCardapio
          nome="Bolo de Chocolate"
          emoji="🍰"
          preco={8}
          disponivel={false}
        />

        <ItemCardapio
          nome="Sorvete"
          emoji="🍨"
          preco={7}
          disponivel={true}
        />

        <Text style={styles.rodape}>
          Obrigado pela preferência! ❤️
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#080e16",
  },
  container: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },
  emojiTopo: {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 8,
  },
  titulo: {
    color: "#5cf59a",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    color: "#a9bfd8",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 28,
  },
  categoria: {
    color: "#5cf59a",
    backgroundColor: "#12382f",
    padding: 14,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop: 12,
  },
  rodape: {
    color: "#a9bfd8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },
});
