import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from '@/components/Header';
import { pokemons } from "@/data/pokemons"

export default function Index() {
  
    const renderPokemon = ({ item }) => (
      <Text>{item.Nome}</Text>
    )
 
  return (
      <View style={styles.container}>
        <Header title="Pokedéx" />
        <FlatList
        data={pokemons}
        style={styles.cards}
        keyExtractor={(pokemon) => pokemons.Numero.toString()}
        renderItem={renderPokemon}
        initiaNumToRender={10}
        maxtoRenderPerBatch={10}
        windowSize={5}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  cards: {
    padding: 15,
  },
});
      
