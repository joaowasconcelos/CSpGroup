import React from 'react';
import { Pressable } from 'react-native';
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

                <LinearGradient colors={['rgb(0, 76, 76)', 'transparent']} style={styles.background} />

                <View style={styles.topo}>

                    <Text style={styles.title}>SP MEDICAL GROUP</Text>
                    <Image source={logo} />

                </View>

                <View style={styles.container}>

                    <View style={styles.box_white}>

                        <Text style={styles.subtitulo5}>Bem Vindo</Text>
                        <Text style={styles.subtitulo4}>Faça login em sua conta</Text>

                        <TextInput placeholder='Digite seu Email ou C.P.F.' style={styles.entradaTexto}></TextInput>
                        <TextInput placeholder='Digite sua senha' secureTextEntry={true} style={styles.entradaTexto}></TextInput>

                        <Text style={styles.subtitulo3}>Esqueceu a senha?</Text>

                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#b2d8d8' : '#004c4c',
                                    width: 350,
                                    height: 50,
                                    justifyContent: 'center',
                                    borderRadius: 50,
                                    alignItems: 'center',
                                    marginTop: 200,
                                    marginBottom: 10
                                },
                            ]}
                            onPress={navegaLogin}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 25, letterSpacing: 5, fontWeight: 'bold', color: '#fafafa' }}>Logar</Text>
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
        height: 700,
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
        marginTop: 25,
        textAlign: 'center'
    },
    topo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    subtitulo5: {
        fontSize: 50,
        color: '#026161',
        fontWeight: 'bold'
    },
    subtitulo4: {
        color: 'grey',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    subtitulo3: {
        color: '#007c7c',
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 172
    },
    entradaTexto: {
        color: '#004c4c',
        paddingHorizontal: 10,
        borderRadius: 30,
        width: 340,
        height: 50,
        backgroundColor: 'rgb(205,216,210)',
        marginVertical: 10,
        fontSize: 23,
        paddingLeft: 20
    },
    box_white: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 710,
        width: 460,
        borderTopLeftRadius: 130,
        paddingTop: 100,
        alignItems: 'center',
    }
});
