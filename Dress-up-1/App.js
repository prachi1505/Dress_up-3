import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import{createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import DrawerNavigator from "./navigation/DrawerNavigator";

import*as firebase from "firbase";
import { firebaseConfig } from './config';
 
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{
   headerShown: false,
   gestureEnabeled:false
}}>
<Stack.Screen name="Login" component={LoginScreen}/>
<Stack.Screen name = "RegisterScreen" component={RegisterScreen}/>
<Stack.Screen name = "Dashboard" component={DrawerNavigator}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}