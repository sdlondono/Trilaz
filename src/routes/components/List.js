import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Item from './Item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Listado extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    "Comprar": "Prueba",
                    "Data": "Nose"
                }
            ]
        }

    }



    render() {


        return (
            <View>

                <FlatList
                    data={this.state.data}
                    renderItem={(item) => <Item data={item} />}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                />


            </View>
        )
    }




}


/**
 * funcion que carga los estado del store de redux
 */
const mapStateToProps = state => ({

    usuario: state.usuario

});

/**
 * funcion que traer todas las funciones de la actions que usaremos en este page
 */


export default connect(
    mapStateToProps
)(Listado);
