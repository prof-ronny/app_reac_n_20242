import Style from "@/app/Styles/Default";
import { Text, View } from "react-native";

function ItemProduto({produto}: {produto:{nome:string, preco:number} } ){
    console.log(produto)
    
    return (
        <View style={Style.card} >
            <Text style={Style.cardText} >{produto.nome}</Text>
            <Text style={Style.cardText} >{produto.preco}</Text>
        </View>
    )

}

export default ItemProduto;