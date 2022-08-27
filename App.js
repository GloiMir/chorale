import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Accueil from './Screens/accueil'
import Liste from './Screens/liste'
import Liste2 from './Screens/liste2'
import Liste3 from './Screens/liste3'
import Song from './Screens/song'
import Song2 from './Screens/song2'
import Song3 from './Screens/song3'
import Aide from './Screens/aideStack'
import Application from './Screens/apropoStack'

const Drawer = createDrawerNavigator();

const MyTabs = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Principale'
                component={Accueil}
                options={{
                    headerShown: true,
                    headerTitle: 'ParméS',
                    headerStyle: {
                        backgroundColor: '#464965',
                        height:100
                    },
                    headerTitleStyle: {
                        fontSize:25,
                    },
                    title:'Principale',
                }}
            />
            <Drawer.Screen
                name='Aide'
                component={Aide}
                options={{
                    headerShown: true,
                    headerTitle: 'ParméS',
                    headerStyle: {
                        backgroundColor: '#464965',
                        height:100
                    },
                    headerTitleStyle: {
                        fontSize:25,
                    },
                    title:'Aide'
                }}
            />
            <Drawer.Screen
                name='Application'
                component={Application}
                options={{
                    headerShown: true,
                    headerTitle: 'ParméS',
                    headerStyle: {
                        backgroundColor: '#464965',
                        height:100
                    },
                    headerTitleStyle: {
                        fontSize:25,
                    },
                    title:'A propos'
                }}
            />
        </Drawer.Navigator>
    );
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Tabs"
                screenOptions={{
                    headerShown: false,
                }}
            >   
                <Stack.Screen name="Tabs" component={MyTabs} />
                <Stack.Screen
                    name="Liste"
                    component={Liste}
                    options={{
                        headerShown: true,
                        headerTitle: 'Chorale lumière',
                        headerStyle: {
                            backgroundColor: '#464965',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:25,
                        },
                    }}
                />
                <Stack.Screen
                    name="Liste2"
                    component={Liste2}
                    options={{
                        headerShown: true,
                        headerTitle: 'Chorale des mamans',
                        headerStyle: {
                            backgroundColor: '#464965',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:25,
                        },
                    }}
                />
                <Stack.Screen
                    name="Liste3"
                    component={Liste3}
                    options={{
                        headerShown: true,
                        headerTitle: 'Chorale de l\'écodim',
                        headerStyle: {
                            backgroundColor: '#464965',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:25,
                        },
                    }}
                />
                <Stack.Screen
                    name="Song"
                    component={Song}
                    options={{
                        headerShown: true,
                        headerTitle: 'Chorale lumière',
                        headerStyle: {
                            backgroundColor: '#464965',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:25,
                        },
                    }}
                />
                <Stack.Screen
                    name="Song2"
                    component={Song2}
                    options={{
                        headerShown: true,
                        headerTitle: 'Chorale des mamans',
                        headerStyle: {
                            backgroundColor: '#464965',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:25,
                        },
                    }}
                />
                <Stack.Screen
                    name="Song3"
                    component={Song3}
                    options={{
                        headerShown: true,
                        headerTitle: 'Chorale de l\'écodim',
                        headerStyle: {
                            backgroundColor: '#464965',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:25,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;