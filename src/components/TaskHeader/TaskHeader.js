import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useFormExibitionContext } from "../context/FormExibitionContext";
import Form from "../Form/Form";


export default function TaskHeader() {
    const { formExibitionState, updateFormExibitionState } = useFormExibitionContext();

    return (
        <View style={styles.container} >
            {
                formExibitionState ? (
                    <View style={styles.container}>
                        <View style={styles.createTaskContainer}>
                            <Text style={textStyle.general} >Tarefas</Text>
                            <TouchableOpacity onPress={() => updateFormExibitionState()}>
                                <FontAwesomeIcon icon={faPlus} size={30} />
                            </TouchableOpacity>
                        </View>
                        <Form />
                    </View>
                ) : (
                    <View style = {styles.container}>
                        <View style={styles.createTaskContainer}>
                            <Text style={textStyle.general} >Tarefas</Text>
                            <TouchableOpacity onPress={() => updateFormExibitionState()}>
                                <FontAwesomeIcon icon={faPlus} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: '100%',
    },

    createTaskContainer: {
        display: "flex",
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
});

const textStyle = StyleSheet.create({
    general: {
        fontSize: 30,
    },
});