import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from './src/navigation/index';
import { DefaultTheme, Provider } from 'react-native-paper';
import AppStyle from './src/components/AppStyle';
import AppColors from './src/components/AppColors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Login from './src/screens/auth/Login';
import { auth } from './src/utillis/Firebase-config';
import { onAuthStateChanged } from 'firebase/auth';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: AppColors.purple
  }
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const [fontsLoaded] = useFonts({
    'RobotoSlab-Regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'RobotoSlab-Light': require('./assets/fonts/RobotoSlab-Light.ttf'),
    'RobotoSlab-Medium': require('./assets/fonts/RobotoSlab-Medium.ttf'),
    'RobotoSlab-Black': require('./assets/fonts/RobotoSlab-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider theme={theme}>
      <View style={{flex:1}} onLayout={onLayoutRootView}>
        <NavigationContainer >
          {
            user ? <TabsNavigator /> : <Login />
          }
        </NavigationContainer>
       </View>
    </Provider>
  );
}
