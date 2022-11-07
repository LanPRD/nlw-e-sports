import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://10.0.0.113:3333/games")
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Header title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <GameCard data={item} onPress={() => handleOpenGame(item)} />}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
