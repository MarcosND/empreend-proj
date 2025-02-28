import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import ConsultaCard from '../components/ConsultaCard';

const mockConsultasPais = [
  {
    title: "Terapeuta",
    name: "Nome da Terapeuta",
    image: require('../assets/terapeuta.png')
  },
  {
    title: "Psicólogo",
    name: "Nome do Psicólogo",
    image: require('../assets/psicologo.png')
  },
  {
    title: "Fonoaudiólogo",
    name: "Nome do Profissional",
    image: require('../assets/fonoaudiologo.png')
  }
];
const mockConsultasProfissional = [
  {
    title: "Pacientes",
    name: "lista de pacientes",
    image: require('../assets/pacientes.png')
  },
  {
    title: "Cadastrar Paciente",
    name: "cadastrar aqui nome do paciente",
    image: require('../assets/cadastro_paciente.png')
  },
];

const ConsultaScreen = ({ route, navigation }) => {
  const theme = useTheme();
  const { userEmail } = route.params;
  const [consultas, setConsultas] = useState([]);  

  useEffect(() => {
    route.params.userType == 'Pais' ? setConsultas(mockConsultasPais) 
    : setConsultas(mockConsultasProfissional);
  }, []);


  const handleCardPress = (therapistName) => {
    var userType = route.params.userType;
    navigation.navigate('AtividadeScreen', { therapistName, userType });
  }; //função que leva ate pagina de atividades ou de pacientes,

  const handleInicioPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{` bem vindo, ${userEmail}!`}</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {consultas.map((consulta, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(consulta.name)}
            style={styles.cardContainer}
          >
            <ConsultaCard title={consulta.title} name={consulta.name} image={consulta.image} />
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
    height: '15%',
  },
  headerText: {
    fontSize: 24,
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

export default ConsultaScreen;
