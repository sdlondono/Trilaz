import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Dimensions, ScrollView, ImageBackground, Animated } from 'react-native';
import { Input, Button } from 'components';
import { Card, CardItem, Container, Content, Body, Form, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { setUsuario } from '../../store/reducers/actions/Actions';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       usuario : '',
       password : '',
    }
  }
  

  componentWillMount() {
    console.log(this.props);
    this.animatedValue = new Animated.Value(0);
  }


  btnLogin(){
    
    this.props.setUsuario(this.state.usuario);

    this.props.navigation.push('Drawer')

  }

  render() {

    const { height } = Dimensions.get('window');
    let alto = height - 20;

    // const interpolateColor = this.animatedValue.interpolate({
    //   inputRange: [0, 150],
    //   outputRange: ['rgb(0,0,0)', 'rgb(51,250,170)']
    // })

    // const animatedStyle = {
    //   backgroundColor: interpolateColor
    // }

    return (
      <Container>


        <ScrollView >

          <LinearGradient style={[{ flex: 1, justifyContent: 'center', height: height }]} colors={['#00E0FF', '#055864', '#4A02A0' ]}>

           

            <View style={{ paddingTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%'}}>

              <Thumbnail large source={require('../../assets/img/loginHeader.jpg')} />

            </View>

            <Form style={{ width: '100%', padding: 30 }}>

              <Input
                label="Usuario"
                onChangeText={(value) => this.setState({usuario : value})}
              />

              <Input
                label="Contraseña"
                containerCustomStyle={{
                  paddingTop: 20
                }}
                onChangeText={(value) => this.setState({ password: value })}
              />

              <TouchableOpacity style={{ paddingTop: 40 }}>
                <Text style={{ color: '#FFFFFF' }}>
                  ¿Olvidaste tu contraseña?
                      </Text>
              </TouchableOpacity>

              <Button
                color="#0EB2B9"
                label="INGRESAR"
                containerCustomStyle={{
                  paddingTop: 20
                }}
                labelCustomStyle={{
                  color: 'white',
                  fontSize: 18
                }}
                buttomCustomStyle={{
                  borderRadius: 10,
                  width: "50%"
                }}
                onPress={() => this.btnLogin()}
              />

              <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                <Text style={{ paddingRight: 20, color: '#D8D8D8' }}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.push("Register")}}>
                  <Text style={{ color: '#FFFFFF', fontSize: 17  }}>
                    Registrate!
                      </Text>
                </TouchableOpacity>
              </View>

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
const mapDispatchToProps = dispatch => ({

  setUsuario: bindActionCreators(setUsuario, dispatch),


});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
