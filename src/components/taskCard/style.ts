import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  textSection: {},
  text: {
    fontSize: 16,
    color: 'black',
  },
  buttonSection: {
    columnGap: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 5,
    backgroundColor: 'blue',
  },
  deleteButton: {
    padding: 5,
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
