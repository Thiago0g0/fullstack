import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Spotfake</Text>
                <Link href="/Tconfig">
                    <Feather name="settings" size={24} color="white" />
                </Link>
            </View>

            <Link href="/Tplaylist" style={styles.navButtonContainer}>
                <View style={styles.navButton}>
                    <Text style={styles.navButtonText}>Criar playlist</Text>
                </View>
            </Link>

            <Text style={styles.sectionTitle}>Gêneros de músicas</Text>
            <ScrollView contentContainerStyle={styles.musicGrid} nestedScrollEnabled>
                <Text href='/Thome/musicas' style={styles.musicItemText}>Rock</Text>
                <Text style={styles.musicItemText}>Rap</Text>
                <Text style={styles.musicItemText}>K-Pop</Text>
                <Text style={styles.musicItemText}>Jazz</Text>
                <Text style={styles.musicItemText}>Hip-Hop</Text>
                <Text style={styles.musicItemText}>Reggae</Text>
                <Text style={styles.musicItemText}>MPB</Text>
                <Text style={styles.musicItemText}>Metal</Text>
                <Text style={styles.musicItemText}>Pop</Text>
                <Text style={styles.musicItemText}>Blues</Text>
                <Text style={styles.musicItemText}>Eletrônica</Text>
                <Text style={styles.musicItemText}>Clássica</Text>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#121212',  
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',  
        textAlign: 'center',
        width: '100%',
    },
    navButtonContainer: {
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    navButton: {
        backgroundColor: '#333333', 
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: '100%',
    },
    navButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',  
        marginBottom: 10,
        textAlign: 'center',
    },
    musicGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    musicItemText: {
        width: '48%',
        height: 90,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#121212',  
        backgroundColor: '#FFFFFF', 
        borderRadius: 8,
        marginBottom: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#121212',  
    },
});

export default HomeScreen;
