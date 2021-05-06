import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';


export default class ReadStoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            writeStory: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor={'#96B99B'}
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                />
                <TextInput style={styles.title}
                    placeholder={"Story title"}
                    onChangeText={(text) => {
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    placeholderTextColor='black'
                />
                <TextInput style={styles.author}
                    placeholder={"Author name"}
                    onChangeText={(text) => {
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    placeholderTextColor='black'
                />
                <TextInput style={styles.storyText}
                    placeholder={"write Story"}
                    onChangeText={(text) => {
                        this.setState({
                            writeStory: text
                        })
                    }}
                    value={this.state.writeStory}
                    placeholderTextColor='black'
                    multiline={true}
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color: 'black',
        padding: 6,

    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    submitButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40, color: 'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color: 'black',
    }
});