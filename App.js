import { StatusBar } from 'expo-status-bar';

// Routes
import Navigation from './src/routes/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}