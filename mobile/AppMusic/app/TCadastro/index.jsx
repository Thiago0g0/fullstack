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
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
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
                    placeholder="Data de Nascimento (DD/MM/AAAA)"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senhaSegura}
                    onChangeText={setSenhaSegura}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry
                />

                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Link to='/TLogin'>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Link>
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
        padding: 20, 
        backgroundColor: '#f5f5f5',
    },
    formContainer: {
        width: '100%', 
        maxWidth: 400, 
        backgroundColor: '#fff',
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
        color: '#333',
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
        color: '#0000FF',
        fontSize: 16,
    },
});

export default Cadastro;