import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useTaskContext } from "../context/TaskContext";

export default function Form() {
    const { updateTaskTitle } = useTaskContext();
    const [inputValue, setInputValue] = useState('');

    function handleCreateTask() {
        if (inputValue) {
            updateTaskTitle(inputValue);
            setInputValue('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Text>
                    Insira sua nova tarefa:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setInputValue}
                    value={inputValue}
                    autoCapitalize="sentences"
                />
            </View>
            <TouchableOpacity onPress={() => handleCreateTask()} style={styles.touchableOpacity}>
                <Text style={styles.taskText}>Criar tarefa</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 50,
    },

    inputWrapper: {
        alignItems: "center",
    },

    input: {
        width: "100%",
        height: 40,
        margin: 15,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5
    },

    touchableOpacity: {
        height: 30,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "gray",
        backgroundColor: "gray",
        borderRadius: 6,
    },
    taskText: {
        color: "white"
    }
});