import {StyleSheet} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style='light' />
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#ffd33d',
                    headerStyle: {
                        backgroundColor: '#25292e',
                    },
                    headerShadowVisible: false,
                    headerTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#25292e',
                    },
                }}
            >
                <Tabs.Screen
                    name='index'
                    options={{
                        title: 'Home',
                        tabBarIcon: ({color, focused}) => (
                            <Ionicons
                                name={
                                    focused
                                        ? 'information-circle'
                                        : 'information-circle-outline'
                                }
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
                <Tabs.Screen name='about' options={{title: 'About'}} />
            </Tabs>
        </GestureHandlerRootView>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
