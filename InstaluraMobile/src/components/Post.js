/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width,
      height = Dimensions.get('screen').height;

type Props = {};
export default class App extends Component<Props> {

  render() {

      const { foto } = this.props;

      return(
          <View>
              <View style={styles.cabecalho}>
                  <Image source={require('../../resources/img/alura.jpg')}
                          style={styles.fotoDePerfil} />
                  <Text>{foto.usuario}</Text>
              </View>
              <Image source={require('../../resources/img/alura.jpg')}
                  style={styles.foto} />        
          </View>
      );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    foto: {
        width: width,
        height: height
    },
});

