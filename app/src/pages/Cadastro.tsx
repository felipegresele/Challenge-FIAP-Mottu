import React from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

//Tipagem para Props da tela de cadastro
type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

function Cadastro({ navigation }: Props) {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm({});

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)</Text>

      <Controller
        control={control}
        name="username"
        rules={{ required: 'Usuário é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu usuário"
              placeholderTextColor="#888"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </View>
        )}
      />
      {errors.username?.message && typeof errors.username?.message === "string" && <Text style={styles.labelError}>{errors.username.message}</Text>}

      <Controller
        control={control}
        name="email"
        rules={{ required: 'E-mail é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#888"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        )}
      />
      {errors.password?.message && typeof errors.password?.message === "string" && <Text style={styles.labelError}>{errors.password.message}</Text>}

      <Controller
              control={control}
              name="confirmEmail"
              rules={{ required: 'Confirmação do email é obrigatório',
                  validate:(value) => value === getValues('email') || "Os emails não coincidem",
               }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Confirme seu Email:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail novamente"
                    placeholderTextColor="#888"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              )}
            />      
      {errors.confirmEmail?.message && typeof errors.confirmEmail?.message === "string" && <Text style={styles.labelError}>{errors.confirmEmail.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Senha é obrigatória' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#888"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </View>
        )}
      />
      {errors.password?.message && typeof errors.password?.message === "string" && <Text style={styles.labelError}>{errors.password.message}</Text>}


      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Link de cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.link}>Tem conta? Entre aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 24,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    width: 300,
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: '#FFD700', // amarelo
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
    width: 200,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  labelError: {
    color: "#ff375b",
    alignSelf: "center",
    marginBottom: 2,
  }
});

export default Cadastro;
