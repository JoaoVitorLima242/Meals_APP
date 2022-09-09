import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';
import CategoriesScreen from './src/screens/Categories';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoriesScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
