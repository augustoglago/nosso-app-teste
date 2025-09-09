import { StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

const jogos2024 = [
  {
    title: 'Elden Ring: Shadow of the Erdtree',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'FromSoftware',
    description: 'Expansão massiva do universo de Elden Ring com novas áreas, chefes e mistérios sombrios.',
  },
  {
    title: 'Final Fantasy VII Rebirth',
    platform: 'PS5',
    developer: 'Square Enix',
    description: 'Segunda parte do remake de FFVII com gráficos atualizados e jogabilidade expandida.',
  },
  {
    title: 'Hades II',
    platform: 'PC (Acesso antecipado)',
    developer: 'Supergiant Games',
    description: 'A sequência do aclamado roguelike, agora com Melinoë enfrentando Cronos.',
  },
  {
    title: 'Star Wars Outlaws',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'Ubisoft',
    description: 'Explore o submundo da galáxia em um jogo de ação e aventura em mundo aberto.',
  },
  {
    title: 'Senua’s Saga: Hellblade II',
    platform: 'Xbox Series X/S, PC',
    developer: 'Ninja Theory',
    description: 'Uma experiência intensa e cinematográfica com foco em psicose e mitologia nórdica.',
  },
  {
    title: 'Like a Dragon: Infinite Wealth',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'Ryu Ga Gotoku Studio',
    description: 'Ichiban e Kiryu juntos em uma nova aventura insana nas ruas do Havaí.',
  },
  {
    title: 'Dragon’s Dogma 2',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'Capcom',
    description: 'RPG de ação em mundo aberto com um sistema único de peões e combate tático.',
  },
  {
    title: 'Prince of Persia: The Lost Crown',
    platform: 'Multiplataforma',
    developer: 'Ubisoft',
    description: 'Retorno às raízes 2D com combate ágil e plataforma desafiadora.',
  },
  {
    title: 'Tekken 8',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'Bandai Namco',
    description: 'Lutas mais intensas e visuais incríveis com novos modos e mecânicas.',
  },
  {
    title: 'Avowed',
    platform: 'Xbox Series X/S, PC',
    developer: 'Obsidian Entertainment',
    description: 'RPG em primeira pessoa no mundo de Eora, com foco em narrativa e escolhas.',
  },
  {
    title: 'Stalker 2: Heart of Chornobyl',
    platform: 'Xbox Series X/S, PC',
    developer: 'GSC Game World',
    description: 'Mistura de sobrevivência, horror e FPS em um mundo radioativo pós-apocalíptico.',
  },
  {
    title: 'The Plucky Squire',
    platform: 'PS5, Xbox Series X/S, PC, Switch',
    developer: 'All Possible Futures',
    description: 'Um jogo de aventura que mistura 2D e 3D de forma criativa e encantadora.',
  },
  {
    title: 'Metaphor: ReFantazio',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'ATLUS',
    description: 'RPG épico dos criadores de Persona com estética única e narrativa profunda.',
  },
  {
    title: 'The Wolf Among Us 2',
    platform: 'Multiplataforma',
    developer: 'Telltale Games',
    description: 'Continuação da saga noir baseada em quadrinhos, cheia de escolhas e mistério.',
  },
  {
    title: 'Paper Mario: The Thousand-Year Door (Remake)',
    platform: 'Nintendo Switch',
    developer: 'Nintendo',
    description: 'Remake do clássico RPG com Mario em uma aventura carismática e cheia de humor.',
  },
  {
    title: 'Rise of the Ronin',
    platform: 'PS5',
    developer: 'Team Ninja',
    description: 'Ação em mundo aberto no Japão do século XIX com combates samurais intensos.',
  },
  {
    title: 'Black Myth: Wukong',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'Game Science',
    description: 'Aventura épica baseada na lenda do Rei Macaco com gráficos incríveis e combate desafiador.',
  },
  {
    title: 'Little Nightmares III',
    platform: 'Multiplataforma',
    developer: 'Supermassive Games',
    description: 'Terror em side-scroller com nova dupla de protagonistas e coop online.',
  },
  {
    title: 'Flintlock: The Siege of Dawn',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'A44 Games',
    description: 'Ação frenética com armas de fogo e magia em um universo de fantasia.',
  },
  {
    title: 'Ark 2',
    platform: 'Xbox Series X/S, PC',
    developer: 'Studio Wildcard',
    description: 'Sobreviva em um mundo pré-histórico com Vin Diesel e dinossauros gigantes.',
  },
  {
    title: 'Hollow Knight: Silksong',
    platform: 'Multiplataforma',
    developer: 'Team Cherry',
    description: 'Muito aguardada sequência do metroidvania Hollow Knight com nova protagonista.',
  },
  {
    title: 'Palworld (Versão Final)',
    platform: 'PC, Xbox',
    developer: 'Pocketpair',
    description: 'Pokémon com armas? Crie, lute e sobreviva nesse mundo peculiar.',
  },
  {
    title: 'Frostpunk 2',
    platform: 'PC',
    developer: '11 bit studios',
    description: 'Simulador de sobrevivência em mundo congelado, agora com decisões ainda mais difíceis.',
  },
  {
    title: 'Visions of Mana',
    platform: 'PS5, Xbox Series X/S, PC',
    developer: 'Square Enix',
    description: 'Renascimento da clássica franquia Mana com belos visuais e ação refinada.',
  },
  {
    title: 'Clock Tower: Rewind',
    platform: 'Multiplataforma',
    developer: 'WayForward',
    description: 'Remaster do clássico survival horror de 1995 com novas opções e nostalgia.',
  },
];

export default function Jogos2024Screen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="gamecontroller"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Top 25 Jogos de 2024</ThemedText>
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        <FlatList
          data={jogos2024}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ThemedView style={styles.movieItem}>
              <ThemedText type="subtitle">
                {`${index + 1}. ${item.title}`}
              </ThemedText>
              <ThemedText type="defaultSemiBold">Plataformas: {item.platform}</ThemedText>
              <ThemedText type="defaultSemiBold">Desenvolvedora: {item.developer}</ThemedText>
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
  movieItem: {
    marginBottom: 20,
    gap: 8,
  },
  description: {
    lineHeight: 22,
  },
});