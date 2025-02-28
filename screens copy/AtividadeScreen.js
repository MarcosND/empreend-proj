import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import AtividadeCard from '../components/AtividadeCard';

const mockAtividades = [
  {
    title: "Atividade 1",
    rating: 3,
    image: require('../assets/atividade1.png')
  },
  {
    title: "Atividade 2",
    rating: 1,
    image: require('../assets/atividade2.png')
  },
  {
    title: "Atividade 3",
    rating: 2,
    image: require('../assets/atividade3.png')
  }
];
const mockPacientes = [
  {
    title: "Paciente 1",
    rating: 3,
    image: require('../assets/pacientes.png')
  },
  {
    title: "Paciente 2",
    rating: 1,
    image: require('../assets/pacientes.png')
  },
];

const AtividadeScreen = ({ route, navigation }) => {
  const { therapistName } = route.params;
  var userType = route.params.userType

  const theme = useTheme();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    route.params.userType == 'Pais' ? setCards(mockAtividades) 
    : setCards(mockPacientes);
  }, [userType]);

  const handleAtividadePress = (atividade) => {
    var userType = route.params.userType
    navigation.navigate('AtividadeDetalhes', { userType, atividade });
  };

  const handleInicioPress = () => {
    navigation.navigate('Home');
  };

  const handlePacientePress = (atividade) => {
    var userType = route.params.userType
    navigation.navigate('PacienteDetalhesScreen', { userType, atividade });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.surface} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{therapistName}</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
   
        {cards.map((atividade, index) => (

          <TouchableOpacity key={index} onPress={() => userType == 'Pais'? 
            handleAtividadePress(atividade):handlePacientePress(atividade) } 
          style={userType == 'Pais' ? styles.cardContainer : styles.cardContainerPaciente}>
          
          <AtividadeCard key={index} title={atividade.title} rating={atividade.rating} image={atividade.image}/>
          
          </TouchableOpacity>
        
        ))}
      </ScrollView>
      
      
      <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => handleInicioPress()} style={styles.footerItem}>
          <Ionicons name="home-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Principal</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInicioPress()} style={styles.footerItem}>          
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
    flexDirection: 'row',
    height: '15%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: '5%',
  },
  cardContainer: {
    height: '30%',
    marginBottom: '5%', 
  },
  cardContainerPaciente: {
    height: '15%',
    marginBottom: '5%', 
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default AtividadeScreen;
