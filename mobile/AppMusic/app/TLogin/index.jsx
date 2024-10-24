import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsenha from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [showSenha, setShowSenha] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.password) {
            Alert.alert("Todos os campos devem ser preenchidos");
            return;
        }
        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro na solicitação: ' + response.statusText);
            }

            setMensagem("Cadastro realizado com sucesso!");
            setFormData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            setMensagem("Houve um erro ao realizar o cadastro.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome..."
                    value={formData.name}
                    onChangeText={(text) => handleChange('name', text)}
                />
                <Icon style={styles.icon} name='user' size={25} color="#000" />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    placeholder="Digite o email..."
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
                <Icon style={styles.icon} name='mail' size={25} color="#000" />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a senha..."
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry={!showSenha}
                />
                <Pressable onPress={() => setShowSenha(!showSenha)}>
                    <Iconsenha name={showSenha ? 'eye-off' : 'eye'} size={25} color="#000" />
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>entrar</Text>
            </Pressable>

            <Link href="/TCadastro" style={styles.link}>
                <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
            </Link>

            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        color: '#333',
    },
    icon: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    link: {
        alignItems: 'center',
        marginBottom: 20,
    },
    linkText: {
        color: '#0000FF',
        fontSize: 16,
    },
    mensagem: {
        fontSize: 16,
        color: 'green',
        textAlign: 'center',
        marginTop: 10,
    },
});
