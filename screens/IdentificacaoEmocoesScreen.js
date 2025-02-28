import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import ConsultaCard from '../components/ConsultaCard';
import TextCard from '../components/TextCard';

const { height, width } = Dimensions.get('window');

const consultas = [
  {
    title: "Cartilha de  Emoções",
    text: "Use a cartilha para identificar e nomear emoções diversas",
    //name: "Nome da Terapeuta",
    image: require('../assets/emocoes.png')
  },

  {
    title: "Espelho de Emoções",
    text: "Imite emoções usando um espelho",
    // name: "Nome da Terapeuta",
    image: require('../assets/espelho.png')
  },

  {
    title: "Correspondência de Emoção",
    text: "Associe expressões faciais a palavras ou situações",
    // name: "Nome da Terapeuta",
    image: require('../assets/cerebro.png')
  },

  
 
];

const ConsultaScreen = ({ navigation }) => {
  const theme = useTheme();

  const handleCardPress = (title) => {
    navigation.navigate('AtividadeScreen', { title });
  };

  const handleInicioPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>Identificando as Emoções</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>


        <TextCard
          title="Ensinar a criança a identificar diferentes emoções a partir de expressões faciais. Essencial para comunicação emocional e eficaz"
        />
        <Text style={styles.textoetapas}>Atividades</Text>

        {consultas.map((consulta, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(consulta.title)}
            style={styles.cardContainer}
          >
            <ConsultaCard title={consulta.title} image={consulta.image} text={consulta.text}/>
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
