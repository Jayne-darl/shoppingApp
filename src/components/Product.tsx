import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

interface Props {
    navigation: any
    product: any
    navigate: any
}

class ProductScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card image={this.props.product.image}>
                <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
                    {this.props.product.name}
                </Text>
                <Text style={styles.price} h4>
                    {this.props.product.price}
                </Text>
                <Text h6 style={styles.description}>
                    added 1d ago
                </Text>
                <Button
                    type="clear"
                    title='Buy now'
                    onPress={() => this.props.navigation.navigate('Details', {
                        name: this.props.product.name,
                        price: this.props.product.price,
                        image: this.props.product.image
                    })}
                />
            </Card >
        )
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});

export default withNavigation(ProductScreen);