import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Button extends Component {
  render() {
    const {
        label,
        color,
        buttomCustomStyle,
        containerCustomStyle,
        labelCustomStyle,
    } = this.props;

    return (
      <View style={[containerCustomStyle]}>
        <TouchableOpacity {...this.props} style={[styles.button, {backgroundColor: color }, buttomCustomStyle]}>
            <Text style={[labelCustomStyle]}>{label}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 14,
        marginVertical: 8,
        width: '100%',
    },
})