import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskCard} from './components/taskCard/TaskCard';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInp, setTaskInp] = useState('');

  function handleSubmit() {
    setTasks([taskInp, ...tasks]);
    setTaskInp('');
    Keyboard.dismiss();
  }
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    rowGap: 5,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    rowGap: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  input: {
    width: '80%',
    backgroundColor: 'grey',
  },
  createBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'blue',
  },
});

export default App;
