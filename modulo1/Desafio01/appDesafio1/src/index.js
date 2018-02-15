import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

import Post from 'components/Post';

export default class App extends Component {

  state = {
    nameApp: 'GoNative App',
    posts: [
      {
        id: 0,
        title: 'Estudar goNative',
        author: 'Fabio Guelfi',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
      },
      {
        id: 1,
        title: 'Estudar React Native',
        author: 'Fabio Guelfi',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
      },
      {
        id: 2,
        title: 'Estudar GoLang',
        author: 'Fabio Guelfi',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
      },
    ],
  }

  render() {
    return (
    <View style={ styles.main }>
      <View style={ styles.mainHeader }>
          <Text style={ styles.textHeader }>
            {this.state.nameApp}
          </Text>
      </View>
      <View style={ styles.viewCenter }>
        <ScrollView styles={ styles.contentContainer }>
          { this.state.posts.map(post => (
            <Post key={post.id}
                  title={post.title}
                  author={post.author}
                  description={post.description} />
          )) }
        </ScrollView>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EE7777',
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
  },
  instructions: {
    fontSize: 22,
    color: 'blue',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  mainHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  textHeader: {
    fontSize: 18,
  },
});

