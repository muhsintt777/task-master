import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskCard} from './components/taskCard/TaskCard';
import styles from './AppStyle';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInp, setTaskInp] = useState('');

  function handleSubmit() {
    setTasks([taskInp, ...tasks]);
    setTaskInp('');
    Keyboard.dismiss();
  }
  function deleteTask() {}
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TASK MASTER</Text>
        <TextInput
          value={taskInp}
          onChangeText={newText => setTaskInp(newText)}
          onSubmitEditing={handleSubmit}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.createBtn}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {tasks.map((item, i) => (
          <TaskCard key={i} task={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default App;
