/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import MenuUtama from './Component/MenuUtama';
import MenuGame from './Component/MenuGame';
import MenuBerita from './Component/MenuBerita';
import MenuHits from './Component/MenuHits';

const Header = () => {
  return(
    <View>
      <Text>Halaman Header</Text>
    </View>
  )
}

const Footer = () => {
  var joo = "@jooprima";
  return(
    <View>
      <Text>Halaman Footer {joo}</Text>
    </View>
  )
}

export default class App extends Component {
  render(){
    return (
      <View>
        <StatusBar backgroundColor="green" />
        <Header />
        <MenuUtama />
        <MenuGame />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
    );
  };
}
  