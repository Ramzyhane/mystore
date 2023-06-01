import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppColors from '../components/AppColors';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




import Dashboard from '../screens/dashboard/dashboard';
import Settings from '../screens/settings/settings';
import Favorites from '../screens/favorites/favorites';

//Store Screen
import Store,{screenOptions as StorescreenOptions} from '../screens/store/store';
import SubCategory,{screenOptions as SubCategoryscreenOptions}  from '../screens/store/subCategory';
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
            <StoreStackNavigator.Screen name='SubCategory' component={SubCategory} options={SubCategoryscreenOptions} />
            <StoreStackNavigator.Screen name='Products' component={Products} options={ProductsscreenOptions} />
            <StoreStackNavigator.Screen name='ProductDetails' component={ProductDetails} options={DetailsscreenOptions} />
        </StoreStackNavigator.Navigator>
    )
}



const AppTabs = createMaterialBottomTabNavigator();
export const TabsNavigator =() =>{
    return(
        <AppTabs.Navigator activeColor={AppColors.white} inactiveColor={AppColors.pink} barStyle={{backgroundColor: AppColors.purple}}>
            <AppTabs.Screen name='DashsboardTab' component={Dashboard} 
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