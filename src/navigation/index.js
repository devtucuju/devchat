import React, {useEffect, useRef, useContext} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {PreloadScreen} from '../screens/PreloadScreen';
import {TabNavigator} from '../screens/ChatScreen';
import {useSelector} from 'react-redux';
import {FirebaseContext} from '../context/firebase';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function Router() {
  const auth = useSelector(state => state.auth);
  const {api} = useContext(FirebaseContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Preload"
          component={PreloadScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="Chat"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
