
import React from  'react';
import {View, StyleSheet,Text} from  'react-native';
import {colors} from  '../config/constants'

const Separator = () => {
    return (
       <View style={styles.separator}/>
    )
}

const styles = StyleSheet.create ({
    separator:{
        height: StyleSheet.hairlineWidth,
        backgroundColor:  'colors.border',
        marginStart:88
    }
})

export default Separator;