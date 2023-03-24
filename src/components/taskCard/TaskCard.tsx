import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

interface TaskCardProps {
  task: string;
}

export function TaskCard({task}: TaskCardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.text}>{task}</Text>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
