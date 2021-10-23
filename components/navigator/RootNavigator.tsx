import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC=()=>{
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        header: ({navigation, route, back})=>(
          <Appbar.Header style={{zIndex: 1}}>
            {back?(<Appbar.BackAction onPress={navigation.goBack}/>):null}
            <Appbar.Content title={route.name}/>
            <Appbar.Action icon='dots-horizontal' onPress={()=>{}}/>
          </Appbar.Header>
        ),
    }}>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Detail' component={DetailScreen}/>
    </Stack.Navigator>
  );
}
