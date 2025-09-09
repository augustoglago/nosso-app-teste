import { StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const episodios = [
  {
    title: 'Vamos Todos a Acapulco',
    description: 'Um dos episódios mais icônicos, onde toda a turma da vila viaja para Acapulco. Recheado de momentos cômicos e emocionantes à beira-mar.',
  },
  {
    title: 'A Casa da Bruxa',
    description: 'As crianças criam coragem para entrar na casa da Dona Clotilde, a "Bruxa do 71", resultando em uma aventura cheia de sustos e risadas.',
  },
  {
    title: 'O Festival da Boa Vizinhança',
    description: 'A vila se reúne para um festival com apresentações musicais, poesias e peças de teatro, mostrando o talento (e a falta dele) de cada morador.',
  },
  {
    title: 'Os Espíritos Zombeteiros',
    description: 'Uma sessão espírita na casa do Seu Madruga acaba em confusão quando os espíritos parecem pregar peças em todos.',
  },
  {
    title: 'O Ladrão da Vila',
    description: 'Objetos começam a desaparecer e todos suspeitam do Chaves. Um episódio sobre mal-entendidos e a importância da confiança.',
  },
  {
    title: 'O Primeiro Dia de Aula',
    description: 'Seu Madruga se esconde do Senhor Barriga na escolinha do Professor Girafales e acaba participando da aula com as crianças.',
  },
  {
    title: 'O Filme de Terror',
    description: 'Depois de assistirem a um filme de terror, Chaves, Chiquinha e Quico ficam com medo de tudo, até da própria sombra.',
  },
  {
    title: 'A Sociedade',
    description: 'Dona Florinda e Seu Madruga se tornam sócios em um negócio de churros, mas a parceria é testada pelas trapalhadas do Chaves e do Quico.',
  },
  {
    title: 'O Desjejum do Chaves',
    description: 'Chaves tenta tomar o seu desjejum em paz, mas é constantemente interrompido pelos outros moradores da vila.',
  },
  {
    title: 'A Venda da Vila',
    description: 'O Senhor Barriga decide vender a vila, deixando todos os moradores preocupados com o futuro. Um episódio emocionante com um final surpreendente.',
  },
];

export default function ChavesScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="tv.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Episódios Clássicos do Chaves</ThemedText>
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        <FlatList
          data={episodios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ThemedView style={styles.episodeItem}>
              <ThemedText type="subtitle">
                {`${index + 1}. ${item.title}`}
              </ThemedText>
              <ThemedText style={styles.description}>{item.description}</ThemedText>
            </ThemedView>
          )}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  listContainer: {
    padding: 0,
    gap: 8,
  },
  episodeItem: {
    marginBottom: 20,
    gap: 8,
  },
  description: {
    lineHeight: 22,
  },
});