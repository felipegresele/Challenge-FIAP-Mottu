import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../routes/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { data, StatusData } from "../api/total_motos"

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

function Dashboard({ navigation }: Props) {

  // Função auxiliar para calcular % e aplicar estilo de largura
  const getBarWidth = (value: number) => {
    return `${(value / data.total) * 100}%`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Status do Galpão</Text>

      {/* Disponíveis */}
      <View style={styles.barra}>
        <Text style={styles.titulo}>Disponíveis: {data.disponiveis}</Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: getBarWidth(data.disponiveis), backgroundColor: "#4caf50" }]}
          />
        </View>
      </View>

      {/* Investigação */}
      <View style={styles.barra}>
        <Text style={styles.titulo}>Investigação/Técnico: {data.investigacao}</Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: getBarWidth(data.investigacao), backgroundColor: "#f44336" }]}
          />
        </View>
      </View>

      {/* Em trânsito */}
      <View style={styles.barra}>
        <Text style={styles.titulo}>Em trânsito: {data.emTransitoHoje}</Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: getBarWidth(data.emTransitoHoje), backgroundColor: "#2196f3" }]}
          />
        </View>
      </View>

      {/* Total */}
      <View style={styles.barra}>
        <Text style={styles.titulo}>Total de Motos no Galpão: {data.total}</Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: "100%", backgroundColor: "#888" }]}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("MapaPatio")}>
        <Text style={styles.btnText}>Ver Mapa de Setor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "bold",
  },
  barra: {
    width: "100%",
    marginBottom: 20,
  },
  titulo: {
    color: "white",
    marginBottom: 5,
    fontSize: 16,
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 5,
  },
  btn: {
    marginTop: 30,
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Dashboard;
