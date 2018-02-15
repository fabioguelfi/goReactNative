import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const Header = props => (
    <View style={ styles.mainHeader }>
        <Text style={ styles.textHeader }>
            { props.title }
        </Text>
    </View>
)

export default Header;
