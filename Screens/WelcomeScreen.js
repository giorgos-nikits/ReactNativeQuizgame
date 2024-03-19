import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';




function WelcomeScreen(props) {

    

    const handlePressTest = () => {
        alert("Let's GO!!!");
    }

    const handleEasterEgg = () => {
        alert("You found the easter egg!!!");
    }

    return (
        <View style={styles.container}>

            <View style={styles.box1}>
                <TouchableOpacity onPress={handleEasterEgg}>
                    <Image style={styles.imageStyle} source={require('../assets/question.png')}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Welcome to my quiz game!</Text>
                <TouchableOpacity onPress={handlePressTest} style={styles.startButton}>
                    <Text style={styles.textButton}>
                        Start Game
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box3}>

            </View>
            <View style={styles.box2}>
                <Text>I Hope You Enjoy The Game</Text>

            </View>

            
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccffcc',
    },
    box1:{
        flex:2,
        paddingTop:100,
    },
    box2:{
        flex:4,
    },
    box3:{
        flex:3,

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
        textAlign: 'center',
    },
    imageStyle:{
        width:100,
        height:100,
        marginBottom:50,
        alignSelf:'center',
        
    }
    
})