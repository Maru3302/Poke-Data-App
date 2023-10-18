import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#E32730',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#63C2E8',
  },
  buttonText: {
    fontSize: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
  },
  searchButton: {
    backgroundColor: '#D7252B',
    borderRadius: 8,
    padding: 10,
  },
  searchIcon: {
    color: 'white',
    fontSize: 20, 
  },
  imagenBanner:{
    top: -20,
    maxWidth: '100%',
    maxHeight: '30%',
    borderRadius: 20, 
  },
});

export default styles;
