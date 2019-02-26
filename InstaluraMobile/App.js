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
  Dimensions,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

type Props = {};
export default class App extends Component<Props> {
  render() {

    const fotos = [
        {id: 1, usuario: 'rafael'},
        {id: 2, usuario: 'alberto'},
        {id: 3, usuario: 'vitor'}
    ];

    return (
      <FlatList style={{marginTop: 20}}
          keyExtractor={item => String(item.id)}
          data={fotos}
          renderItem={ ({item}) =>
            <Post foto={item}/>
          }
      />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    }
});

