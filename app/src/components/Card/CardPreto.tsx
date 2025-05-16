import { Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import { RootStackParamList } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = NativeStackNavigationProp<RootStackParamList, "Aluguel">

function CardPreto({navigation}: Props) {

    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>GoMoto Entregas</Text>
                <Text style={styles.desc}>A melhor plataforma de entregas para o seu negócio</Text>    
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Aluguel")}>
                    <Text style={styles.textBtn}>Saiba mais</Text>
                </TouchableOpacity>
                <Image 
                source={require("../../../assets/moto-modelo1.png")} 
                style={styles.image}
                />
            </View>

    )

}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFEB3B',
      borderRadius: 15,
      padding: 15,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    desc: {
      fontSize: 14,
      color: '#000',
      textAlign: 'center',
      marginVertical: 10,
    },
    btn: {
      backgroundColor: '#FF9800',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    textBtn: {
      color: '#fff',
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
  });

export default CardPreto