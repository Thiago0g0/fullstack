import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const artist = {
        name: 'KISS',
        songs: [
            'I Was Made For Lovin You',
        ],
    };

    const renderSong = ({ item }) => (
        <View style={styles.songItem}>
            <Text style={styles.songTitle}>{item}</Text>
            <TouchableOpacity
                style={styles.playButton}
                href={'/Thome/musicas/rock/play'}>
                <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://i.etsystatic.com/35560890/r/il/e5c9fa/3933805967/il_fullxfull.3933805967_jysw.jpg' }} 
                style={styles.artistPhoto} 
            />
            <Text style={styles.artistName}>{artist.name}</Text>
            <Text style={styles.sectionTitle}>Mais famosas:</Text>
            <FlatList
                data={artist.songs}
                renderItem={renderSong}
                keyExtractor={(item, index) => index.toString()}
                style={styles.songList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        padding: 20,
        alignItems: 'center',
    },
    artistPhoto: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
    },
    artistName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'flex-start',
        marginVertical: 10,
        color: '#ccc',
    },
    songList: {
        width: '100%',
    },
    songItem: {
        backgroundColor: '#333',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    songTitle: {
        fontSize: 16,
        color: '#fff',
        flex: 1, 
    },
    playButton: {
        width: 30,
        height: 30,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15, 
    },
    playButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default App;
