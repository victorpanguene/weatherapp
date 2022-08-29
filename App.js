import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Index';
import WeeklyTemps from './src/screens/WeekyTemps/WeeklyTemps';

const App = () => {
  const Stack = createNativeStackNavigator();
  const headerConfig = { headerShown: false };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerConfig}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WeeklyTemps" component={WeeklyTemps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
