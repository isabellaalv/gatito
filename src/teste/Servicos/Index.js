import React from 'react';
import { SafeAreaView , Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Item from './Item/Index';

const servicos = [
    {
        id: 1 ,
        nome: "Banho" ,
        preco: 79.9 ,
        descricao: "Não de banho no seu gato! Mas se precisar nós damos." ,
    },
    {
        id: 2 ,
        nome: "Vacina V4" ,
        preco: 89.9 ,
        descricao: "Uma dose da vacinha V4. Seu gato precisa de duas." ,
    },
    {
        id: 3 ,
        nome: "Vacina antirrábica" ,
        preco: 99.9 ,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de duas." ,
    }
];

export default function Servicos(){
    return <SafeAreaView>
        <StatusBar />
        <Text>Servicos!</Text>
        <FlatList
        data={servicos}
        renderItem={({item}) =>  <Item {...item}/> }
        keyExtractor={(id) => String (id)}
        />

    </SafeAreaView>
}