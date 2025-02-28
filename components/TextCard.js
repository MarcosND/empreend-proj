import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useTheme } from '@emotion/react';

const { height, width } = Dimensions.get('window');

const TextCard = ({ title, image }) => {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.color1 }]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title]}>{title}</Text>
      </View>
      <Image source={image} style={styles.image} resizeMode="contain" />

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
    width: '100%',
    borderWidth: 0.7,
    borderColor: 'gray',
  },
  
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    
  },

});

export default TextCard;
