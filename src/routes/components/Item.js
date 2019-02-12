import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ListItem, Content, Left, Right, Body } from 'native-base';



class Item extends Component {


    constructor(props) {
        super(props);

    }


    render() {

        const { item } = this.props.data;



        return (



            <ListItem>
                <Left>


                    <View style={{ paddingLeft: 10 }}>

                        <Text>sdfsdfsdf</Text>
                        

                    </View>
                </Left>

            </ListItem>

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
    mapStateToProps,
)(Item);
