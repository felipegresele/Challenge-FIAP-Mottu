import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/routes/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoasVindas from './src/pages/BoasVindas';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';
import MapaPatio from './src/pages/MapaPatio';
import CheckMoto from './src/pages/CheckMoto';
import Teste from './src/pages/Teste';


export default function App() {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Dashboard' 
        screenOptions={{ 
          headerShown: true, 
          headerStyle: {
          backgroundColor: "black",
      },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          
      }}
      >
        <Stack.Screen name="BoasVindas" component={BoasVindas} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="CheckMoto" component={CheckMoto}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Teste" component={Teste} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Dashboard" component={Dashboard}  />
    </Stack.Navigator>
    </NavigationContainer>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
