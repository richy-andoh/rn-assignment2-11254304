import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Name is 
        <Text style={styles.boldText}> Richmond Manu Andoh</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24
  },

  boldText: {
    fontWeight: "bold"
  }
});
