import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    }

})

const splashScreen = function () {
    return <View style={style.container}>
        <LinearGradient
            colors={['green', 'black']}
            style={style.background}
        />
        <Link href="/TLogin">
        <Image style={style.logo}
            source={require('../assets/images/spot.png')}
        />
        </Link>
    </View>
}
export default splashScreen;