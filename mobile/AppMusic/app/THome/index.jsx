import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';

const musicas = [
    { id: '1', titulo: 'Bohemian Rhapsody', genero: 'Rock', banda: 'Queen'},
    { id: '2', titulo: 'One Last Breath', genero: 'Rock', banda: 'Creed'},
    { id: '3', titulo: 'Die with A Slime', genero: 'Pop', banda: 'Lady Gaga'},
    { id: '4', titulo: 'Dormi Na Praça', genero: 'Sertanejo', banda: 'Chitãozinho & Xororó'},
    { id: '5', titulo: 'Simon Says', genero: 'Pop', banda: 'Pharoahe Monch'},
    { id: '6', titulo: 'What A Wonderful World', genero: 'Jazz Clássico'}
];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMusicas, setFilteredMusicas] = useState(musicas);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = musicas.filter(musica =>
            musica.titulo.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMusicas(filtered);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Pesquisa de Músicas</Text>
                <Link href="/TaddMusica" style={styles.addButton}>
                    <Image
                        source={require('../../assets/images/mais.png')} 
                        style={styles.addIcon}
                    />
                </Link>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Digite o título da música..."
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={handleSearch}
            />
        
            <FlatList
                data={filteredMusicas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image
                            style={styles.img}
                            source={{ uri: item.src }}
                        />
                        <Text style={styles.itemText}>{item.titulo} - {item.genero} - {item.banda}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma música encontrada.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    addButton: {
        padding: 10,
    },
    addIcon: {
        width: 30, 
        height: 30, 
    },
    input: {
        height: 40,
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 11,
        color: '#ffffff',
        marginBottom: 15,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    itemText: {
        color: '#ffffff',
    },
    emptyText: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Home;
