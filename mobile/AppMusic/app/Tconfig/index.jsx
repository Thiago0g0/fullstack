import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image, Link } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Image href="/Thome" source={require("../../assets/images/seta.png")} style={styles.topLeftImage} />
      <Text style={styles.header}>Configurações</Text>
      <TouchableOpacity href='/Tconfig/Perfil/Index' style={styles.option}>
        <Icon name="person-outline" size={24} color="#FFF" />
        <Text style={styles.optionText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="notifications-outline" size={24} color="#FFF" />
        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="lock-closed-outline" size={24} color="#FFF" />
        <Text style={styles.optionText}>Privacidade</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  topLeftImage: {
    position: 'absolute',
    top: 20, 
    left: 20, 
    width: 30, 
    height: 35, 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFF',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#FFF',
  },
});

export default SettingsScreen;