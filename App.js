import { StatusBar } from 'expo-status-bar';

// Routes
import Navigation from './src/routes/Navigation';
// Provider
import FavoritesProvider from './src/store/context/favorities';

export default function App() {
  return (
    <FavoritesProvider>
      <StatusBar style="light" />
      <Navigation />
    </FavoritesProvider>
  );
}