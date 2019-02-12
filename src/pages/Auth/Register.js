import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { Input, Button, Header } from 'components';
import { Card, CardItem, Container, Content, Body, Form, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
class Register extends Component {


  render() {

    const { height } = Dimensions.get('window');
    let alto = height - 30;
    return (
      <Container>


        <Header name="arrow-back" title="Registrarse" headerCustom={{
          backgroundColor: '#0EB2B9'
        }}
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
        <ScrollView>

          <LinearGradient style={[{ flex: 1, justifyContent: 'center', height: height }]} colors={['#00E0FF', '#055864', '#4A02A0']}>


            <View style={{ paddingTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%' }}>

              <Thumbnail large source={require('../../assets/img/loginHeader.jpg')} />

            </View>

            <Form style={{ width: '100%', padding: 30 }}>

              <Input
                label="Usuario"
              />

              <Input
                label="Correo"
                containerCustomStyle={{
                  paddingTop: 20
                }}
              />

              <Input
                label="Contraseña"
                containerCustomStyle={{
                  paddingTop: 20
                }}
              />

              <Input
                label="Confirmar Contraseña"
                containerCustomStyle={{
                  paddingTop: 20
                }}
              />

              <Button
                color="#0EB2B9"
                label="Registrarse"
                containerCustomStyle={{
                  paddingTop: 40,
                }}
                labelCustomStyle={{
                  color: 'white',
                  fontSize: 18
                }}
                buttomCustomStyle={{
                  borderRadius: 10
                }}
              />
            </Form>

          </LinearGradient>

        </ScrollView>



      </Container>

    );
  }
}

const mapStateToProps = state => ({

  usuario: state.usuario

});



export default connect(
  mapStateToProps
)(Register);

