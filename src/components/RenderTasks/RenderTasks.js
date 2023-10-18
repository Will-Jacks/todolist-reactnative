import { View, Text, TouchableOpacity } from "react-native";
import { useTaskContext } from "../context/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function RenderTasks() {
    const { taskTitle, deleteTaskTitle, completed, setCompleted } = useTaskContext();


    function markTaskAsCompleted(index) {
        const updatedCompleted = [...completed];
        updatedCompleted[index] = !completed[index];
        setCompleted(updatedCompleted);
    }

    return (
        <View style={styles.container}>
            {
                taskTitle.map((titles, index) => {
                    return (
                        <View key={index} style={styles.tasksWrapper}>
                            <Text style={[completed[index] ? styles.lineThrough : null, styles.text]}>
                                {titles}
                            </Text>
                            <View style={styles.touchableOpacityView}>
                                <TouchableOpacity
                                    style={styles.touchableOpacity}
                                    onPress={() => markTaskAsCompleted(index)}
                                >
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "#fff" }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteTaskTitle(index)}>
                                    <FontAwesomeIcon icon={faTrash} size={22} style={{ color: "#000", }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 20,
        marginBottom: 100,
        
    },

    tasksWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderColor: "gray",
        padding: 15,
        borderRadius: 20,
        flexWrap: "wrap" 
    },

    text: {
        fontSize: 20,
        flexWrap: "wrap",
    },

    touchableOpacityView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    touchableOpacity: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "green",
        backgroundColor: "green",
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    lineThrough: {
        textDecorationLine: "line-through",
        textDecorationStyle: "double",
        color: 'gray'
    }

})