import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../service/api';

const Dados = () => {

  const [Nome, setNome] = useState();
  const [Cpf, setCpf] = useState();
  const [DataNasc, setDataNasc] = useState();
  const [Genero, setGenero] = useState();
  const [Email, setEmail] = useState();
  const [Logradouro, setLogradouro] = useState();
  const [Bairro, setBairro] = useState();
  const [Estado, setEstado] = useState();
  const [NumeroResidencia, setNumeroResidencia] = useState();
  const [Complemento, setComplemento] = useState();
  const [Cep, setCep] = useState();
  const [Telefone, setTelefone] = useState();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [isUpdate, setisUpdate] = useState(false);

  let [flatListPacientes, serFlatListPacientes] = useState([]);

  // const listarPacientes = async (id) => {
  //   try {
  //     const response = await api.get('/paciente/infos')
  //       .catch(function (error) {
  //         if (error.response) {
  //           console.log(error.response.data);
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
  //         } else if (error.request) {
  //           if ((error.request._response).includes('Failed')) {
  //             console.log('Erro ao conecta coma API');
  //           }
  //         } else {
  //           console.log(error.message);
  //         }
  //         console.log(error.config)
  //       });
  //     if (response != undefined) {
  //       if (response.data.length > 0) {
  //         // console.log(response.data)
  //         let temp = [];
  //         for (let i = 0; i < response.data.length; i++) {
  //           temp.push(response.data[i]);
  //           serFlatListPacientes(temp);
  //           // console.log(temp)
  //         }
  //         temp = [];
  //       } else {
  //         setAlertMessage('Nenhum registro foi localizado!')
  //         exibeAlert();
  //         return;
  //       }
  //     }

  //   } catch (error) {
  //     throw error;
  //   }
  // }

  //let listViewPaciente = ()

  return (
    <SafeAreaView style={styles.safeArea}>

      <Text style={styles.subtitulo3}>Dados cadastrais</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* {[
          { label: "Nome completo", key: "Nome" },
          { label: "Contato", key: "Telefone" },
          { label: "C.P.F.", key: "CPF" },
          { label: "Data de nascimento", key: "DataNascimento" },
          { label: "Gênero", key: "Genero" },
          { label: "Email", key: "Email" },
          { label: "Endereço", key: "Logradouro" },
          { label: "Bairro", key: "Bairro" },
          { label: "Número da residência", key: "NumeroResidencia" },
          { label: "Complemento", key: "Complemento" },
          { label: "C.E.P.", key: "CEP" },
          { label: "Estado", key: "Estado" }
        ].map((listarPacientes) => (

          <View style={styles.sep} key={listarPacientes.key}>

            <Text style={styles.label}>{listarPacientes.label}:</Text>
            <TextInput editable={false} style={styles.campos} />

          </View>
        ))} */}

        

      </ScrollView>
    </SafeAreaView>
  );

}
export default Dados;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20
  },
  subtitulo3: {
    color: '#243434',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  label: {
    fontSize: 18,
    color: '#4a4a4a',
    fontWeight: 'bold',
    marginBottom: 5
  },
  campos: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  sep: {
    width: '90%',
    marginBottom: 15,
    marginLeft: 20,
    alignSelf: 'flex-start'
  }
});
