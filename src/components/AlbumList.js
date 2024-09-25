import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import * as data from '../../assets/albums.json';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    this.setState({ albums: data.albums });
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

const styles = StyleSheet.create({});

export default AlbumList;
