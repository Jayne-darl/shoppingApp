import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import ProductScreen from '../components/Product'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    navigation: any
}

export default class DetailsScreen extends Component<Props> {
    constructor(props) {
        super(props)

    }


    render() {
        const { navigation } = this.props;
        let images = []
        for (var i = 0; i < 5; i++) {

            images.push((
                <Image source={require('../../assets/star.png')} style={{ width: 20, height: 20, }} />
            ))
        }
        return (
            <View style={styles.containerStyle}>
                <Text style={{ textAlign: 'center', marginTop: 20, fontFamily: 'Georgia', fontSize: 23, fontWeight: "300" }}>{JSON.stringify(navigation.getParam('name')).split('"')}</Text>
                <View style={styles.imageContainerStyle}>
                    <Image source={navigation.getParam('image')} style={{ width: undefined, height: 250, borderRadius: 30, }} />
                </View>
                <View style={styles.descriptionStyle}>
                    <Text style={{ textAlign: 'right' }}>${JSON.stringify(navigation.getParam('price', 'default value'))}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 20, fontFamily: 'Symbol' }}>Review:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            {images.map((img, i) => {
                                return (
                                    <TouchableOpacity
                                        key={i}>
                                        {img}
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 10

    },
    imageContainerStyle: {
        padding: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    descriptionStyle: {
    }
})