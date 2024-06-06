import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../mobile/src/pages/Home';
import Consultas from '../mobile/src/pages/Consultas';
import Contato from '../mobile/src/pages/Contato';
import Dados from '../mobile/src/pages/Dados';
import Login from '../mobile/src/pages/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#004c4c',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#b4c4bc',
        },
      }}
    >
      <Tab.Screen
        name='Consultas'
        component={Consultas}
        options={{
          title: 'Consultas',
          headerStyle: {
            backgroundColor: '#b4c4bc',
          },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='id-card' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          title: 'Contato',
          headerTintColor: '#053c20',
          headerStyle: {
            backgroundColor: '#b4c4bc',
          },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='phone' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dados"
        component={Dados}
        options={{
          title: 'Dados',
          headerTintColor: '#053c20',
          headerStyle: {
            backgroundColor: '#b4c4bc',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
