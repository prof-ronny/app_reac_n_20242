import { useState } from "react"
import { Text, TextInput, View } from "react-native"



const CadastroProduto = ()=>{
    let [nome,setNome] = useState('');
    let [descricao,setDescricao] = useState('');
//Continua Aqui
    return(
        <View>
            <Text   >Nome:</Text>
            <TextInput onChangeText={setNome} value={nome} />
            <Text   >Descricao:</Text>
            <TextInput onChangeText={setDescricao} value={descricao} />
            
        </View>
    )
}