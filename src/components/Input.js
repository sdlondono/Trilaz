import React, { Component } from 'react'
import { Input, View, Item, Label } from 'native-base'

export default class Inputs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: ''
      }
    }
    
    render() {
        const {
            label,
            containerCustomStyle
        } = this.props;
        return (
            <View style={[containerCustomStyle]}>
                <Item floatingLabel>
                    <Label style={{ fontSize: 14, color: 'white'}}>{label}</Label>
                    <Input 
                        {...this.props}
                        
                        style={{ color: '#D3D3D3'}}
                    />

                </Item>
            </View>
        )
    }
}