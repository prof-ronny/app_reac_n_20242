import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios'
import { useEffect } from "react";




export default function Index() {
  let [contador,setContador]= useState(0);
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
     <ListaProdutos produtos={produtos}></ListaProdutos>
     <Button title={contador.toString()}
      onPress={()=>{clicarBotao()}} >
     </Button>

     <CadastroProduto/>

      
    </View>
  );

  function clicarBotao(){
    setContador(contador+1);
  
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