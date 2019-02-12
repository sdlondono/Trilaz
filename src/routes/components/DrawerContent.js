import React, { Component } from 'react';
import { StyleSheet, ViewPropTypes, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';

import List from './List';
import { Root, Container, Header, Content, ListItem, Text, View, Button, Thumbnail, Separator, Left, Right, Footer, Drawer } from 'native-base';



class DrawerContent extends Component {

    constructor(props) {
        super(props);

    }


    render() {



        return (
            <Container>


                <Content>


                    <List />


                </Content>


            </Container>
        );
    }






}

/**
 * funcion que carga los estado del store de redux
 */
const mapStateToProps = state => ({
    usuario: state.usuario,

});

export default connect(
    mapStateToProps
)(DrawerContent);
