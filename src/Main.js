import React, { Component } from 'react'
import { Text, View, StatusBar, Dimensions } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rutas from './routes/Rutas';
class Main extends Component {
  render() {
    const { height } = Dimensions.get('window');
    let alto = height - 20;
    return (

      <View style={{ height: alto }}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={'black'}
        />

        <Rutas />

      </View>


    )
  }
}

const mapStateToProps = state => ({

  usuario: state.usuario

});


export default connect(
  mapStateToProps
)(Main);