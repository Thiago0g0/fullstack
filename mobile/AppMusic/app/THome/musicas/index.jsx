import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const songs = [
  { id: '1', title: 'KISS', source: require('../../../assets/images/kiss.png') },
  { id: '2', title: 'Charlie Brown Jr.', source: require('../../../assets/images/brown.png') },
  { id: '3', title: 'Linkin Park', source: require('../../../assets/images/park.png') },
  { id: '4', title: 'Raimundos', source: require('../../../assets/images/mundos.png') },
  { id: '5', title: 'Nickelback', source: require('../../../assets/images/back.png') },
  { id: '6', title: 'Creed', source: require('../../../assets/images/creed.png') },
  { id: '7', title: 'NX Zero', source: require('../../../assets/images/nz.png') },
  { id: '8', title: 'Green Day', source: require('../../../assets/images/day.png') },
];

export default function App() {
  const splitSongs = () => {
    const mid = Math.ceil(songs.length / 2);
    return [songs.slice(0, mid), songs.slice(mid)];
  };

  const [rowOne, rowTwo] = splitSongs();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock</Text>

      <FlatList
        data={rowOne}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity href='/Thome/musicas/rock' style={styles.card}>
            <Image source={item.source} style={styles.image} />
            <Text style={styles.songTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={rowTwo}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.source} style={styles.image} />
            <Text style={styles.songTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1A1A1A',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'white', 
  },
  card: {
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  songTitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',  
  },
});
