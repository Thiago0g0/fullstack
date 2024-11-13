import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { Link } from '@react-navigation/native'; 

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senhaSegura, setSenhaSegura] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = () => {
        if (senhaSegura !== confirmarSenha) {
            console.log('As senhas não coincidem');
            return;
        }
        console.log('Cadastro com:', {
            nome,
            sobrenome,
            email,
            senha: senhaSegura,
            dataNascimento,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Cadastro</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                    placeholderTextColor="#aaaaaa" 
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                    placeholderTextColor="#aaaaaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor="#aaaaaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento (DD/MM/AAAA)"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                    placeholderTextColor="#aaaaaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senhaSegura}
                    onChangeText={setSenhaSegura}
                    secureTextEntry
                    placeholderTextColor="#aaaaaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry
                    placeholderTextColor="#aaaaaa"
                />

                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Link to='/Tlogin'>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Link>
                </Pressable>

                <Link to='/Tlogin' style={styles.link}>
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
        padding: 20, 
        backgroundColor: '#121212', 
    },
    formContainer: {
        width: '100%', 
        maxWidth: 400, 
        backgroundColor: '#1e1e1e', 
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#ffffff', 
    },
    input: {
        height: 40,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#333333', 
        color: '#ffffff', 
    },
    button: {
        backgroundColor: '#403d39', 
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkText: {
        color: 'white', 
        fontSize: 16,
    },
});

export default Cadastro;
