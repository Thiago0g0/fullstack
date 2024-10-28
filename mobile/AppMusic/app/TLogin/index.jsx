import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsenha from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function App() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
    });
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleChange = (nome, valor) => {
        setFormData(prevState => ({
            ...prevState,
            [nome]: valor,
        }));
    };

    const handleSubmit = async () => {
        if (!formData.nome || !formData.email || !formData.senha) {
            Alert.alert("Todos os campos devem ser preenchidos");
            return;
        }

        const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            Alert.alert("Cadastro realizado com sucesso!");
            setFormData({
                nome: '',
                email: '',
                senha: '',
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome..."
                    placeholderTextColor="#888"
                    value={formData.nome}
                    onChangeText={(text) => handleChange('nome', text)}
                />
                <Icon style={styles.icon} name='user' size={25} color="#ffffff" />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    placeholder="Digite o email..."
                    placeholderTextColor="#888"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
                <Icon style={styles.icon} name='mail' size={25} color="#ffffff" />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a senha..."
                    placeholderTextColor="#888"
                    value={formData.senha}
                    onChangeText={(text) => handleChange('senha', text)}
                    secureTextEntry={!mostrarSenha}
                />
                <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
                    <Iconsenha name={mostrarSenha ? 'eye-off' : 'eye'} size={25} color="#ffffff" />
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <Link href="/THome" style={styles.button}>
                    <Text style={styles.buttonText}>Logar</Text>
                </Link>
            </View>

            <Link href="/TCadastro" style={styles.link}>
                <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#ffffff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        color: '#ffffff',
    },
    icon: {
        marginLeft: 10,
    },
    buttonContainer: {
        alignItems: 'center', 
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#403d39',
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%', 
        textAlign: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        alignItems: 'center',
        marginBottom: 20,
    },
    linkText: {
        color: 'white',
        fontSize: 16,
    },
});
