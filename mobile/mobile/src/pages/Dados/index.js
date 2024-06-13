import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, FlatList, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../service/api';

const Dados = () => {

  const [label, setLabel] = useState();

  const logLabel = () => {
    console.log(label);
  }

  const recebeId = (id) => {
    setLabel(id);
  }

  // const [Nome, setNome] = useState('');
  // const [Cpf, setCpf] = useState('');
  // const [DataNasc, setDataNasc] = useState('');
  // const [Genero, setGenero] = useState('');
  // const [Email, setEmail] = useState('');
  // const [Logradouro, setLogradouro] = useState('');
  // const [Bairro, setBairro] = useState('');
  // const [Estado, setEstado] = useState('');
  // const [NumeroResidencia, setNumeroResidencia] = useState('');
  // const [Complemento, setComplemento] = useState('');
  // const [Cep, setCep] = useState('');
  // const [Telefone, setTelefone] = useState('');

  // const [showAlert, setShowAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState('');

  // const [isUpdate, setisUpdate] = useState(false);

  const getPaciente = async (id) => {
    console.log('uioiuyuj')
    try {
      const response = await api.get(`/paciente/infos/${id}`)
      console.log(response)

        .catch(function (error) {

          if (error.response) {

            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

          } else if (error.request) {

            if ((error.request._response).includes('Failed')) {
              console.log('Erro ao conectar a API.');
            }

          } else {

            console.log('Erro', error.message);

          }

        });

    } catch (error) {

      console.error(error)

    }
  }








  // let [flatListPacientes, serFlatListPacientes] = useState([]);

  return (
    <SafeAreaView style={styles.safeArea}>

      <Text style={styles.subtitulo3}>Dados cadastrais</Text>

      <TextInput
        onChangeText={recebeId}
        
      />-

      <Button
        title="Clique Aqui"
        onPress={ () => getPaciente(label)}
      />

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
        ].map((listarPacientes) => (

          <View style={styles.sep} key={listarPacientes.key}>

            <Text style={styles.label}>{listarPacientes.label}:</Text>
            <TextInput editable={false} style={styles.campos} />

          </View>
        ))}

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


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import api from '../../service/api';

// const Dados = () => {
//   const [label, setLabel] = useState('');
//   const [paciente, setPaciente] = useState({
//     Nome: '',
//     Telefone: '',
//     CPF: '',
//     DataNascimento: '',
//     Genero: '',
//     Email: '',
//     Logradouro: '',
//     Bairro: '',
//     NumeroResidencia: '',
//     Complemento: '',
//     CEP: '',
//     Estado: ''
//   });

//   const recebeId = (id) => {
//     setLabel(id);
//   }

//   const getPaciente = async (id) => {
//     console.log('Buscando paciente com ID:', id);
//     try {
//       const response = await api.get(`/paciente/infos/${id}`);
//       console.log(response.data);
//       setPaciente(response.data);  // Supondo que response.data tenha os dados do paciente
//     } catch (error) {
//       if (error.response) {
//         console.log('Error Response:', error.response.data);
//         console.log('Status:', error.response.status);
//         console.log('Headers:', error.response.headers);
//       } else if (error.request) {
//         if ((error.request._response).includes('Failed')) {
//           console.log('Erro ao conectar a API.');
//         }
//       } else {
//         console.log('Erro:', error.message);
//       }
//     }
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Text style={styles.subtitulo3}>Dados cadastrais</Text>

//       <TextInput
//         onChangeText={recebeId}
//         placeholder="Digite o ID do paciente"
//       />

//       <Button
//         title="Clique Aqui"
//         onPress={() => getPaciente(label)}
//       />

//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {[
//           { label: "Nome completo", key: "Nome" },
//           { label: "Contato", key: "Telefone" },
//           { label: "C.P.F.", key: "CPF" },
//           { label: "Data de nascimento", key: "DataNascimento" },
//           { label: "Gênero", key: "Genero" },
//           { label: "Email", key: "Email" },
//           { label: "Endereço", key: "Logradouro" },
//           { label: "Bairro", key: "Bairro" },
//           { label: "Número da residência", key: "NumeroResidencia" },
//           { label: "Complemento", key: "Complemento" },
//           { label: "C.E.P.", key: "CEP" },
//           { label: "Estado", key: "Estado" }
//         ].map((item) => (
//           <View style={styles.sep} key={item.key}>
//             <Text style={styles.label}>{item.label}:</Text>
//             <TextInput
//               value={paciente[item.key]}
//               editable={false}
//               style={styles.campos}
//             />
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default Dados;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f1f1f1'
//   },
//   scrollViewContent: {
//     alignItems: 'center',
//     paddingVertical: 20
//   },
//   subtitulo3: {
//     color: '#243434',
//     fontSize: 23,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center'
//   },
//   label: {
//     fontSize: 18,
//     color: '#4a4a4a',
//     fontWeight: 'bold',
//     marginBottom: 5
//   },
//   campos: {
//     width: '100%',
//     height: 40,
//     borderRadius: 5,
//     borderColor: '#ccc',
//     borderWidth: 1.5,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     marginBottom: 15
//   },
//   sep: {
//     width: '90%',
//     marginBottom: 15,
//     marginLeft: 20,
//     alignSelf: 'flex-start'
//   }
// });
