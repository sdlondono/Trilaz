import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'components';
import { InicioCSS } from 'styles';
class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Header onPress={() => { this.props.navigation.toggleDrawer() }} headerCustom={{
          backgroundColor: '#0EB2B9'
        }} name="menu"/>
        <Text style={[InicioCSS.Style.color, {fontFamily: 'Roboto-Light'}]}> textInComponent </Text>
      </View>
    );
  }
}


const mapStateToProps = state => ({

    usuario: state.usuario

});


export default connect(
    mapStateToProps
)(Inicio);
