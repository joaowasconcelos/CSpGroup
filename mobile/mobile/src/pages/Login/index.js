import React from 'react';
import { Pressable } from 'react-native';
import { SafeAreaView, ScrollView, Platform, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const navegaLogin = () => {
        // Navega para a tela principal
        navigation.navigate('Main');
    };

    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <ScrollView>

                <View style={styles.container}>

                    <Text></Text>

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
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        height: 897
    },
});

