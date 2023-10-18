import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const TaskContext = createContext();

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export function TaskProvider({ children }) {
    const [taskTitle, setTaskTitle] = useState([]);
    const [completed, setCompleted] = useState(Array(taskTitle.length).fill(false));

    useEffect(() => {
        async function fetchTasks() {
            try {
                const tasksJSON = await AsyncStorage.getItem('tasks');
                const parsedTasks = JSON.parse(tasksJSON);
                if (parsedTasks) {
                    setTaskTitle(parsedTasks)
                }
            }
            catch (error) {
                console.error('Erro ao recuperar as tarefas: ', error);
            }
        }

        fetchTasks();
    }, []);

    useEffect(() => {
        async function storeData(value) {
            try {
                await AsyncStorage.setItem('tasks', JSON.stringify(value));
            }
            catch (error) {
                console.error("Erro ao armazenar os dados: ", error);
            }
        }

        storeData(taskTitle);



    }, [taskTitle])

    function updateTaskTitle(newTaskTitle) {
        setTaskTitle([...taskTitle, newTaskTitle]);
    }

    function deleteTaskTitle(id) {
        const newArr = taskTitle.filter((_, index) => {
            return index !== id; // Mantém todos os elementos exceto o que corresponde ao ID
        });

        const updatedCompleted = completed.filter((_, index) => {
            return index !== id; // Mantém todos os elementos exceto o que corresponde ao ID
        });

        setTaskTitle(newArr);
        setCompleted(updatedCompleted);
    }


    return (
        <TaskContext.Provider value={{ taskTitle, updateTaskTitle, deleteTaskTitle, completed, setCompleted }}>
            {children}
        </TaskContext.Provider>
    )
}