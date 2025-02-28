import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import ConsultaCard from '../components/ConsultaCard';



const PacienteDetalhesScreen = ({ route, navigation }) => {
  
  const theme = useTheme();
  const atividadeInfo = route.params.atividade;

  const mockConsultasProfissional = [
      {
        title: "Atividades",
        name: `Acompanhe o progresso domestico de ${atividadeInfo.title}`,
        image: require('../assets/pacientes.png')
      },
      {
        title: "Cadastrar Atividade",
        name: "Cadastre aqui seus pacientes",
        image: require('../assets/cadastro_paciente.png')
      },
    ];
    
 
    const handleAtividadePress = (therapistName) => {
      var userType = 'Pais';
      navigation.navigate('AtividadeScreen', { therapistName, userType }); //passar pra atividadeScreen como view de PAIS!
    }; 
  
    const handleInicioPress = () => {
      navigation.navigate('Home');
    };


    const renderStars = (level) => {
      const stars = [];
      for (let i = 0; i < 3; i++) {
        stars.push(
          <Ionicons
            key={i}
            name={i < level ? "star" : "star-outline"}
            size={20}
            color={i < level ? "#FFD700" : "#E0E0E0"} // Yellow for filled stars
          />
        );
      }
      return stars;
    };
    return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.surface} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{atividadeInfo.title}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome da Criança: {atividadeInfo.title}</Text>
        <Text style={styles.infoText}>Nome do Responsável: {'guardianName'}</Text>
        <Text style={styles.infoText}>
          Nível de Suporte: {renderStars(atividadeInfo.rating)}
        </Text>
        <Text style={styles.infoText}>Comentário Importante: {'importantComment'}</Text>
      </View>


      <ScrollView contentContainerStyle={styles.scrollViewContent}>

      {mockConsultasProfissional.map((consulta, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAtividadePress(atividadeInfo.title)}
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
)}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '15%',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    infoContainer: {
      backgroundColor: '#FFFFFF',
      padding: '5%',
      borderRadius: 10,
      marginBottom: '5%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    infoText: {
      fontSize: 16,
      marginBottom: '2%',
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: '5%',
    },
    cardContainer: {
      height: '40%',
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
  
export default PacienteDetalhesScreen;

  