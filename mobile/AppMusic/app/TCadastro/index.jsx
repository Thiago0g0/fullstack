import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { Link } from '@react-navigation/native'; 
import { useRouter } from 'expo-router';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senhaSegura, setSenhaSegura] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const router = useRouter()

    const handleSubmit = async() => {
        if (senhaSegura !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }
        const response = await fetch('http://localhost:8000/autenticacao/registro', {
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    senha: senhaSegura,
                    dataNascimento: dataNascimento
                })
            });
            try {
                if (response.status === 406) {
                alert('prencha todos os campos')
                return
            }

            if (response.status === 400) {
                alert('email ja existente')
                return
            }

            if (response.status === 201) {
                return router.push('/Thome')
            }
            } catch (error) {
                console.error(error)
                return
            }
            
        
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

                        <Text style={styles.buttonText}>Cadastrar</Text>
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
        backgroundColor: '#E3F2FD', 
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#BBDEFB', 
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#64B5F6', 
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#0D47A1', 
    },
    input: {
        height: 40,
        borderColor: '#64B5F6', 
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#E3F2FD', 
        color: '#0D47A1', 
    },
    button: {
        backgroundColor: '#1E88E5', 
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkText: {
        color: '#1565C0', 
        fontSize: 16,
    },
});

export default Cadastro;
