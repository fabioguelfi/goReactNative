import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


const Post = props => (
    <View style={styles.main}>
        <View style={styles.viewHeader}>
            <Text style={styles.textTitle}>{props.title}</Text>
        </View>
        <View style={styles.viewCenter}>
            <Text style={styles.textCenter}>{props.author}</Text>
        </View>
        <View style={styles.viewBottom}>
            <Text style={styles.textBottom}>{props.description}</Text>
        </View>
    </View>
)

Post.defaultProps = {
    title: 'estudar c#',
    author: 'Fabio Guelfi',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
}

Post.proptypes = {
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 10,
      },
      textHeader: {
        fontSize: 20,
      },
      viewHeader: {
        height: 30,
      },
      textTitle: {
        color: '#333333',
        fontSize: 20,
        fontWeight: 'bold',
      },
      viewCenter: {
        height: 30,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
      },
      textCenter: {
        fontSize: 14,
        color: '#999999',
      },
      viewBottom: {
        flex: 1,
        marginTop: 10,
      },
      textBottom: {
        fontSize: 16,
        color: '#666666',
      },
});

export default Post
