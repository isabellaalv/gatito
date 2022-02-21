import React from "react";
import { View, Text } from 'react-native'
import estilo from "../Botao/estilo";
import Botao from "../Botao/Index";
import estilos  from "./EstiloCarrinho";

export default function StatusCarrinho ({total}) {
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>Total do carrinho: </Text>
            <Text style={estilos.valor}>
            {
                Intl.NumberFormat('pt-Br', {
                    style: 'currency', currency: 'BRL'
                }).format(total)
            }
            </Text>
        </View>
        <View style={estilo.botao}>
            <Botao valor='Concluir pedido' invertido />
        </View>
    </View>
}