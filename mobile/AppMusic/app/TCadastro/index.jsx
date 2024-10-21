// TELA DE CADASTRO

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { Link } from '@react-navigation/native'; 

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Cadastro com:', username, email, password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Link to='/TLogin'><Text style={styles.buttonText}>Cadastrar</Text></Link>
                </Pressable>
                
                <Link to="/TLogin" style={styles.link}>
                    <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 20,
    },
    formContainer: {
        width: '40%',
        backgroundColor: '',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        flex: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkText: {
        color: '#',
    },
});

export default Cadastro;