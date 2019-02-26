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
  TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width,
      height = Dimensions.get('screen').height;

type Props = {};
export default class Post extends Component<Props> {

  constructor(props) {
    super(props)
  
    this.state = {
       foto: this.props.foto
    };
  };

  like = () => {

    const fotoAtualizada = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada
    };

    this.setState({ foto: fotoAtualizada });
  }
  

  carregaIcone = likeada => likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png');

  exibeLikes = likers => likers.length > 0 ? <Text style={styles.likes}>{likers.length} curtida{likers.length > 1 ? `s`  : ``}</Text> : null;

  exibeLegenda = foto => {

    return foto.comentario !== '' ?
    <View style={styles.comentario}>
      <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
      <Text>{foto.comentario}</Text>                
    </View> : null
  }

  render() {

      const { foto } = this.state;        

      return(
          <View>
              <View style={styles.cabecalho}>
                  <Image source={{uri: foto.urlPerfil}}
                          style={styles.fotoDePerfil} />
                  <Text>{foto.loginUsuario}</Text>
              </View>

              <Image source={{uri: foto.urlFoto}}
                  style={styles.foto} />  

             <View style={styles.rodape}>
              <TouchableOpacity onPress={this.like}>
    
                    <Image style={styles.botaoLike} 
                      source={this.carregaIcone(foto.likeada)} />    
                </TouchableOpacity>                
                
                {this.exibeLikes(foto.likers)}

                {this.exibeLegenda(foto)}
              </View>
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
    botaoLike: {
      marginBottom: 10,
      height: 40,
      width: 40
    },
    rodape: {
      margin: 10
    },
    likes: {
      fontWeight: 'bold'
    },
    comentario: {
      flexDirection: 'row'
    },
    tituloComentario: {
      fontWeight: 'bold',
      marginRight: 5
    }
});

