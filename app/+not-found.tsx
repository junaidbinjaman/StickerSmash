import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Link, Stack} from 'expo-router';

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{title: 'Page not found'}} />
            <View style={styles.container}>
                <Text style={styles.text}>Not Found</Text>
                <Link style={styles.button} href='/'>
                    Go back to Home Screen
                </Link>
            </View>
        </>
    );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 25,
        color: '#fff'
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
