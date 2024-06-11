import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Platform, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import api from '../../service/api';

const ConsultasMedico = () => {

  const navigation = useNavigation();
  const route = useRoute();

  let [flatListConsultas, setFlatListPrConsultas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [status, setStatus] = useState(false);

  const proxConsultas = async () => {
    try {
      const response = await api.get('/medico/consultas') //esse caminho obviamente ta errado enao existe

        .catch(function (error) {

          if (error.response) {

            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

          } else if (error.resquest) {

            if ((error.resquest._response).include('Failed')) {
              console.log('Erro ao conectar com API');

            }
          } else {

            console.log(error.message);

          }

          console.log(error.config);

        });
      if (response != undefined) {
        if (response.data.length > 0) {

          let temp = [];
          for (let i = 0; i < response.data.length; i++) {
            temp.push(response.data[i]);

          }
          setFlatListPrConsultas(temp);
          temp = [];

        } else {
          setAlertMessage('Nenhum registro foi localizado!')
          exibeAlert();
          return;
        }
      }

    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      proxConsultas();
    }, [refresh])
  )

  let listViewItem = (item) => {
    return (
      <View style={styles.modeloCard}>

        <Text style={styles.textValue}>{item.tbl_paciente_id}</Text>

        <Text style={styles.textHeader}>Data da consulta:</Text>
        <Text style={styles.textValue}>{item.data}</Text>

        <Text style={styles.textHeader}>Horário:</Text>
        <Text style={styles.textValue}>{item.hora}</Text>

        <Text style={styles.textHeader}>Status da consulta:</Text>
        <Text style={styles.textValue}>{item.status}</Text>

      </View>
    )
  }

  return (

    <SafeAreaView style={styles.androidSafeArea}>

      <ScrollView>

        <View style={styles.container}>

          <Text style={styles.title}>Proximas consultas:</Text>

          <View style={{ flex: 1 }}>
            <FlatList
              style={{ marginTop: 20 }}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              data={flatListConsultas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listViewItem(item)}
            />
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default ConsultasMedico;

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    height: 'auto'
  },
  title: {
    marginTop: 40,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 30
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#243434',
    paddingTop: 4
  },
  modeloCard: {
    backgroundColor: 'purple',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    elevation: 8,
  },
  textValue: {
    color: 'white',
    fontSize: 18
  }
});


