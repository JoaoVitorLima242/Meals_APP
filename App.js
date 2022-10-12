import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

// Routes
import Navigation from './src/routes/Navigation';
// Redux
import { store } from './src/store/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigation />
    </Provider>
  );
}