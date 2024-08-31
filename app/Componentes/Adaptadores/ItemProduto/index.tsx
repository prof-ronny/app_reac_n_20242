import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import React from "react";

import { Text, View, Image } from "react-native";

interface PropProd{
    produto:Produto,

}

const ItemProduto:React.FC<PropProd> = ( {produto})=> {
    
    console.log(produto)
    
    return (
        <View style={Style.card} >
            <Text style={Style.cardText} >{produto.nome}</Text>
            <Text style={Style.cardText} >{produto.preco}</Text>
            <Image source={{uri:produto.foto} } 
             style={Style.image}   />
            
        </View>
    )

}

export default ItemProduto;