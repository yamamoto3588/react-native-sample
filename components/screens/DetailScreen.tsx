import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Text, Button, Card } from 'react-native-paper';

export const DetailScreen: React.FC<NativeStackScreenProps<RootStackParamList>>=({ navigation })=>{
  const items=new Array<JSX.Element>();
  for(let i=0;i<20;i++){
    items.push(<Text key={i}>{i}</Text>)
  }
  return (
    <KeyboardAvoidingView behavior='padding'>
        {items}
    </KeyboardAvoidingView>
  );
}