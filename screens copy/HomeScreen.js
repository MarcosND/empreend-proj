import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '@emotion/react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { Ionicons } from '@expo/vector-icons';
import Button, { ButtonText } from '../components/Button';
import TextInputWithIcon from '../components/TextInputWithIcon';

const { height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const [animatedHeight] = useState(new Animated.Value(height * 0.5));
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userEmail, setUserEmail] = useState('Rodrigo');

  const handleLoginPress = () => {
    setLoginVisible(true);
    setRegisterVisible(false);
    Animated.timing(animatedHeight, {
      toValue: height * 0.75,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleRegisterPress = () => {
    setRegisterVisible(true);
    setLoginVisible(false);
    Animated.timing(animatedHeight, {
      toValue: height * 0.75,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleLogin = () => {
    const userType = selectedIndex === 0 ? 'Profissional' : 'Pais';
    navigation.navigate('Consulta', { userEmail, userType  });
  };

  const renderRegisterFields = () => {
    if (selectedIndex === 0) {
      return (
        <>
          <TextInputWithIcon iconName="person-outline" placeholder="Nome Completo" />
          <TextInputWithIcon iconName="mail-outline" placeholder="Email" onChangeText={setUserEmail} />
          <TextInputWithIcon iconName="lock-closed-outline" placeholder="Senha" secureTextEntry />
          <TextInputWithIcon iconName="lock-closed-outline" placeholder="Confirmar Senha" secureTextEntry />
        </>
      );
    } else {
      return (
        <>
          <TextInputWithIcon iconName="person-outline" placeholder="Nome Completo" />
          <TextInputWithIcon iconName="calendar-outline" placeholder="Idade" />
          <TextInputWithIcon iconName="person-outline" placeholder="Nome do Pai" />
          <TextInputWithIcon iconName="person-outline" placeholder="Nome da Mãe" />
          <View style={styles.imageContainer}>
            <Ionicons name="camera-outline" size={100} color="#E0E0E0" style={styles.profileIcon} />
            <TouchableOpacity style={styles.imageUpload}>
              <Text style={styles.imageUploadText}>Adicionar Foto</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/icone_app.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
          <Text style={{ color: theme.colors.appName, fontSize: 24, marginLeft: 10 }}>ConectaTEA</Text>
        </View>
      </View>

      <Animated.View style={{ height: animatedHeight, backgroundColor: theme.colors.background, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: '5%' }}>
        {!loginVisible && !registerVisible ? (
          <>
            <Button onPress={handleLoginPress}>
              <ButtonText>Logar</ButtonText>
            </Button>
            <Button onPress={handleRegisterPress}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </>
        ) : loginVisible ? (
          <View style={{ padding: '10%' }}>
               <SegmentedControl
                 values={['Profissional', 'Pais']}
                 selectedIndex={selectedIndex}
                 onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
                 style={{ marginBottom: '5%' }}
               />
            <TextInputWithIcon iconName="mail-outline" placeholder="Email" onChangeText={setUserEmail} />
            <TextInputWithIcon iconName="lock-closed-outline" placeholder="Senha" secureTextEntry />
            <Button onPress={handleLogin}>
              <ButtonText>Logar</ButtonText>
            </Button>
            <TouchableOpacity onPress={() => console.log('esqueceu senha')}>
            <Text style={{ color: theme.colors.primary, marginTop: '5%' }}>Esqueceu sua senha?</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={handleRegisterPress} style={{ marginTop: '10%' }}>
                 <Text style={{ color: theme.colors.cadastreSe }}>Cadastrar-se</Text>
               </TouchableOpacity>
             </View>
           ) : (
             <View style={{ padding: '10%' }}>
               <SegmentedControl
                 values={['Profissional', 'Pais']}
                 selectedIndex={selectedIndex}
                 onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
                 style={{ marginBottom: '5%' }}
               />
               {renderRegisterFields()}
               <Button>
                 <ButtonText>Cadastrar</ButtonText>
               </Button>
               <TouchableOpacity onPress={() => setLoginVisible(true)}>
                 <Text style={{ color: theme.colors.primary, marginTop: '5%' }}>Voltar</Text>
               </TouchableOpacity>
             </View>
           )}
         </Animated.View>
       </View>
     );
   };

   const styles = StyleSheet.create({
     imageContainer: {
       alignItems: 'center',
       marginBottom: '5%',
     },
     profileIcon: {
       borderRadius: 50,
       backgroundColor: '#E0E0E0',
       padding: '10%',
     },
     imageUpload: {
       marginTop: '3%',
     },
     imageUploadText: {
       color: '#6F6F6F',
       textDecorationLine: 'underline',
     },
   });

   export default HomeScreen;
