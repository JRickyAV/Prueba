import React from 'react';
import { TextInput, Stack, Button, Text } from "@react-native-material/core";
import usePiedra from '../hooks/usePiedra'
import ImagenEleccion from '../src/components/Imagenes';
import { View } from 'react-native';



const Home = () => {

   const {decisionString,cambiarDecision,setDecisionString,resultado,calcularResultadoFinal} = usePiedra() 
  return (
    <Stack>

      <Text>Piedra, papel o tijeras</Text>


      <View style={{flexDirection:'column'}}>
      <ImagenEleccion Foto={'../src/assets/images/Piedra.png'}></ImagenEleccion>
      <Button onTouchEnd={ () => cambiarDecision(0)}
      title='Piedra'></Button>
      </View>


      <View style={{flexDirection:'column'}}>
      <ImagenEleccion Foto={'../src/assets/images/Papel.png'} onPress={ () => cambiarDecision(1)}></ImagenEleccion>
      <Button onTouchEnd={ () => cambiarDecision(1)}
      title='Papel'></Button>
      </View>

      <View style={{flexDirection:'column'}}>
      <ImagenEleccion Foto={'../src/assets/images/Tijeras.png'} onTouchEnd={ () => cambiarDecision(2)}></ImagenEleccion>
      <Button onTouchEnd={ () => cambiarDecision(2)}
      title='Tijera'></Button>
      </View>

      <Text>Decisión: {decisionString}</Text>
      <Button onTouchEnd={calcularResultadoFinal} title='Jugar'
      ></Button>

      <Text>Resultado: {resultado}</Text>

    </Stack>
  );
}


export default Home;
