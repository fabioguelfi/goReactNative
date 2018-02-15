import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

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
    title: 'estudar .netCore',
    author: 'Fabio Guelfi',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
}

Post.proptypes = {
    title: PropTypes.string,
};

export default Post
