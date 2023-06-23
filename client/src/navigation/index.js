import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppColors from '../components/AppColors';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



//Store Dashboard
import Dashboard,{screenOptio as DashboardscreenOptio } from '../screens/dashboard/dashboard';
import Cars,{screenOptio as CarsscreenOptio } from '../screens/dashboard/cars';
import Tools,{screenOptio as ToolsscreenOptio } from '../screens/dashboard/tools';
import Grocery,{screenOptio as GroceryscreenOptio } from '../screens/dashboard/grocery';
import Gr,{screenOptio as GrscreenOptio } from '../screens/dashboard/gr';
import To,{screenOptio as ToscreenOptio } from '../screens/dashboard/to';
import One_car,{screenOptio as One_carscreenOptio } from '../screens/dashboard/One_car';


const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator screenOptions={Options}>
            <DashboardStackNavigator.Screen name='Dashboard' component={Dashboard} options={DashboardscreenOptio} />
            <DashboardStackNavigator.Screen name='cars' component={Cars} options={CarsscreenOptio} />
            <DashboardStackNavigator.Screen name='tools' component={Tools} options={ToolsscreenOptio} />
            <DashboardStackNavigator.Screen name='grocery' component={Grocery} options={GroceryscreenOptio} />
            <DashboardStackNavigator.Screen name='gr' component={Gr} options={GrscreenOptio} />
            <DashboardStackNavigator.Screen name='to' component={To} options={ToscreenOptio} />
            <DashboardStackNavigator.Screen name='One_car' component={One_car} options={One_carscreenOptio}  />

        </DashboardStackNavigator.Navigator>
    )

}

const Options = {
    headerStyle:{backgroundColor:AppColors.blue},
    headerTintColor: AppColors.yellow,
    headerTitleStyle:{fontFamily: 'RobotoSlab-Medium'}
}

import Settings from '../screens/settings/settings';
import Favorites from '../screens/favorites/favorites';

//Store Screen
import Store,{screenOptions as StorescreenOptions} from '../screens/store/store';
import Products,{screenOptions as ProductsscreenOptions}  from '../screens/store/products';
import ProductDetails,{screenOptions as DetailsscreenOptions}  from '../screens/store/productDetalis';

const defaultNavOptions = {
    headerStyle: {backgroundColor: AppColors.gray_90},
    headerTintColor: AppColors.pink,
    headerTitleStyle: {fontFamily: 'RobotoSlab-Medium'}
}

const StoreStackNavigator = createNativeStackNavigator();
export const StoreStack = () => {
    return(
        <StoreStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <StoreStackNavigator.Screen name='Category' component={Store} options={StorescreenOptions} />
            <StoreStackNavigator.Screen name='Products' component={Products} options={ProductsscreenOptions} />
            <StoreStackNavigator.Screen name='ProductDetails' component={ProductDetails} options={DetailsscreenOptions} />
           
        </StoreStackNavigator.Navigator>
    )
}



const AppTabs = createMaterialBottomTabNavigator();
export const TabsNavigator =() =>{
    return(
        <AppTabs.Navigator activeColor={AppColors.g} inactiveColor={AppColors.pink} barStyle={{backgroundColor: AppColors.purple}}>
            <AppTabs.Screen name='DashsboardTab' component={DashboardStack} 
            options={{tabBarLabel: 'Main',tabBarIcon: ({color}) => (<MaterialCommunityIcons name='view-dashboard' color={color} size={30} />)}} />

            <AppTabs.Screen name='StoreTab' component={StoreStack}
            options={{tabBarLabel: 'Store',tabBarIcon: ({color}) => (<Entypo name='shopping-cart' color={color} size={30} />)} }/>

            <AppTabs.Screen name='FavoritesTab' component={Favorites}
            options={{tabBarLabel: 'Favorites',tabBarIcon: ({color}) => (<Fontisto name='star' color={color} size={30} />)}}/>


            <AppTabs.Screen name='SettingsTab' component={Settings}
            options={{tabBarLabel: 'Settings',tabBarIcon: ({color}) => (<FontAwesome name='gears' color={color} size={30} />) }}/>
           
        </AppTabs.Navigator>
    )
}