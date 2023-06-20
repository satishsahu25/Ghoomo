import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './screens/Home';
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';

const stack= createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <stack.Navigator>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Discover" component={Discover}/>
        <stack.Screen name="ItemScreen" component={ItemScreen}/>
        </stack.Navigator>
      </NavigationContainer>
     

    </TailwindProvider>
  );
}

