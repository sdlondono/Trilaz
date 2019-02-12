import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Left, Header, Icon, Button, Body, Title, Right } from 'native-base';
export default class Headers extends Component {
    render() {
        const {
            title,
            name,
            headerCustom,
        } = this.props;

        return (
            <View>
                <Header androidStatusBarColor="black" style={[headerCustom]} >
                    <Left>
                        <Button transparent {...this.props}>

                            <Icon name={name} />

                        </Button>
                    </Left>
                    <Body>
                        <Title>
                            {title}
                        </Title>
                    </Body>
                    <Right/>
                </Header>
            </View>
        )
    }
}
