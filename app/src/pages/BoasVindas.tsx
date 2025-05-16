import { 
    Dimensions, 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/types";

type Props = NativeStackScreenProps<RootStackParamList, "BoasVindas">;

function BoasVindas({ navigation }: Props) {
    const widthWindow = Dimensions.get('window').width;
    const heightWindow = Dimensions.get('window').height;

    return (
        <SafeAreaView style={[styles.container, { width: widthWindow, height: heightWindow }]}>
            <Image 
                source={require("../../assets/mottu-logo.png")} 
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>Mottu -</Text>
                <Text style={styles.subtitle}>Chega fácil, chega certo</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.loginButton]} 
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, styles.registerButton]} 
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.registerText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 250,
        height: 150,
        marginBottom: 50,
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 20,
    },
    title: {
        color: "#fff",
        fontSize: 50,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#00A859",
        fontSize: 30,
        marginTop: 5,
    },
    buttonContainer: {
        marginTop: 70,
    },
    button: {
        width: 230,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    loginButton: {
        backgroundColor: "#00A859",
    },
    registerButton: {
        backgroundColor: "#1C1C1C",
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    registerText: {
        color: "#E0E0E0",
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default BoasVindas;
