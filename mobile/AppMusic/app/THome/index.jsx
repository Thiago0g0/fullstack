import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Music</Text>
                <Link href="/">
                    <Feather name="settings" size={24} color="white" />
                </Link>
            </View>

            <Link href="/" style={styles.navButton}>
                <Text style={styles.navButtonText}>Criar playlist</Text>
            </Link>

            <Text style={styles.sectionTitle}>Gêneros de músicas</Text>
            <View style={styles.musicGrid}>
                <Image source={require('../../assets/images/spot.png')} style={styles.musicItem} />
                <Image source={require('../../assets/images/spot.png')} style={styles.musicItem} />
                <Image source={require('../../assets/images/spot.png')} style={styles.musicItem} />
                <Image source={require('../../assets/images/spot.png')} style={styles.musicItem} />
                <Image source={require('../../assets/images/spot.png')} style={styles.musicItem} />
                <Image source={require('../../assets/images/spot.png')} style={styles.musicItem} />
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#121212',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    navButton: {
        backgroundColor: '#403d39',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    navButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    musicGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    musicItem: {
        width: '48%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#333333',
        marginBottom: 10,
    },
});

export default HomeScreen;
