import {StyleSheet} from 'react-native';
import AppColors from './AppColors';

export default StyleSheet.create({
    title:{
        color:AppColors.purple,
        fontSize:24,
        fontFamily:'RobotoSlab-Black'

    },
    container: {
        flex:1,
        padding:30,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: AppColors.gray_10
    },
    btn:{
        width:'100%', backgroundColor:AppColors.yellow,
        height:50, borderRadius:30, alignItems:'center', justifyContent:'center',
        shadowColor:AppColors.pink, shadowOffset:{width:2, height:2},
        shadowOpacity:0.40, shadowRadius:7, elevation:4
    },
    btn_text:{
        color:AppColors.gray_90,
        fontSize:15,
        fontFamily:'RobotoSlab-Black'
    },
    logo:{
        width:300,
        resizeMode:'contain'
    },
    forn_container:{
        width:'100%',
        marginTop:20,
        alignItems:'center'
    },
    screen_title:{
        fontFamily:'RobotoSlab-Black',
        color:AppColors.white,
        fontSize:30
    },
    screen_context:{
        fontFamily:'RobotoSlab-Regular',
        color:AppColors.white,
        fontSize:15,
        marginTop:10,
        textAlign:'center'

    },
    input:{
        width:'100%',
        height:60,
        backgroundColor:AppColors.white,
        marginTop:12,
        borderRadius:30,
        fontFamily:'RobotoSlab-Regular',
        fontSize:20,
        paddingHorizontal:20

    },
    simple_btn:{
        width:'100%', marginTop:20, alignItems:'center'
    },
    simple_btn_text:{
        fontFamily:'RobotoSlab-Medium',
        fontSize:16,
        color:AppColors.white

    }
        

    
})