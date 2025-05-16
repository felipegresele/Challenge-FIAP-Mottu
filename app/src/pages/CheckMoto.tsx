import { View } from "react-native";
import { Text } from "react-native-gesture-handler";
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../routes/types";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "CheckMoto" >
function CheckMoto({ navigation }: Props) {
    const {control, handleSubmit, formState: {errors} } = useForm({})
    const [motoSelecionada, setMotoSelecionada] = useState("")

    function handleCheckIn(data: any) {
        console.log("Sucesso no cadastro!")
        navigation.navigate("MapaPatio");
    }

    return (
        <View>
            <Text>Check-in de Moto</Text>
            <View>
                
            </View>
        </View>
    )

}

export default CheckMoto