import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dados = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

    <Text style={styles.subtitulo3}>Dados cadastrais</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {[
          { label: "Nome completo", key: "nome" },
          { label: "Contato", key: "contato" },
          { label: "C.P.F.", key: "cpf" },
          { label: "Data de nascimento", key: "dataNascimento" },
          { label: "Gênero", key: "genero" },
          { label: "Email", key: "email" },
          { label: "Endereço", key: "endereco" },
          { label: "Bairro", key: "bairro" },
          { label: "Número da residência", key: "numeroResidencia" },
          { label: "Complemento", key: "complemento" },
          { label: "C.E.P.", key: "cep" },
          { label: "Estado", key: "estado" }
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
