import {StyleSheet} from 'react-native';

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

export default styles;
