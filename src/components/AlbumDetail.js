import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ uniqueKey, album }) => {
  return (
    <Card>
      <Text key={uniqueKey}>{album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
