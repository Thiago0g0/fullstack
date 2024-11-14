import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Link } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            const storedImage = await AsyncStorage.getItem('profileImage');
            if (storedImage) {
                setImageUri(storedImage);
            }
        };
        loadImage();
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
            await AsyncStorage.setItem('profileImage', newUri); 
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image href="/Tconfig" source={require('../../../assets/images/seta.png')} style={styles.topLeftIcon} />
                <TouchableOpacity onPress={pickImage}>
                    <Image source={imageUri ? { uri: imageUri } : require('../../../assets/images/profile.png')} style={styles.profileImage} />
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
        position: 'relative', 
    },
    topLeftIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 30,
        height: 30,
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