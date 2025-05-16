    import { Modal, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from "react-native";
    import { Feather } from "@expo/vector-icons";
    import { useNavigation } from "@react-navigation/native";
    import { useState } from "react";
    import { RootStackParamListMenu } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamListMenu>;

    function Header() {

        const[menuVisible,setMenuVisible] = useState(false);
        const navigation = useNavigation<NavigationProps>();

        const toggleMenu = () => setMenuVisible(!menuVisible);

        return (
            <View>
                <TouchableOpacity onPress={toggleMenu}>
                    <Feather name="menu" size={32} color="white"/>
                </TouchableOpacity>
            
                <Text>Bem-Vindo a GoMoto</Text>

                <Modal transparent visible={menuVisible} animationType="fade">
            <TouchableOpacity style={styles.overlay} onPress={toggleMenu}>
            <View style={styles.menu}>
                <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Home")}
                >
                <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Aluguel")}
                >
                <Text style={styles.menuText}>Aluguel e Motos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Mapa")}
                >
                <Text style={styles.menuText}>Mapa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Sobre")}
                >
                <Text style={styles.menuText}>Sobre</Text>
                </TouchableOpacity>
                {/* Adicione mais opções aqui, conforme necessário */}
            </View>
            </TouchableOpacity>
        </Modal>
        </View>
        )
    }

    const styles = StyleSheet.create({
        header: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        paddingTop: 40,
        paddingBottom: 10,
        },
        headerTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        },
        menu: {
        backgroundColor: "#1c1c1c",
        padding: 20,
        position: "absolute",
        top: 60,
        left: 10,
        right: 100,
        borderRadius: 10,
        elevation: 5,
        },
        menuItem: {
        marginBottom: 15,
        },
        menuText: {
        color: "#FFCC00",
        fontSize: 16,
        },
        overlay: {
        flex: 1,
        backgroundColor: "#00000099",
        },
    });
    

    export default Header;