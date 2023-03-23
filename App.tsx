import { View, Text, SafeAreaView, Pressable, ScrollView, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductCard from './components/screens/Product';
import Login from './components/screens/Login';
import Register from "./components/screens/Register";
import Home from "./components/screens/Home"
import Product from './components/screens/Product';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
        options={{
          title:'',
          headerShown:false,
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:'#03045E'
          },
          headerTintColor: '#fff' 
        }} />
        <Stack.Screen name="Login" component={Login}
        options={{
                  title:'',
                  headerTitleAlign:'center',
                  headerStyle: {
                    backgroundColor:'#03045E'
                  },
                  headerTintColor: '#fff' 
         }}/>
        <Stack.Screen name="Register" component={Register}         
                options={{
                  title:'',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:'#03045E'
          },
          headerTintColor: '#fff' 
        }}
        />
        <Stack.Screen name="Products" component={Product}         
        options={{
          title:'',
          headerShown: false,
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:'#03045E'
          },
          headerTintColor: '#fff' 
        }}/>

<Stack.Screen name="Product Info" component={ProductCard}         
        options={{
          title:'Product Info',
          headerShown:false,
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:'#03045E'
          },
          headerTintColor: '#fff' 
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App