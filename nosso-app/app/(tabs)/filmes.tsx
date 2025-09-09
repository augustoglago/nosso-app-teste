import { StyleSheet, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const filmes = [
  {
    title: 'Um Sonho de Liberdade',
    year: 1994,
    director: 'Frank Darabont',
    description: 'Um banqueiro é condenado à prisão por um crime que não cometeu e, ao longo de décadas, demonstra uma resiliência e amizade incomuns.',
  },
  {
    title: 'O Poderoso Chefão',
    year: 1972,
    director: 'Francis Ford Coppola',
    description: 'A épica saga da família Corleone e sua ascensão ao poder no mundo da máfia de Nova York.',
  },
  {
    title: 'O Poderoso Chefão: Parte II',
    year: 1974,
    director: 'Francis Ford Coppola',
    description: 'Acompanha a ascensão de Vito Corleone no passado e a consolidação do poder de seu filho, Michael, no presente.',
  },
  {
    title: 'Batman: O Cavaleiro das Trevas',
    year: 2008,
    director: 'Christopher Nolan',
    description: 'Batman enfrenta um novo e anárquico inimigo, o Coringa, que busca mergulhar Gotham City no caos.',
  },
  {
    title: '12 Homens e uma Sentença',
    year: 1957,
    director: 'Sidney Lumet',
    description: 'Um júri precisa decidir o destino de um jovem acusado de assassinato. A princípio, todos votam pela culpa, exceto um jurado, que tenta convencer os outros a reexaminar as evidências.',
  },
  {
    title: 'A Lista de Schindler',
    year: 1993,
    director: 'Steven Spielberg',
    description: 'A história real de um empresário alemão que salvou a vida de mais de mil judeus durante o Holocausto.',
  },
  {
    title: 'Pulp Fiction: Tempo de Violência',
    year: 1994,
    director: 'Quentin Tarantino',
    description: 'Várias histórias interconectadas sobre o submundo de Los Angeles, recheadas de diálogos afiados e violência estilizada.',
  },
  {
    title: 'O Senhor dos Anéis: O Retorno do Rei',
    year: 2003,
    director: 'Peter Jackson',
    description: 'O final épico da trilogia, onde as forças do bem enfrentam o exército de Sauron em uma batalha decisiva pelo destino da Terra Média.',
  },
  {
    title: 'A Origem',
    year: 2010,
    director: 'Christopher Nolan',
    description: 'Um ladrão que rouba segredos do subconsciente humano é contratado para uma missão inversa: plantar uma ideia na mente de um CEO.',
  },
  {
    title: 'Forrest Gump: O Contador de Histórias',
    year: 1994,
    director: 'Robert Zemeckis',
    description: 'A jornada de um homem simples com um QI abaixo da média, que testemunha e participa de eventos cruciais da história americana.',
  },
  {
    title: 'Clube da Luta',
    year: 1999,
    director: 'David Fincher',
    description: 'Um narrador insone e um vendedor de sabão formam um clube da luta subterrâneo que evolui para algo muito mais perigoso.',
  },
  {
    title: 'Matrix',
    year: 1999,
    director: 'Lana e Lilly Wachowski',
    description: 'Um programador de computador descobre que a realidade em que vive é uma simulação criada por máquinas e se junta a um grupo de rebeldes para lutar pela liberdade.',
  },
  {
    title: 'O Silêncio dos Inocentes',
    year: 1991,
    director: 'Jonathan Demme',
    description: 'Uma jovem agente do FBI busca a ajuda de um psiquiatra canibal aprisionado para capturar um assassino em série.',
  },
  {
    title: 'O Profissional',
    year: 1994,
    director: 'Luc Besson',
    description: 'Uma menina de 12 anos é acolhida por um assassino de aluguel após sua família ser massacrada, e ele a ensina a sobreviver.',
  },
  {
    title: 'Interestelar',
    year: 2014,
    director: 'Christopher Nolan',
    description: 'Um grupo de exploradores espaciais viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, que está à beira da extinção.',
  },
  {
    title: 'Parasita',
    year: 2019,
    director: 'Bong Joon-ho',
    description: 'Uma família pobre se infiltra na vida de uma família rica, mas um segredo inesperado ameaça o esquema.',
  },
  {
    title: 'Gladiador',
    year: 2000,
    director: 'Ridley Scott',
    description: 'Um general romano é traído e sua família é assassinada por um imperador corrupto. Ele se torna um gladiador para buscar vingança.',
  },
  {
    title: 'Laranja Mecânica',
    year: 1971,
    director: 'Stanley Kubrick',
    description: 'Em uma Londres distópica, um delinquente juvenil é submetido a um tratamento experimental para "curar" sua propensão à violência.',
  },
  {
    title: 'Psicose',
    year: 1960,
    director: 'Alfred Hitchcock',
    description: 'Uma secretária que rouba dinheiro de seu chefe se hospeda em um motel isolado, onde encontra o misterioso Norman Bates.',
  },
  {
    title: 'O Iluminado',
    year: 1980,
    director: 'Stanley Kubrick',
    description: 'Uma família se muda para um hotel isolado durante o inverno. O pai, um escritor com problemas, começa a enlouquecer sob a influência de forças sobrenaturais.',
  },
  {
    title: 'O Rei Leão',
    year: 1994,
    director: 'Roger Allers, Rob Minkoff',
    description: 'O jovem leão Simba deve reivindicar seu lugar como rei após seu tio Scar conspirar para tomar o trono.',
  },
  {
    title: 'A Viagem de Chihiro',
    year: 2001,
    director: 'Hayao Miyazaki',
    description: 'Uma menina de 10 anos se perde em um mundo mágico habitado por deuses, bruxas e espíritos, e deve encontrar uma maneira de salvar seus pais e retornar ao mundo humano.',
  },
  {
    title: 'Seven: Os Sete Crimes Capitais',
    year: 1995,
    director: 'David Fincher',
    description: 'Dois detetives caçam um serial killer que baseia seus crimes nos sete pecados capitais.',
  },
  {
    title: 'A Vida é Bela',
    year: 1997,
    director: 'Roberto Benigni',
    description: 'Um pai judeu usa o humor e a imaginação para proteger seu filho dos horrores de um campo de concentração durante o Holocausto.',
  },
  {
    title: 'Gênio Indomável',
    year: 1997,
    director: 'Gus Van Sant',
    description: 'Um zelador de uma universidade, que é um gênio da matemática, precisa aprender a lidar com seus problemas emocionais com a ajuda de um terapeuta.',
  },
  {
    title: 'Janela Indiscreta',
    year: 1954,
    director: 'Alfred Hitchcock',
    description: 'Um fotógrafo confinado em sua cadeira de rodas observa a vida de seus vizinhos e começa a suspeitar de um assassinato.',
  },
  {
    title: 'O Fabuloso Destino de Amélie Poulain',
    year: 2001,
    director: 'Jean-Pierre Jeunet',
    description: 'Uma garçonete tímida e inocente em Paris decide mudar a vida das pessoas ao seu redor de forma sutil.',
  },
  {
    title: 'Cidadão Kane',
    year: 1941,
    director: 'Orson Welles',
    description: 'Um jornalista tenta desvendar o significado da última palavra de um magnata da mídia: "Rosebud."',
  },
  {
    title: 'Onde os Fracos Não Têm Vez',
    year: 2007,
    director: 'Joel e Ethan Coen',
    description: 'Um homem comum encontra uma mala de dinheiro no deserto e é perseguido por um assassino psicopata.',
  },
  {
    title: 'Bastardos Inglórios',
    year: 2009,
    director: 'Quentin Tarantino',
    description: 'Um grupo de soldados judeus-americanos realiza missões secretas contra os nazistas durante a Segunda Guerra Mundial.',
  },
  {
    title: 'O Grande Lebowski',
    year: 1998,
    director: 'Joel e Ethan Coen',
    description: 'Um desempregado de Los Angeles se torna alvo de criminosos por ser confundido com um milionário de mesmo nome.',
  },
  {
    title: 'O Resgate do Soldado Ryan',
    year: 1998,
    director: 'Steven Spielberg',
    description: 'Durante a Segunda Guerra Mundial, um grupo de soldados é enviado em uma perigosa missão para resgatar um paraquedista cujos três irmãos foram mortos em combate.',
  },
  {
    title: 'Titanic',
    year: 1997,
    director: 'James Cameron',
    description: 'Uma jovem da aristocracia e um artista pobre se apaixonam a bordo do navio Titanic em sua viagem inaugural.',
  },
  {
    title: 'O Exterminador do Futuro 2: O Julgamento Final',
    year: 1991,
    director: 'James Cameron',
    description: 'Um ciborgue T-800 é enviado do futuro para proteger o jovem John Connor de um modelo de Exterminador mais avançado e perigoso.',
  },
  {
    title: 'O Lado Bom da Vida',
    year: 2012,
    director: 'David O. Russell',
    description: 'Um ex-professor de história com transtorno bipolar retorna para a casa dos pais e tenta reconstruir sua vida, conhecendo uma jovem viúva.',
  },
  {
    title: 'Whiplash: Em Busca da Perfeição',
    year: 2014,
    director: 'Damien Chazelle',
    description: 'Um ambicioso baterista de jazz lida com a pressão de seu professor impiedoso para se tornar o melhor em sua arte.',
  },
  {
    title: 'A Ponte do Rio Kwai',
    year: 1957,
    director: 'David Lean',
    description: 'Prisioneiros de guerra britânicos em um campo de trabalho japonês são forçados a construir uma ponte, mas a honra e o dever colidem.',
  },
  {
    title: 'O Menino do Pijama Listrado',
    year: 2008,
    director: 'Mark Herman',
    description: 'A amizade improvável entre o filho de um comandante nazista e um menino judeu aprisionado em um campo de concentração.',
  },
  {
    title: 'A Mão do Diabo',
    year: 2000,
    director: 'Sam Raimi',
    description: 'Um exorcista experiente e um jovem padre lutam contra forças demoníacas que assombram uma casa em Nova York.',
  },
  {
    title: 'A Viagem de Chihiro',
    year: 2001,
    director: 'Hayao Miyazaki',
    description: 'Uma menina de 10 anos se perde em um mundo mágico habitado por deuses, bruxas e espíritos, e deve encontrar uma maneira de salvar seus pais e retornar ao mundo humano.',
  },
  {
    title: 'A Rede Social',
    year: 2010,
    director: 'David Fincher',
    description: 'A história da criação do Facebook, desde sua origem em um dormitório de Harvard até as batalhas legais resultantes.',
  },
  {
    title: 'O Jogo da Imitação',
    year: 2014,
    director: 'Morten Tyldum',
    description: 'A história de Alan Turing, o matemático britânico que ajudou a quebrar o código Enigma nazista durante a Segunda Guerra Mundial.',
  },
  {
    title: 'Na Natureza Selvagem',
    year: 2007,
    director: 'Sean Penn',
    description: 'A história real de um jovem recém-formado que abandona a sociedade para viver sozinho na natureza do Alasca.',
  },
  {
    title: 'V de Vingança',
    year: 2005,
    director: 'James McTeigue',
    description: 'Em uma Grã-Bretanha distópica, uma misteriosa figura anarquista tenta iniciar uma revolução contra o governo totalitário.',
  },
  {
    title: 'Cidade de Deus',
    year: 2002,
    director: 'Fernando Meirelles, Kátia Lund',
    description: 'A vida em uma favela do Rio de Janeiro é retratada através de um olhar fotográfico, mostrando o crescimento do crime organizado.',
  },
  {
    title: 'Beleza Americana',
    year: 1999,
    director: 'Sam Mendes',
    description: 'Um publicitário em crise de meia-idade se apaixona por uma amiga de sua filha, buscando recuperar a vitalidade em sua vida monótona.',
  },
  {
    title: 'Quase Famosos',
    year: 2000,
    director: 'Cameron Crowe',
    description: 'Um jovem jornalista musical de uma revista famosa é designado para cobrir uma banda de rock em ascensão, vivenciando a vida na estrada.',
  },
  {
    title: 'Touro Indomável',
    year: 1980,
    director: 'Martin Scorsese',
    description: 'A biografia do pugilista Jake LaMotta, que lida com o ciúme e a raiva que destroem sua vida pessoal e sua carreira.',
  },
  {
    title: 'A Queda: As Últimas Horas de Hitler',
    year: 2004,
    director: 'Oliver Hirschbiegel',
    description: 'Os últimos dias de Adolf Hitler e de seu regime em seu bunker em Berlim são retratados de forma intensa.',
  },
  {
    title: 'O Segredo dos Seus Olhos',
    year: 2009,
    director: 'Juan José Campanella',
    description: 'Um ex-oficial de justiça investiga um caso de estupro e assassinato não resolvido, descobrindo o impacto do passado em sua vida e na de uma colega.',
  },
];

export default function FilmesScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Melhores Filmes</ThemedText>
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        <FlatList
          data={filmes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ThemedView style={styles.movieItem}>
              <ThemedText type="subtitle">
                {`${index + 1}. ${item.title} (${item.year})`}
              </ThemedText>
              <ThemedText type="defaultSemiBold">Diretor: {item.director}</ThemedText>
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