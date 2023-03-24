import React, {useRef, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TaskCard} from './components/taskCard/TaskCard';
import styles from './AppStyle';
import {FAB, IconButton, MD3Colors} from 'react-native-paper';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInp, setTaskInp] = useState('');
  const inputRef = useRef<TextInput | null>(null);

  function handleSubmit() {
    setTasks([taskInp, ...tasks]);
    setTaskInp('');
    Keyboard.dismiss();
  }
  function deleteTask() {}
  return (
    <SafeAreaView style={{flex: 1}}>
      <FAB
        label="Add"
        style={styles.fab}
        onPress={() => {
          inputRef.current?.blur();
          inputRef.current?.focus();
        }}
      />
      <Text style={{textAlign: 'center'}}>TASK MASTER</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>TASK MASTER</Text>
        <TextInput
          ref={inputRef}
          value={taskInp}
          onChangeText={newText => setTaskInp(newText)}
          onSubmitEditing={handleSubmit}
          style={styles.input}
        />
      </View>
      <ScrollView style={styles.list}>
        {tasks.map((item, i) => (
          <TaskCard key={i} task={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
