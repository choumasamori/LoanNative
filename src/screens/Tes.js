import React, { Component } from "react";
import { TextInput, StyleSheet , View , ScrollView} from "react-native";

class Tes extends Component {

    render(){
        return (
            <ScrollView keyboardShouldPersistTaps="handled">
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Login"
                    style={styles.input}
                />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 20,
        marginBottom: 20
    },
    scroll: {
        flex: 1
    }
});

export default Tes;
