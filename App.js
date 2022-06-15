import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';

const App = () => {
  return (
    <NavigationContainer>
      <Login></Login>
    </NavigationContainer>
  );
}

export default App;

