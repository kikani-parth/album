import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

const AlbumDetail = ({ uniqueKey, album }) => {
  //   const thumbnail_image = require('../assets/', album.thumbnail_image);
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title} key={uniqueKey}>
            {album.title}
          </Text>
          <Text key={uniqueKey}>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.image} source={{ uri: album.image }} />
      </CardSection>

      <CardSection>
        <CustomButton
          title="Listen on YouTube"
          onPress={() => Linking.openURL(album.url)}
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
