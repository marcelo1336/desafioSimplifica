import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default (props) => {
    return (
        <View style={styles.card}>
            <View style={[styles.cardContent, { backgroundColor: props.color }]}>
                <Text style={styles.textCardG} >{props.name}</Text>
                <Text style={styles.textCardP} >{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 36,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        margin: 10
    },
    cardContent: {
        borderRadius: 36,
        marginHorizontal: 7,
        marginVertical: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCardG: {
        fontSize: 25,
        textAlign: 'center'
    },
    textCardP: {
        fontSize: 17,
        textAlign: 'center',
    }

})