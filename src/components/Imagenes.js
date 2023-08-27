import React, { Component } from 'react'
import { Image } from 'react-native'
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imagen: {
    width: 75,
    height:75,
    flexDirection: 'row', // Los elementos se alinearán en fila
    justifyContent: 'center',
    alignItems: 'center', // Alinea verticalmente en el centro
  }
});

function ImagenEleccion({ Foto }) {
  return (
    <Image source={{ uri: Foto }}
      style={styles.imagen} />
  );
}
export default ImagenEleccion