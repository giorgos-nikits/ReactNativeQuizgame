import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function WelcomeScreen(props) {

    const handlePressTest = () => {
        alert("Let's GO!!!");
    }

    return (
        <View style={styles.container}>

            <Image style={styles.imageStyle} source={require('../assets/question.png')} />
            <Text style={styles.headerText}>Welcome to my quiz game!</Text>
            <TouchableOpacity onPress={handlePressTest} style={styles.startButton}>
                <Text style={styles.textButton}>
                    Start Game
                </Text>
            </TouchableOpacity>

        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccffcc',
    },
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        paddingBottom:15,

    },
    startButton:{
        margin: 10,
        backgroundColor: 'green',
        padding:10,
        borderColor: 'black',
        borderWidth:2,
        
    },
    textButton:{
        color: '#fff',
    },
    imageStyle:{
        width:100,
        height:100,
        marginBottom:50,
        
    }
    
})