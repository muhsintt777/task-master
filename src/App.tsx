/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [tasks, setTasks] = useState(['']);
  const [taskInp, setTaskInp] = useState('');

  function handleSubmit() {
    setTasks([taskInp, ...tasks]);
    setTaskInp('');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TASK MASTER</Text>
        <TextInput
          value={taskInp}
          onChangeText={newText => setTaskInp(newText)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.createBtn}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {tasks.map((item, i) => (
          <Text key={i} style={{color: 'white'}}>
            {item}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
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
