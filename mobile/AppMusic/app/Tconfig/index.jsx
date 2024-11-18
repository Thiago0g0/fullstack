import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AntDesign href="" name="arrowleft" size={24} color="blue" style={styles.topLeftImage} />
      <Text style={styles.header}>Configurações</Text>

      <TouchableOpacity href='/Tconfig/Perfil/Index' style={styles.option}>
      <FontAwesome6 name="user" size={24} color="blue" />        
      <Text style={styles.optionText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
      <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="blue" />
        <Text style={styles.optionText}>Novidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
      <Octicons name="bell" size={24} color="blue" />        
      <Text style={styles.optionText}>Notificação</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option}>
      <MaterialIcons name="lock-outline" size={24} color="blue" />
        <Text style={styles.optionText}>Privacidade</Text>
      </TouchableOpacity>

      

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', 
  },
  topLeftImage: {
    position: 'absolute',
    top: 26,
    left: 20,
    width: 30,
    height: 30,
    tintColor: '#0D47A1', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#0D47A1', 
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#90CAF9', 
    backgroundColor: '#BBDEFB', 
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#0D47A1', 
    fontWeight: '600',
  },
});

export default SettingsScreen;
