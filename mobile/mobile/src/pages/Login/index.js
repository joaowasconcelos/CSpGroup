import React from 'react';
import { ImageBackground, Pressable } from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const logo = require('../../../assets/logo_medical.png');

const Login = () => {
    const navigation = useNavigation();

    const navegaLogin = () => {
        // Navega para a tela principal
        navigation.navigate('Main');
    };

    return (

        <SafeAreaView style={styles.androidSafeArea}>
            <ScrollView>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgb(0, 76, 76)', 'transparent']}
                    style={styles.background}
                />

                <View style={styles.topo}>
                    <Text style={styles.title}>SP MEDICAL GROUP</Text>
                    <Image source={logo} />
                </View>

                <View style={styles.container}>

                    <View style={{
                        backgroundColor: 'white',
                        height: 720,
                        width: 460,
                        borderTopLeftRadius: 130,
                        paddingTop: 100,
                        alignItems: 'center'
                    }}>
                        <Text style={styles.subtitulo5}>Bem Vindo</Text>
                        <Text style={styles.subtitulo4}>Faça login em sua conta </Text>

                        <TextInput placeholder='Digite seu Email ou C.P.F.' style={styles.entradaTexto}></TextInput>

                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#b2d8d8' : '#004c4c',
                                    width: 140,
                                    height: 40,
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10,
                                },
                            ]}
                            onPress={navegaLogin}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#fafafa' }}>Logar</Text>
                        </Pressable>

                    </View>





                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default Login;

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 717,
        width: 460,
        //backgroundColor: '#f7f9f8',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    topo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    subtitulo5: {
        fontSize: 50,
        color: '#007c7c',
        fontWeight: 'bold',
    },
    subtitulo4: {
        color: 'grey',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 20,
    }, 
    entradaTexto: {
        borderRadius: 100,
        color: '#004c4c',
        paddingHorizontal: 10,
        borderRadius: 100,
        width: 200,
        backgroundColor: 'rgb(220,220,200)'
    }

});

