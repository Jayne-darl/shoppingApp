import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import ProductScreen from '../components/Product'

import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

interface Props {
    navigation: any
}


class HomeScreen extends Component<Props> {
    constructor(props) {
        super(props)
        const BASE_URL = '../../assets'
        this.state = {
            products: [
                {
                    name: 'Nike Shoes',
                    price: 449.99,
                    image: require(`${BASE_URL}/1.jpg`)
                },
                {
                    name: 'Shoes 2',
                    price: 389.99,
                    image: require(`${BASE_URL}/2.jpg`)
                },
                {
                    name: 'Shoes 3',
                    price: 249.99,
                    image: require(`${BASE_URL}/3.jpg`)
                },
                {
                    name: 'Shoes 4',
                    price: 185.99,
                    image: require(`${BASE_URL}/4.jpg`)
                },
            ]
        }
    }
    render() {
        return (
            <ScrollView>
                {this.state.products.map((product, index) => {
                    return (

                        <ProductScreen product={product} key={index} />
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
});

export default HomeScreen