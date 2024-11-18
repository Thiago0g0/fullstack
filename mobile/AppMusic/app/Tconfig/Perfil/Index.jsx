import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const [imageUri, setImageUri] = useState('');
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    const handlePasswordChange = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios!');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Erro', 'A nova senha não coincidem!');
            return;
        }

        Alert.alert('Sucesso', 'Senha alterada com sucesso!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setIsChangingPassword(false);
    };

    const togglePasswordChange = () => {
        setIsChangingPassword(!isChangingPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={require('../../../assets/images/seta.png')} style={styles.topLeftIcon} />
                <TouchableOpacity onPress={pickImage}>
                    <Image source={imageUri ? { uri: imageUri } : require('../../../assets/images/profile.png')} style={styles.profileImage} />
                </TouchableOpacity>

                <Text style={styles.profileName}>Nome do Usuário</Text>
                <TouchableOpacity style={styles.button} onPress={togglePasswordChange}>
                    <Text style={styles.buttonText}>Mudar senha</Text>
                </TouchableOpacity>

                {isChangingPassword && (
                    <View style={styles.passwordChangeSection}>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha atual"
                            secureTextEntry
                            value={currentPassword}
                            onChangeText={setCurrentPassword}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nova senha"
                            secureTextEntry
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar nova senha"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
                            <Text style={styles.buttonText}>Salvar nova senha</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
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
        tintColor: '#1976D2',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#42A5F5',
    },
    profileName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0D47A1',
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 8,
        shadowColor: '#000',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    passwordChangeSection: {
        marginTop: 20,
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
});

export default ProfileScreen;