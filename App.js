/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AppState
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


// class App extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         appState: AppState.currentState,
//         rehydrated: false,
//       };
//       LogBox.ignoreLogs([
//           'Non-serializable values were found in the navigation state',
//         ]);
//   }
//   renderSpinner = () => {
//       return (
//           <View style={{flex: 1}}>
//               <Spinner size={'large'}/>
//           </View>
//       );
//   }


//   render(){
//       return (
//         <View>
//           <Navigation/>
//         </View>
//           // <Provider store={store}>
//           //     <PersistGate persistor={persistor} loading={this.renderSpinner()}>
//           //         <Navigator ref={ref => NavigationService.setTopLevelNavigator(ref)}/>
//           //         <DropdownAlert ref={(ref) => NotificationService.setDropdownAlert(ref)} />
//           //     </PersistGate>
//           // </Provider>
//       );
//   }
// }

// export default App;


// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   GoogleSignin.configure({
//     webClientId: '236253973910-rvctbr2k01n7ildfsd28cefa0c1n86hh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   });


//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [userInfo, setUserInfo] = useState({})
  GoogleSignin.configure({
        webClientId: '236253973910-rvctbr2k01n7ildfsd28cefa0c1n86hh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      });
    
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo)
      alert("user successfully sigined in")
      // this.setState({ userInfo });
      // setUserInfo(userInfo)
    } catch (error) {
      console.log("erooor", error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
                   <View style={{flexDirection:'row', justifyContent:'center'}}>
            <GoogleSigninButton
              style={{ width: 300, height: 65, marginTop:100 ,
              }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={_signIn}
            // disabled={this.state.isSigninInProgress} 
            />
          </View>



                 </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
