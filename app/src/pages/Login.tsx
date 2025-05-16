import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { RootStackParamList } from '../routes/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "Login">

function Login({ navigation }: Props) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({});

  interface FormData {
    username: string,
    email: string,
    password: string,
  }

  function handleSignIn(data: any) {
    console.log(data);
    navigation.navigate("Dashboard")
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate="BoasVindas"}>
          
        </TouchableOpacity>
        <Text></Text>
      </View>
      <Text style={styles.title}>Login</Text>

      {/* Campo Usuário */}
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
      {errors.username?.message && typeof errors.username.message === 'string' && (
        <Text style={styles.labelError}>{errors.username.message}</Text>
      )}

      {/* Campo Email */}
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
      {errors.email?.message && typeof errors.email.message === 'string' && (
        <Text style={styles.labelError}>{errors.email.message}</Text>
      )}

      {/* Campo Senha */}
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 5,
            message: "Deve ter pelo menos 5 caracteres"
          }
        }}
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
      {errors.password?.message && typeof errors.password.message === 'string' && (
        <Text style={styles.labelError}>{errors.password.message}</Text>
      )}

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link de cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: '#00A859',
    alignSelf: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#ffffff',
    marginBottom: 5,
  },
  input: {
    width: 300,
    backgroundColor: '#1C1C1C',
    color: '#ffffff',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: '#00A859',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
    width: 200,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#888888',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 10,
  },
  labelError: {
    color: "#FF375B",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 5,
  }
});

export default Login;
