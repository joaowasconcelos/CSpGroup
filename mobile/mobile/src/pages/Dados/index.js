import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../service/api';

const Dados = () => {
  const [Nome, setNome] = useState('');
  const [Cpf, setCpf] = useState('');
  const [DataNasc, setDataNasc] = useState('');
  const [Genero, setGenero] = useState('');
  const [Email, setEmail] = useState('');
  const [Logradouro, setLogradouro] = useState('');
  const [Bairro, setBairro] = useState('');
  const [Estado, setEstado] = useState('');
  const [NumeroResidencia, setNumeroResidencia] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [Cep, setCep] = useState('');
  const [Telefone, setTelefone] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [flatListPacientes, setFlatListPacientes] = useState([]);

  useEffect(() => {
    listarPacientes();
  }, []);

  const listarPacientes = async () => {
    try {
      const response = await api.get("/paciente/infos");
      if (response.data.length > 0) {
        const paciente = response.data[0]; // Assuming you want to use the first patient data
        setNome(paciente.Nome);
        setCpf(paciente.Cpf);
        setDataNasc(paciente.DataNasc);
        setGenero(paciente.Genero);
        setEmail(paciente.Email);
        setLogradouro(paciente.Logradouro);
        setBairro(paciente.Bairro);
        setEstado(paciente.Estado);
        setNumeroResidencia(paciente.NumeroResidencia);
        setComplemento(paciente.Complemento);
        setCep(paciente.Cep);
        setTelefone(paciente.Telefone);
      } else {
        setAlertMessage('Nenhum registro foi localizado!');
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        if ((error.request._response).includes('Failed')) {
          console.log('Erro ao conectar com a API');
        }
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.subtitulo3}>Dados cadastrais</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.sep}>
          <Text style={styles.label}>Nome completo:</Text>
          <TextInput editable={false} style={styles.campos} value={Nome} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Contato:</Text>
          <TextInput editable={false} style={styles.campos} value={Telefone} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>C.P.F.:</Text>
          <TextInput editable={false} style={styles.campos} value={Cpf} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Data de nascimento:</Text>
          <TextInput editable={false} style={styles.campos} value={DataNasc} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Gênero:</Text>
          <TextInput editable={false} style={styles.campos} value={Genero} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Email:</Text>
          <TextInput editable={false} style={styles.campos} value={Email} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Endereço:</Text>
          <TextInput editable={false} style={styles.campos} value={Logradouro} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Bairro:</Text>
          <TextInput editable={false} style={styles.campos} value={Bairro} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Número da residência:</Text>
          <TextInput editable={false} style={styles.campos} value={NumeroResidencia} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Complemento:</Text>
          <TextInput editable={false} style={styles.campos} value={Complemento} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>C.E.P.:</Text>
          <TextInput editable={false} style={styles.campos} value={Cep} />
        </View>

        <View style={styles.sep}>
          <Text style={styles.label}>Estado:</Text>
          <TextInput editable={false} style={styles.campos} value={Estado} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  subtitulo3: {
    color: '#243434',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#4a4a4a',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  campos: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  sep: {
    width: '90%',
    marginBottom: 15,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
});

export default Dados;
