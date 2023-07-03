import {StyleSheet} from 'react-native';
import AppColors from './AppColors';

export default StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    cartCard:{
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: AppColors.white,
        marginVertical: 10,
        marginHorizontal:20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    
    title:{
        color:AppColors.purple,
        fontSize:24,
        fontFamily:'RobotoSlab-Black'

    },
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.g,
        marginBottom: 5, 
      },
      
    container12:{
        flex:1,
        padding:15,
        alignItems: 'center',
        justifyContent: "center",

    },
    mag:{
        width: 95,
        height: 50,
        alignSelf: 'flex-start',

    },
    btn:{
        width:'100%', backgroundColor:AppColors.yellow,
        height:50, borderRadius:30, alignItems:'center', justifyContent:'center',
        shadowColor:AppColors.pink, shadowOffset:{width:2, height:2},
        shadowOpacity:0.40, shadowRadius:7, elevation:4,
        
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

    },
    price:{  
        fontSize:19,
        fontWeight:"bold",
        color:AppColors.green},
    pricell:{
        fontSize:19,
        fontWeight:"bold",
        color:AppColors.green
    
    },
    image: {
        width: 120,
        height: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        resizeMode: 'stretch',
      },
      details:{
        fontSize:16,
      },
      name:{
        fontSize:18,
        fontWeight:"bold",
        backgroundColor:AppColors.yellow


      },
      detailsContainer:{
        flex: 1,
      },
      tmcontainer:{
        paddingHorizontal: 30,
        position: 'relative',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: AppColors.blue,
        borderWidth: 2,
        borderColor: AppColors.black,
        shadowColor: '#000',
        shadowOffset: { width: 0, height:1},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        justifyContent: 'space-between',
        marginBottom: 10, 

      },
      button:{
        backgroundColor: AppColors.black,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
      buttonText: {
        color: AppColors.blue,
        textAlign: 'center',
        fontSize: 16,
      },
      shoppingiteButton:{
        position: 'absolute',
        top: -100,
        right: -40,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        justifyContent: 'flex-start'
      },
      favoriteButton1: {
        position: 'absolute',
        top: -40,
        right: -30,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        justifyContent: 'flex-start'
      },
    header1:{width:'100%', height:'10%',backgroundColor:AppColors.yellow},
    list:{width:'100%', height:'80%'},
    input1:{width:'100%', height:'10%',backgroundColor:AppColors.white,padding:10},
    inputText:{width:'100%', height:40,backgroundColor:AppColors.white,fontSize:22,paddingHorizontal:10}
    
        
    
    
})