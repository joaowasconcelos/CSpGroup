import React from 'react';
import { SafeAreaView, ScrollView, Platform, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Consultas = () => {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.androidSafeArea}>

      <View style={styles.barraPerfil}>

        <Text style={styles.textHeader}>Bem vindo!</Text>

        <FontAwesome name='user' size={35} color={'#243434'} onPress={() => navigation.navigate('Dados')} />

      </View>

      <ScrollView>

        <View style={styles.container}>

          <Text>Home Screen</Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default Consultas;

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 897
  },
  subtitulo3: {
    color: '#007c7c',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 172
  },
  barraPerfil: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    padding: 10,
    backgroundColor: '#f1f1f1'
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#243434',
    paddingTop: 4
  }
});


// {/* <Pressable
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed ? '#b2d8d8' : '#004c4c',
//             width: 150,
//             height: 50,
//             justifyContent: 'center',
//             borderRadius: 10,
//             alignItems: 'center',
//             marginTop: 200,
//             marginBottom: 10
//           },
//         ]}
//         onPress={() => navigation.navigate('Dados')}
//       >
//         <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#fafafa' }}>Dados cadastrais</Text>

//       </Pressable> */}