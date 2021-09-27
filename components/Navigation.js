import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomePageScreen from './Homepage';
import LoginScreen from './LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();
const AuthStackScreen = ({  }) => <AuthStack.Navigator
mode={'modal'}
screenOptions={{
  headerShown: false,
}}
initialRouteName={'AuthLoading'}>

<AuthStack.Screen name={'LoginStack'}>
  {() => (
    <AuthStack.Navigator
      mode={'card'}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.layout.primary,

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign:'center'
        },
      }}>
      <AuthStack.Screen name={'Welcome'} component={LoginScreen} options={{ title: 'login' }} />
      <AuthStack.Screen name={'Signup'} component={HomePageScreen} options={{ title: 'Country of residence', }} />
    </AuthStack.Navigator>
  )}
</AuthStack.Screen>
</AuthStack.Navigator>

const RootStack = createStackNavigator();
const RootStackScreen = ({  }) => (
    // userToken ? <BottomNavigator /> :
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name={'AuthStack'} component={AuthStackScreen} />
        </RootStack.Navigator>
);

const Navigator = () => {
    // const userToken = session.accessToken != '' && session.accessToken != undefined ? true : false


    return (
        <NavigationContainer>
            <RootStackScreen  />
        </NavigationContainer>
    );
};

export default Navigator;