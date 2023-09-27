import { FlatList, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Constants from 'expo-constants'

export default function App() {
  
  /* function renderItem({item}) {
    return (<Text>{item.lastname}</Text>)
  } */

  /* const renderItem = ({item}) => (
    (<Text>{item.lastname}</Text>)
  ) */
  
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row person={item}/>
        )}

      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});
