import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';

const CardMochila = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.title, {marginBottom: 15}]}>GoMoto Entregas</Text>
        <Text style={[styles.description, {marginBottom: 20}]}>
          A melhor plataforma de entregas para o seu negócio
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Aluguel')}
        >
          <Text style={styles.buttonText}>Saiba mais</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/mochila-sem-fundo.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    marginTop: 50,
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 15,
    width: '90%',
    height: 500,
    alignItems: 'center',

    // Sombra no iOS
  shadowColor: '#fff',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 6,

  // Sombra no Android
  elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    width: "70%",
  },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});

export default CardMochila;
