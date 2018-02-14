import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  PlatForm,
} from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

import Todo from 'components/Todo';

export default class App extends Component {

  state = {
    usuario: 'Fabio Guelfi',
    todos: [
      { id: 0, text: 'Estudar goNative' },
      { id: 1, text: 'Estudar React Native' },
    ],
  }

  componentWillMount() {
    console.tron.log('teste');
  }

  addTodo = () => {
    this.setState({
      todos: [ ...this.state.todos,{id: Math.random(),text: 'Novo Todo'} ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.usuario}</Text>
      { this.state.todos.map(todo => (
        <Todo key={todo.id} title={todo.text} />
      )) }
      <Button title='Adicionar Todo' onPress={this.addTodo} />
      {/* <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 20
  }
});
