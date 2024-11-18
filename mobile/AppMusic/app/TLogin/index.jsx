import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsenha from 'react-native-vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';

export default function App() {
    const router = useRouter()
    const [formData, setFormData] = useState({
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
        if (!formData.email || !formData.senha) {
            alert("Todos os campos devem ser preenchidos");
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/autenticacao/login', {
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log(response.status)
            if (response.status === 405) {
                alert("email incorretos");
                return
            }

            if (response.status === 404) {
                alert("senha incorretos");
                return
            }

            if (response.status === 200) {
                router.push('/Thome')
                return
            }
        } catch (error) {
            console.error('Erro:', error);
        } 
       
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Login</Text>
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
            </View>

            <Link href="/Tcadastro" style={styles.link}>
                <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#0D47A1', 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#BBDEFB', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#64B5F6',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        color: '#0D47A1', 
    },
    icon: {
        marginLeft: 10,
        color: '#1E88E5', 
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1E88E5', 
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        alignItems: 'center',
        marginBottom: 20,
    },
    linkText: {
        color: '#0D47A1', 
        fontSize: 16,
    },
});
