import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import CustonTabBar from '../components/CustonTabBar'
import Manifestation from '../screens/Manifestation'
import NewManifestation from '../screens/NewManifestation'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=> <CustonTabBar{...props} />}>
        <Tab.Screen name="Manifestation" component={Manifestation}/>
        <Tab.Screen name="NewManifestation" component={NewManifestation}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
)