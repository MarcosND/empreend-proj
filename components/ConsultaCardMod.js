import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useTheme } from '@emotion/react';

const { height, width } = Dimensions.get('window');

const ConsultaCardMod = ({ title, text }) => {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.surface }]}>{title}</Text>
        <Text style={[styles.text, { color: theme.colors.surface }]}>{text}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,  // Borda mais arredondada
    padding: width * 0.05,  // Padding baseado em percentual da largura
    marginVertical: height * 0.01,  // Margem vertical baseada em percentual da altura
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: height * 0.15,  // 15% da altura da tela
    width: '100%',
  },
  image: {
    width: '20%', 
    height: '80%', 
    },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    marginTop: 20,
  }
});

export default ConsultaCardMod;
