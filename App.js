import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TaskProvider } from './src/components/context/TaskContext';
import { FormExibitionProvider } from './src/components/context/FormExibitionContext';
import TaskHeader from './src/components/TaskHeader/TaskHeader';
import RenderTasks from './src/components/RenderTasks/RenderTasks';


export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <TaskProvider>

        <FormExibitionProvider>

          <View style={styles.container}>
            <View style={styles.containerHeader} >
              <Text style={{ fontSize: 40, fontWeight: "bold", alignSelf: "center" }}>To do List</Text>
            </View>
            <TaskHeader />
            <RenderTasks />
            <StatusBar style="auto" />
          </View>

        </FormExibitionProvider>

      </TaskProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    backgroundColor: "white",
  },

  container: {
    width: "80%",
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
  },

  containerHeader: {
    marginTop: '30%',
    width: "100%", 
    marginBottom: "30%"
  },
});