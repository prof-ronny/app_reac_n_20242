import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios'
import { useEffect } from "react";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";
import { useRouter } from "expo-router";
import { useFocusEffect } from "expo-router";





export default function Index() {
  const router = useRouter();

  useFocusEffect(()=>{
    carregaProdutos();
  })
  

  let [produtos,setProdutos]= useState([]);

  useEffect(()=>{
    carregaProdutos();
  },[])


  

  function carregaProdutos(){
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((resp)=>{
        setProdutos(resp.data);
      })

  }

  return (
    <View
      style={estilo.container}
    >
     <ListaProdutos produtos={produtos} aoAtualizar={carregaProdutos} ></ListaProdutos>
     <Button title='Cadastrar'
      onPress={()=>{telaCadastro()}} >
     </Button>
    </View>
  );

  function telaCadastro(){
    router.push('/Telas/cadastro');  
  }
}



const estilo= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
    paddingStart:20,
    
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  titulo:{
    color: "#000000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"

  },


});