  import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
  import { RootStackParamList } from "../routes/types";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { useState } from "react";
  import { Moto } from "../api/motos"

  const motivosIndisponivel = [
    "Manutenção programada",
    "Problema mecânico inesperado",
    "Sem retorno do entregador(a)",
    "Problema no sistema de rastreamento",
    "Aguardando liberação administrativa",
  ];

  const gerarHorarioAleatorio = () => {
    const hora = Math.floor(Math.random() * 12 + 7);
    const minutos = Math.floor(Math.random() * 60);
    return `${hora.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
  };

  type Props = NativeStackScreenProps<RootStackParamList, "MapaPatio">;

  function MapaPatio({ navigation }: Props) {
    const [gridAtual, setGridAtual] = useState(0);
    const [modalMoto, setModalMoto] = useState<Moto | null>(null);

    const gerarMotos = (): Moto[] => {
    const motos: Moto[] = [];

    for (let i = 0; i < 100; i++) {
      const sorteio = Math.random();
      if (sorteio < 0.35) {
        motos.push({
          id: i + 1,
          status: "Em trânsito",
          entregador: "Entregador",
          chassi: `CH${1000 + i + 1}`,
          horarioSaida: gerarHorarioAleatorio(),
        });
      } else if (sorteio < 0.75) {
        motos.push({ id: i + 1, status: "Disponivel" });
      } else {
        motos.push({
          id: i + 1,
          status: "Investigação",
          motivoIndisponivel: motivosIndisponivel[Math.floor(Math.random() * motivosIndisponivel.length)],
        });
      }
    }

    return motos;
  };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      padding: 20,
      alignItems: "center",
    },
    titulo: {
      fontSize: 22,
      color: "#fff",
      marginBottom: 10,
      fontWeight: "bold",
    },
    gridSelector: {
      flexDirection: "row",
      marginBottom: 16,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    botao: {
      backgroundColor: "#444",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
      margin: 4,
    },
    botaoSelecionado: {
      backgroundColor: "#1E90FF",
    },
    textoBotao: {
      color: "#fff",
      fontSize: 13,
    },
    gridContainer: {
      gap: 6,
    },
    setor: {
      width: 80,
      height: 80,
      margin: 6,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      elevation: 4,
      padding: 5,
    },
    motoID: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
    },
    status: {
      fontSize: 10,
      color: "#fff",
      textAlign: "center",
      marginTop: 4,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.7)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 5,
      textAlign: "center",
    },
    modalButtons: {
      flexDirection: "row",
      marginTop: 15,
      gap: 10,
    },
    okButton: {
      backgroundColor: "#28a745",
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 6,
    },
    warnButton: {
      backgroundColor: "#dc3545",
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 6,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });

  export default MapaPatio;
