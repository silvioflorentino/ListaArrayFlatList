import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, AkayaKanadaka_400Regular } from '@expo-google-fonts/akaya-kanadaka';


export default function App() {

let [fontsLoaded] = useFonts({
    AkayaKanadaka_400Regular,
  });

if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
  <View style={estilo.container}>
<Text style={estilo.titulo}> Lista de Filmes </Text>

  <FlatList 
  data={DadosFilmes}
  keyExtractor={(item)=>{item.uid.toString()}}
  renderItem={({item})=>
  <View style={estilo.blocos}>
    <View>
      <Image resizeMode={'contain'} style={estilo.img} source={{uri:item.img}} />
    </View>
    <View style={estilo.textoFilme}>
      <Text>{item.filme} </Text>
      <Text> {item.ano} </Text>
      <Text> {item.genero} </Text>

    </View>
  
  </View>
  }
  />

  </View>
 
  );
   }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    backgroundColor:'#00BFFF'
  },
  img:{
    width:55,
    height:80
  },
  blocos:{
    flexDirection: 'row',
    backgroundColor:'#87CEFA',
    width:280,
    height:80,
    marginVertical:5,
    borderRadius:5,
    marginHorizontal:5
  },
  textoFilme:{
    marginLeft: 20,
    marginVertical:10
  },
  titulo:{
    marginVertical: 20,
    fontSize:30,
    color:'red',
    fontFamily: 'AkayaKanadaka_400Regular',
  }
});

const DadosFilmes = [
  {
    uid: 1,
    filme: 'Vingadores',
    ano: '2012',
    genero: 'Ação',
    img: 'https://br.web.img3.acsta.net/pictures/19/03/15/10/35/4177435.jpg',
  },
  {
    uid: 2,
    filme: 'Harry Potter e a Pedra Filosofal',
    ano: '2001',
    genero: 'Magia',
    img:
      'https://img.elo7.com.br/product/original/2657A1E/big-poster-harry-potter-e-a-pedra-filosofal-lo01-90x60-cm-presente-geek.jpg',
  },
  {
    uid: 3,
    filme: 'Divergente',
    ano: '2014',
    genero: 'Ação',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/8e/Divergent.png',
  },
  {
    uid: 4,
    filme: 'WALL·E',
    ano: '2008',
    genero: 'Infantil/Comédia',
    img: 'https://upload.wikimedia.org/wikipedia/pt/3/30/WALL-E.jpg',
  },
  {
    uid: 5,
    filme: 'Click',
    ano: '2006',
    genero: 'Comédia',
    img: 'https://m.media-amazon.com/images/I/51qq+12klKL._AC_.jpg',
  },
  {
    uid: 6,
    filme: 'Jogos Vorazes',
    ano: '2012',
    genero: 'Ficção científica/Ação',
    img:
      'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/35/87/20039778.jpg',
  },
  {
    uid: 7,
    filme: 'DRÁCULA DE BRAM STOKER',
    ano: '1992',
    genero: 'Drama, Terror, Romance',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/4/49/Dracula_%281992%29.jpg',
  },
  {
    uid: 8,
    filme: 'Space Jam: Um Novo Legado',
    ano: '2021',
    genero: 'Comédia',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61yDSKqc7rS.jpg',
  },
  {
    uid: 9,
    filme: 'Toy Story',
    ano: '1995',
    genero: 'Aventura',
    img:
      'https://media.fstatic.com/eMaltRQoGBcZZpEM4L5i3T3ayq0=/210x312/smart/media/movies/covers/2010/12/1976bb35b69a00c294eb5decf0047db4.jpg',
  },
  {
    uid: 10,
    filme: 'Sonic',
    ano: '2020',
    genero: 'Ação/Aventura',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/9/9f/Sonic_the_Hedgehog_2019.jpg',
  },
  {
    uid: 11,
    filme: 'Homem Aranha 1',
    ano: '2002',
    genero: 'Ficção científica/Ação',
    img: 'https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg',
  },
  {
    uid: 12,
    filme: 'A Teoria de Tudo',
    ano: '2014',
    genero: 'Ficção|Drama',
    img:
      'https://br.web.img2.acsta.net/c_310_420/pictures/14/12/02/22/15/327211.jpg',
  },
  {
    uid: 13,
    filme: 'It a coisa',
    ano: '2017',
    genero: 'Terror',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/82/It_2017.jpg',
  },
  {
    uid: 14,
    filme: 'O profissional',
    ano: '1994',
    genero: 'Ação',
    img: 'https://br.web.img3.acsta.net/medias/nmedia/18/96/54/49/20474313.jpg',
  },
];


