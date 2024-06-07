import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../service/api';

//import {obterConexaoDoPool} from ('../../../../../desktop/src/config/db');

const Dados = () => {

  const [,] = useState();
  const [,] = useState();
  const [,] = useState();
  const [,] = useState();

  const paciente = async () => {

  }






  return (
    <SafeAreaView style={styles.safeArea}>

      <Text style={styles.subtitulo3}>Dados cadastrais</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {[
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
        ].map((field) => (

          <View style={styles.sep} key={field.key}>

            <Text style={styles.label}>{field.label}:</Text>
            <TextInput editable={false} style={styles.campos} />

          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

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
