import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import axios from "axios";
import React from "react";

import { Text, View, Image, Button, Alert } from "react-native";

interface PropProd{
    produto:Produto,
    aoExcluir?:Function
}

const ItemProduto:React.FC<PropProd> = ( {produto, aoExcluir})=> {
    
    console.log(produto)
    
    
    function Excluir(id: number) {
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.delete(`${api}/${id}`) 
        .then((resp)=>{
            aoExcluir?.call(null) ;
            Alert.alert('Produto excluido com sucesso');
            alert('Produto excluido com sucesso');
        })
    }

    return (
        <View style={Style.card} >
            <Text style={Style.cardText} >{produto.nome}</Text>
            <Text style={Style.cardText} >{produto.preco}</Text>
            <Text style={Style.cardText} >{produto.descricao}</Text>
            <Image source={{uri:produto.foto} } 
             style={Style.image}   />
            <Button title="Excluir" 
            onPress={()=>{Excluir(produto.id)}}/>  
            
        </View>
    )

}

export default ItemProduto;