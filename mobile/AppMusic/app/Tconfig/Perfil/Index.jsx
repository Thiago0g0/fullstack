import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const [imageUri, setImageUri] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
    const loadImages = async () => {
    const storedItems = await AsyncStorage.getItem('images');
        if (storedItems) {
    const parsedItems = JSON.parse(storedItems);
            setItems(parsedItems);
        if (parsedItems.length > 0) {
            setImageUri(parsedItems[0].imageUri);
    }
        }
        };
        loadImages();
    }, []);

    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const newUri = result.assets[0].uri;
            setImageUri(newUri);
            addImage(newUri);
        }
    };

    const addImage = async (newUri) => {
        const newItem = { id: Date.now().toString(), imageUri: newUri, title: 'Nome do Usuário', description: 'Descrição' };
        const updatedItems = [...items, newItem];
        await AsyncStorage.setItem('images', JSON.stringify(updatedItems));
        setItems(updatedItems);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={imageUri ? { uri: imageUri } : require('../../../assets/images/perfil.png')} style={styles.profileImage} />
                </TouchableOpacity>
                <Text style={styles.profileName}>Nome do Usuário</Text>
            </View>
            <View style={styles.separator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 12,
        borderWidth: 0,
    },
    profileName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 16,
    },
});

export default ProfileScreen;