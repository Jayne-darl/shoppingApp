import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Card, Button } from 'react-native-elements'
import ProductScreen from '../components/Product'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

interface Props {
    navigation: any
}

export default class DetailsScreen extends Component<Props> {
    constructor(props) {
        super(props)

    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Card image={navigation.getParam('image')} style={{ padding: 40 }}>
                    <Text>{JSON.stringify(navigation.getParam('name')).split('"')}</Text>
                    <Text>{JSON.stringify(navigation.getParam('price', 'default value'))}</Text>

                </Card>
            </View>
        )
    }
} 