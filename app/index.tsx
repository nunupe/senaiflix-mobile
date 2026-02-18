import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
const filmesEmAlta = [
   {
    id: 1,
    title: "Breaking Bad",
    image: "https://www.iamfy.co/cdn/shop/files/m_2Fx1000_2F38f37631-e786-44ce-9437-6272e0a48673.jpg?v=1760869187%22"
  },
 
   {
    id: 2,
    title: "A empregada",
    image: "https://i0.wp.com/www.cinemadebuteco.com.br/wp-content/uploads/2026/01/poster-a-empregada-240x300.webp?resize=240%2C300&ssl=1%22"
   },
 
   {
    id: 3,
    title: "Jogador N1",
    image: "https://m.media-amazon.com/images/I/91z865cb5-L._AC_UF894,1000_QL80_.jpg"
   },
 
   {
    id: 4,
    title: "Esquadrão Suicida",
    image: "https://m.media-amazon.com/images/M/MV5BNzdmNjkwZmYtOTFkZS00YWJhLWI5ZGEtYmZjYWExOTY1MzBhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
   },
 
]
 
const series = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://www.europanet.com.br/superposter/images/vejapordentro/107063/107063.jpg"
  },
  {
    id: 2,
    title: "The vanpire diaries",
    image: "https://m.media-amazon.com/images/I/71s4ezULeOL._AC_SL1385_.jpg"
  },
  {
    id: 3,
    title: "Bridgerton",
    image: "https://wwd.com/wp-content/uploads/2022/03/FM2lbTuUYAENuNc.jpeg"
  },
  {
    id: 4,
    title: "Olympo",
    image: "https://images.justwatch.com/poster/330517928/s718/olympo.jpg"
  }
]
 
const filmes = [
  {
    id: 1,
    title: "Mortal Kombat",
    image: "https://upload.wikimedia.org/wikipedia/pt/a/aa/Mortal_Kombat_%282021%29.jpg"
  },
  {
    id: 2,
    title: "Titanic",
    image: "https://m.media-amazon.com/images/I/71ps2xBoAuL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "Minecraft: O Filme",
    image: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/11/20/1973597620-minecraftthemoviever3xlg.jpg"
    
  },
  {
    id: 4,
    title: "Crepúsculo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGR69tN97ZfiLtICp5GrMNOc1tMaiqBYMlg&s"
  }
]
 
export default function Index() {
  return (
 
    <SafeAreaView style={style.container}>
 
      <View>
        <View style={style.senaiFlix}>
          <Text style={style.mainTitle}>SENAI</Text>
          <Text style={style.mainTitle2}>FLIX</Text>
        </View>
        <Text style={style.welcomeText}>Bem vindo ao seu catálogo de filmes e séries.</Text>
      </View>
 
      <View style={style.section}>
        <Text style={style.sectionTitle}>Em Alta</Text>
 
        <FlatList
          contentContainerStyle={style.movieList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmesEmAlta}
          renderItem={(({ item }) => (
 
            <View style={style.movieItem}>
              <Image style={style.movieImage} source={{ uri: item.image }} />
              <Text style={style.movieTitle}>{item.title}</Text>
            </View>
 
          ))}>
 
 
        </FlatList>
      </View>
 
      <View style={style.section}>
        <Text style={style.sectionTitle}>Séries</Text>
 
        <FlatList
          contentContainerStyle={style.movieList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={series}
          renderItem={(({ item }) => (
 
            <View style={style.movieItem}>
              <Image style={style.movieImage} source={{ uri: item.image }} />
              <Text style={style.movieTitle}>{item.title}</Text>
            </View>
 
          ))}>
 
 
        </FlatList>
      </View>
 
      <View style={style.section}>
        <Text style={style.sectionTitle}>Filmes</Text>
 
        <FlatList
          contentContainerStyle={style.movieList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmes}
          renderItem={(({ item }) => (
 
            <View style={style.movieItem}>
              <Image style={style.movieImage} source={{ uri: item.image }} />
              <Text style={style.movieTitle}>{item.title}</Text>
            </View>
 
          ))}>
 
 
        </FlatList>
      </View>
 
    </SafeAreaView>
  );
}
 
const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1, //Ocupa a tela inteira
    paddingHorizontal: 10
  },
  senaiFlix: {
    flexDirection: "row"
  },
  mainTitle: {
    color: "#C70000",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5
  },
  mainTitle2: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 20
  },
  movieImage: {
    width: 100,
    height: 160
  },
  movieTitle: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
    fontWeight: 400,
    flexWrap: "wrap"
  },
  movieItem: {
    width: 100
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieList: {
    gap: 15
  },
  section: {
    marginBottom: 30
  }
})
 