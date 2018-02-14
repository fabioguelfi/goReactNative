import React from 'react'
import { View, Text, StyleSheet, Platform} from 'react-native'
import PropTypes from 'prop-types'


const Todo = ({title}) => (
    <View>
        { Platform.OS === 'ios'
            ? <Text style={style.text}>{title}</Text>
            : <Text style={style.text}>{title}</Text>
        }
    </View>
)

Todo.defaultProps = {
    title: 'estudar c#'
}

Todo.proptypes = {
    title: PropTypes.string,
};

const style = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontWeight: 'bold'
            },
            android: {
                fontSize: 24
            }
        })
    }
})

export default Todo
