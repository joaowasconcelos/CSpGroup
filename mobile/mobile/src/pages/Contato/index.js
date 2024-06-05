import React from 'react';
import { SafeAreaView, ScrollView, Platform, StyleSheet, Text, View, Button } from 'react-native';

const Contatos = () => {
  return (

    <SafeAreaView style={styles.androidSafeArea}>

      <ScrollView>

        <View style={styles.container}>

          <Text>Contatos Screen</Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default Contatos;

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
});


