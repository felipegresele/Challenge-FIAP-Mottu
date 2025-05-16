import { Button, Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../routes/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "BoasVindas">

function BoasVindas({navigation}:Props) {
    const widthWindow = Dimensions.get('window').width; //ocupar 100% da largura da tela
    const heightWindow = Dimensions.get('window').height; //ocupar 100% da altura da tela

    return (
        <View style={[styles.container, {width: widthWindow, height: heightWindow}]}>
            <Image source={require("../../assets/moto-tela-inicial.png")} style={styles.image}/>
            <View style={styles.text_container}>
                <Text style={{color: "#fff", fontSize: 50,}} >Gomoto -</Text>
                <Text style={{color: "#FFCC00", fontSize: 40, width: 250}}>Chega fácil, chega certo</Text>
            </View>
            <View style={styles.container_btn}>
                <TouchableOpacity style={[styles.btn, styles.loginBtn]} onPress={() => navigation.navigate('Login')}>
                    Login
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.cadastrarBtn]} onPress={() => navigation.navigate('Cadastro')}>
                    Cadastrar
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        fontFamily: "Arial",
        alignItems: "center",
    },
    image: { 
        width: 320,
        height: 250,
    },
    container_btn: {
        padding: 10,
        marginTop: 70,
    },
    cadastrarBtn: {
        backgroundColor: "#111",
        color: "#fff",
    }, 
    loginBtn: {
        backgroundColor: "#FFCC00",
    },
    btn: {
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 10,
        fontSize: 20,
    },
    text_container: {
        alignSelf: "flex-start",
        paddingLeft: 20,
        marginTop: 10,
    },
})

export default BoasVindas