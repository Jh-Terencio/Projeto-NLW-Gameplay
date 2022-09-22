import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';//Biblioteca de fontes 
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';//Biblioteca que não permite a abertura do app até x condição ser verdadeira linha 19

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){ //criamos uma constante para caso as fontes não tenha sido carregadas o app não termine de carregar
    return <AppLoading/>
  }

  return(
    /*Como o return so pode retornar 1 unica coisa 
    usamos esse <>, chamado de fragment, para retornar
    mais de uma coisa*/ 
    <Background>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Home/>
    </Background>
  );
}

