import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import api from '../../services/api';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
 } from 'react-native';

 import PropTypes from 'prop-types'

import styles from './styles'

class Welcome extends Component {

    static navigationOptions = {
        header: null,
    };

    static PropTypes = {
        navigation: PropTypes.shape({
            dispatch: PropTypes.func,
        }).isRequired,
    }

    state = {
        username: '',
    }

    checkUserExists = async (username) => {
        const user = await api.get(`/users/${username}`);

        return user;
    }

    signIn = async () => { 

        const { username } = this.state;

        if(username !== 0) return;

        try {
            await this.checkUserExists(username);

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'User' }),
                ],
            })

        } catch(err) {

        }

       

        this.props.navigation.dispatch(resetAction);
    };

    render() {
        return (
            <View style={ styles.container }>

        <StatusBar barStyle='light-content' />

        <Text style={ styles.title }>Bem-Vindo</Text>

        <Text style={ styles.text }>
            Para continuar, precisamos que voceê informe seu úsuario do github.
        </Text>

        <View style={ styles.form }>

            <TextInput
                style={ styles.input }
                autoCapitalize='none'
                autoCorrect={ false }
                placeholder='Digite seu usuario'
                underlineColorAndroid='transparent'
                value={ this.state.username }
                onChangeText={ username => this.setState({ username: username }) }
            />

            <TouchableOpacity style={ styles.button } onPress={ this.signIn }>

                <Text style={ styles.buttonText }>Prosseguir</Text> 

            </TouchableOpacity>    

        </View>

    </View>
        );
    }
}

export default Welcome;