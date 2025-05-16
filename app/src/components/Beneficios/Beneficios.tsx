import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons'; // Certifique-se de ter expo/vector-icons instalado

function Beneficios() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Benefícios de ser Gomoto</Text>

            <View style={styles.card}>
                <FontAwesome5 name="dollar-sign" size={24} color="#FFCC00" />
                <Text style={styles.cardTitle}>Economia de verdade</Text>
                <Text style={styles.cardText}>
                Nossas motos fazem até 60 km por litro e você não precisa se preocupar com IPVA ou licenciamento — esses custos ficam por nossa conta.
                </Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="security" size={24} color="#FFCC00" />
                <Text style={styles.cardTitle}>Proteção contra terceiros e roubo</Text>
                <Text style={styles.cardText}>
                Com atendimento 24 horas, você nunca está sozinho. Se acontecer um acidente ou o pneu furar, nossa equipe vai até você para ajudar.                </Text>
            </View>

            <View style={styles.card}>
                <Entypo name="tools" size={24} color="#FFCC00" />
                <Text style={styles.cardTitle}>Manutenção preventiva</Text>
                <Text style={styles.cardText}>
                    A manutenção preventiva é feita por nós, sem custo adicional e sem surpresas no caminho.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#000", // Fundo escuro
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        color: "#FFCC00",
        marginBottom: 20,
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#111",
        borderColor: "#FFCC00",
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        width: "100%",
        maxWidth: 320,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 8,
    },
    cardText: {
        fontSize: 14,
        color: "#ddd",
        marginTop: 8,
    },
});

export default Beneficios;
