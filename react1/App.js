import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SSP AL</Text>
      <View style={styles.itemGrid}>
      <Text style={styles.p}>fundamentos de react native</Text>
      <Text style={styles.p}>SSP AL aaaa</Text>
      <Text style={styles.p}>SSP AL</Text>
      <Text style={styles.pv}>SSP AL</Text>
      <Text style={styles.pv}>SSP AL</Text>
      <Text style={styles.pv}>SSP AL</Text>
      <Text style={styles.pv}>SSP AL</Text>
      <Text style={styles.pv}>SSP AL</Text>
      <Text style={styles.pv}>SSP AL</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    height: 60,
    fontSize: 30,
    fontStyle: 'italic',
    //textDecorationLine: 'underline',
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    color: 'black',
    alignItems: 'left',
    //textDecorationLine: 'underline',Para backgroundColor: 'lightblue'
    mpadding: 12,
    marginTop: 12,vred,
    //textDecorationLine: 'underline',Para backgroundColor: 'lightblue'
   
    
  },
  p: {
    fontSize: 20,
    fontStyle: 'italic',
    //textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 255, 0, 0.5)', // Verde com 50% de transparência,
    padding: 5,
    margin: 15,
    color: 'blue',
    borderRadius: 10
  },
  pv: {
    fontSize: 20,
    fontStyle: 'italic',
    //textDecorationLine: 'underline',
    backgroundColor: 'red', 
    margin: 15,
    color: 'blue',
    //textDecorationLine: 'underline',Para backgroundColor: 'lightblue'
    mpadding: 12,
    marginTop: 12,
    borderRadius: 10
  },
  opcoes: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
