import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import ConsultaCard from '../components/ConsultaCard';
import TextCard from '../components/TextCard';

const { height, width } = Dimensions.get('window');

const consultas = [
  {
    title: "1. Identificação de Emoções",
    text: "Aprender a reconhecer diferentes emoções através de expressões faciais",
    //name: "Nome da Terapeuta",
    //image: require('../assets/pregrador.png')
  },

  {
    title: "2. Autopercepção Emocional",
    text: "Reconhecer e nomear as próprias emoções",
    // name: "Nome da Terapeuta",
    //image: require('../assets/tesoura.png')
  },

  {
    title: "3. Gestão de Emoções",
    text: "Estratégias para lidar com emoções intensas",
    // name: "Nome da Terapeuta",
    //image: require('../assets/quebra.png')
  },

  {
    title: "4. Empatia Situacional",
    text: "Identificar emoções em outros com base em situações cotidianas",
    // name: "Nome da Terapeuta",
    //image: require('../assets/espelho.png')
  },

  {
    title: "5. Empatia Estruturada",
    text: "Praticar a empatia através de jogos e atividades estruturadas",
    //name: "Nome da Terapeuta",
    //image: require('../assets/cerebro.png')
  },
 
];

const ConsultaScreen = ({ navigation }) => {
  const theme = useTheme();

  const handleCardPress = (title) => {
    navigation.navigate('IdentificacaoEmocoesScreen', { title });
  };

  const handleInicioPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>Regulação Emocional</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        
        <TextCard
          title="Desenvolver habilidades para identificar, expressar e gerenciar emoções de forma adequada"
        />
        <Text style={styles.textoetapas}>Etapas</Text>


        {consultas.map((consulta, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(consulta.title)}
            style={styles.cardContainer}
          >
            <ConsultaCard title={consulta.title} image={consulta.image}  text={consulta.text}/>
            </TouchableOpacity>
        ))}
      </ScrollView>
        
      <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={handleInicioPress} style={styles.footerItem}>
          <Ionicons name="home-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInicioPress} style={styles.footerItem}>
          <Ionicons name="settings-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.15,  // 15% da altura da tela
    backgroundColor: '#277BC0',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginBottom: 20,

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height * 0.1,  // 10% da altura da tela
    backgroundColor: '#277BC0',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
  },

  textoetapas:{
    fontWeight: "bold",
    padding: 9
  },

});

export default ConsultaScreen;
