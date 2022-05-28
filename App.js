
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavoritesScreen';
import { color } from 'react-native-reanimated';
import FavoriteContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#7858A6' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#947EC3' },
      drawerContentStyle: {
        backgroundColor: '#7858A6',
      },
      drawerInactiveTintColor: '#ccc',
      drawerActiveTintColor: 'white',
      drawerActiveBackgroundColor: '#371B58'
    }}>
      <Drawer.Screen name='categories'
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name='favourites'
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#7858A6' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#947EC3' }

          }}>
            <Stack.Screen name='MealsCategories'
              component={DrawerNavigator}
              options={{
                title: 'all categories',
                headerShown: false
              }} />
            <Stack.Screen name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen name='MealDetail'
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>

    </>

  );
}

const styles = StyleSheet.create({

});
