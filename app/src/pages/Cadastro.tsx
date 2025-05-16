import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

function Cadastro({ navigation }: Props) {

  interface FormData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  }

  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({});

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)</Text>

      {/* Usuário */}
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
      {errors.username?.message && <Text style={styles.labelError}>{errors.username.message}</Text>}

      {/* Senha */}
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

             {/* Email */}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: 'Confirmação de senha é obrigatório',
        validate: value => value === getValues("password") || "As senhas não coincidem"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha:"
              placeholderTextColor="#888"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="visible-password"
              autoCapitalize="none"
            />
          </View>
        )}
      />
      {errors.confirmPassword?.message && <Text style={styles.labelError}>{errors.confirmPassword.message}</Text>}
          </View>
        )}
      />
      {errors.password?.message && <Text style={styles.labelError}>{errors.password.message}</Text>}

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Tem conta? Entre aqui</Text>
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
  },
  labelError: {
    color: "#FF375B",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 5,
  }
});

export default Cadastro;
