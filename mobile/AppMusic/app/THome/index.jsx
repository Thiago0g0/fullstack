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
                    <Feather name="settings" size={24} color="blue" />
                </Link>
            </View>
            <Link href="/Tplaylist" style={styles.navButtonContainer}>
                <View style={styles.navButton}>
                    <Text style={styles.navButtonText}>Criar playlist</Text>
                </View>
            </Link>

            <Text style={styles.sectionTitle}>Gêneros de músicas</Text>
            <View style={styles.musicGrid}>
                <Text style={styles.musicItemText}>Rock</Text>
                <Text style={styles.musicItemText}>Rap</Text>
                <Text style={styles.musicItemText}>K-Pop</Text>
                <Text style={styles.musicItemText}>Jazz</Text>
                <Text style={styles.musicItemText}>Hip-Hop</Text>
                <Text style={styles.musicItemText}>Reggae</Text>
                <Text style={styles.musicItemText}>MPB</Text>
                <Text style={styles.musicItemText}>Metal</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#E3F2FD',
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
        color: '#0D47A1',
        textAlign: 'center', 
        width: '100%', 
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#1E88E5',
    },
    navButtonContainer: {
        alignItems: 'center',  
        marginBottom: 20,
        width: '100%',  
    },
    navButton: {
        backgroundColor: '#1E88E5',
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
        color: '#1565C0',
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
        color: '#FFFFFF',
        backgroundColor: '#0D47A1',
        borderRadius: 8,
        marginBottom: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#1565C0',
    },
});

export default HomeScreen;