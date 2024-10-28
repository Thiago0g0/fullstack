import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [genero, setGenero] = useState('');
  const [duracao, setDuracao] = useState('');
  const [link, setLink] = useState('');
  const [musicas, setMusicas] = useState([]);
  const [busca, setBusca] = useState('');
  const [musicasFiltradas, setMusicasFiltradas] = useState([]);

  useEffect(() => {
    const carregarMusicas = async () => {
      const musicasArmazenadas = await AsyncStorage.getItem('playlist');
      if (musicasArmazenadas) setMusicas(JSON.parse(musicasArmazenadas));
    };
    carregarMusicas();
  }, []);

  useEffect(() => {
    if (busca) {
      const resultados = musicas.filter((musica) =>
        musica.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        musica.descricao.toLowerCase().includes(busca.toLowerCase()) ||
        (musica.genero && musica.genero.toLowerCase().includes(busca.toLowerCase()))
      );
      setMusicasFiltradas(resultados);
    } else {
      setMusicasFiltradas(musicas);
    }
  }, [busca, musicas]);

  const adicionarMusica = async () => {
    if (!titulo || !descricao || !genero || !duracao || !link) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de adicionar a música.');
      return;
    }

    const novaMusica = {
      id: Date.now().toString(),
      titulo,
      descricao,
      genero,
      duracao,
      link,
    };
    const musicasAtualizadas = [...musicas, novaMusica];
    await AsyncStorage.setItem('playlist', JSON.stringify(musicasAtualizadas));
    setMusicas(musicasAtualizadas);
    setTitulo('');
    setDescricao('');
    setGenero('');
    setDuracao('');
    setLink('');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Músicas</Text>

      <TextInput
        style={estilos.input}
        placeholder="Buscar música"
        placeholderTextColor="#888"
        value={busca}
        onChangeText={setBusca}
      />

      <TextInput
        style={estilos.input}
        placeholder="Título"
        placeholderTextColor="#888"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={estilos.input}
        placeholder="Descrição"
        placeholderTextColor="#888"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={estilos.input}
        placeholder="Gênero"
        placeholderTextColor="#888"
        value={genero}
        onChangeText={setGenero}
      />
      <TextInput
        style={estilos.input}
        placeholder="Duração"
        placeholderTextColor="#888"
        value={duracao}
        onChangeText={setDuracao}
      />
      <TextInput
        style={estilos.input}
        placeholder="Link"
        placeholderTextColor="#888"
        value={link}
        onChangeText={setLink}
      />

      <Pressable style={estilos.botao} onPress={adicionarMusica}>
        <Text style={estilos.textoBotao}>Adicionar música à playlist</Text>
      </Pressable>

      <FlatList
        data={musicasFiltradas}
        renderItem={({ item }) => (
          <View style={estilos.musicaContainer}>
            <Text style={estilos.musicaTitulo}>{item.titulo}</Text>
            <Text style={estilos.descricao}>Descrição: {item.descricao}</Text>
            <Text style={estilos.descricao}>Gênero: {item.genero}</Text>
            <Text style={estilos.descricao}>Duração: {item.duracao}</Text>
            <Text style={estilos.descricao}>Link: {item.link}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: 15,
  },
  botao: {
    backgroundColor: '#403d39',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#222',
    color: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  musicaContainer: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  musicaTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
  descricao: {
    textAlign: 'center',
    fontSize: 14,
    color: '#cccccc',
    marginTop: 5,
  },
});

export default App;
