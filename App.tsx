import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductCard from './src/screens/ProductCard';
import AddCustomer from './src/screens/AddCustomer';
import AboutUs from './src/screens/AboutUs';
import Login from './src/screens/Login';
import GuideCard from './src/screens/GuideCard';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import RegisterChoice from './src/screens/RegisterChoice';
import PatientRegister from './src/screens/PatientRegister';
import PatientHome from './src/screens/Patient';
import ProductHome from './src/screens/ClinicHome';
import ChangePassword from './src/screens/ChangePassword';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Register_choice"
          component={RegisterChoice}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientRegister}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="patient_home"
          component={PatientHome}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="change_password"
          component={ChangePassword}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#343436',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Products"
          component={ProductHome}
          options={{
            title: '',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#111113',
            },

            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Product Info"
          component={ProductCard}
          options={{
            title: '',
            headerShown: true,
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#222',
          }}
        />
        <Stack.Screen
          name="Guide Info"
          component={GuideCard}
          options={{
            title: '',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#222',
          }}
        />
        <Stack.Screen
          name="About Us"
          component={AboutUs}
          options={{
            title: 'About Us',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#131035',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="addCustomer"
          component={AddCustomer}
          options={{
            title: '',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#222',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
