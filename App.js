import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Header, Content, Item, Label, Input, Button} from 'native-base';
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <View style={{paddingVertical:60,backgroundColor:'#6498fd'}}>
            <Text style={{textAlign:'center',fontSize:30,color:'white'}}>Welcome</Text>
            <Text style={{textAlign:'center',fontSize:15,color:'white'}}>Please Login to use our Service</Text>
          </View>
        <Content style={{padding:20}}>
          <Item>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button block style={{marginTop:30, backgroundColor:'#6498fd'}}>
            <Text style={{color:'white'}}>Login</Text>
          </Button>
          <View style={{marginTop:20}}>
            <Text style={{textAlign:'center'}}>Not registered yet ?</Text>
          </View>
        </Content>
      </Container>
      
    );
  }
}
