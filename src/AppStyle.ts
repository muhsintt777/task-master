import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list: {
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
    position: 'absolute',
    bottom: 50,
    right: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 99,
    backgroundColor: 'blue',
  },
  fab: {
    zIndex: 999,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default styles;
