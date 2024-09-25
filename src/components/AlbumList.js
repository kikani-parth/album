import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as data from '../../assets/albums.json';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    this.setState({ albums: data.albums });
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <Text key={album.title}>{album.title}</Text>
    ));
  }

  render() {
    console.log(this.state);

    return <View>{this.renderAlbums()}</View>;
  }
}

const styles = StyleSheet.create({});

export default AlbumList;
