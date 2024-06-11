import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

import Consultas from '../mobile/src/pages/Consultas';
import Contato from '../mobile/src/pages/Contato';
import Dados from '../mobile/src/pages/Dados';
import Login from '../mobile/src/pages/Login';
import ConsultasMedico from './src/pages/ConsultasMedico';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {

  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fafafa',
        tabBarInactiveTintColor: '#c3c3c3',
        tabBarStyle: {
          backgroundColor: '#243434',
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
      <Tab.Screen
        name='ConsultasMedico'
        component={ConsultasMedico}
        options={{
          title: 'Próximas consultas',
          headerStyle: {
            backgroundColor: '#b4c4bc',
          },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='id-card' color={color} size={size} />
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
          headerTintColor: '#fafafa',
          headerStyle: {
            backgroundColor: '#243434'
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
