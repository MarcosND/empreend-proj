import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');

const atividade = {
  title: "Prendedores de Roupa",
  videoTitle: "Assistir Vídeo",
  videoIcon: "play-circle-outline",
  objetivo: "Desenvolver a habilidade de identificar e nomear emoções usando uma cartilha específica.",
  materiais: "Cartilha com cartas de emoções que incluem imagens e descrições de emoções como alegria, tristeza, raiva, medo, cansaço, tranquilidade e agitação.",
  comoFazer: [
    "Mostre as cartas de emoções à criança.",
    "Peça que identifique e nomeie as emoções das expressões faciais.",
    "Incentive a criança a explicar por que escolheu cada emoção.",
    "Utilize sugestções da cartilha sobre o que fazer quando sente cada emoção",
    "Elogie o esforço, independente dos acetos."
  ],
  videoUri: require('../assets/video.mp4'), // Adicione o caminho do vídeo aqui
};

const AtividadeScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const theme = useTheme();
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleInicioPress = () => {
    navigation.navigate('Home');
  };

  const handleVideoPress = () => {
    setIsVideoVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.surface} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}> Cartilha de Emoções</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {!isVideoVisible ? (
          <TouchableOpacity onPress={handleVideoPress} style={styles.videoContainer}>
            <Ionicons name={atividade.videoIcon} size={50} color={theme.colors.surface} />
            <Text style={[styles.videoText, { color: theme.colors.surface }]}>{atividade.videoTitle}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.videoPlayerContainer}>
            <Video
              source={atividade.videoUri}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              useNativeControls
              style={{ width: '100%', height: height * 0.4 }}
            />
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Objetivo:</Text>
          <Text style={styles.sectionText}>{atividade.objetivo}</Text>

          <Text style={styles.sectionTitle}>Materiais:</Text>
          <Text style={styles.sectionText}>{atividade.materiais}</Text>

          <Text style={styles.sectionTitle}>Como fazer</Text>
          <View style={styles.howToContainer}>
            {atividade.comoFazer.map((step, index) => (
              <Text key={index} style={styles.stepText}>{`\u2022 ${step}`}</Text>
            ))}
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.1,
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: "25%"
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: '5%',
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#277BC0',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  videoText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoPlayerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    marginBottom: 20,
  },
  howToContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  stepText: {
    fontSize: 14,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height * 0.1,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default AtividadeScreen;
