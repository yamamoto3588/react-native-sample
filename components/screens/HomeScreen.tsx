import * as React from 'react';
import { View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Card, TextInput, Button, Text, Paragraph, Appbar } from 'react-native-paper';
import { useHeaderHeight } from '@react-navigation/elements';
import { Dimensions } from 'react-native';
export const HomeScreen: React.FC<NativeStackScreenProps<RootStackParamList>>=({ navigation })=>{
  const items=new Array<JSX.Element>();
  const headerHeight=useHeaderHeight();
  const [text, setText]=React.useState('');
  const [chatLength, setChatLength]=React.useState(30);
  const [scrollViewRef, setScrollViewRef]=React.useState<null|ScrollView>(null);

  for(let i=0;i<chatLength;i++){
    items.push(<Card key={i}><Card.Content><Paragraph>{i}</Paragraph><Button>A</Button></Card.Content></Card>)
  }

  const height=Dimensions.get('window').height-headerHeight;

  return (
    <KeyboardAvoidingView behavior='position'
      keyboardVerticalOffset={Platform.select({
        ios: headerHeight, // iOS
        android: headerHeight+(StatusBar.currentHeight?StatusBar.currentHeight:0), // android 
      })}>
        <View style={{height: height-80}}>
          <ScrollView ref={(ref)=>{setScrollViewRef(ref)}}>
            {items}
          </ScrollView>
        </View>
        <View style={{height: 80}}>
          <Button mode='contained' style={styles.bottomRight} contentStyle={styles.button} onPress={()=>{navigation.navigate('Detail')}}>
            submit
          </Button>
          <TextInput value={text} returnKeyType='send' style={styles.textBox} placeholder='Input'
            onChangeText={(text)=>{setText(text)}}
            onSubmitEditing={()=>{
              setChatLength(chatLength+1);
              setText('');
            }}/>
        </View>
    </KeyboardAvoidingView>
  );
}

const styles=StyleSheet.create({
  textBox: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '75%'
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 80,
    width: '25%'
  },
  button: {
    height: 80,
  }
})