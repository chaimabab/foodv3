import { StyleSheet } from 'react-native';
import COLORS from '../../consts/colors';
const styles = StyleSheet.create({
    Commands: {
        paddingVertical: 10,
        display: "flex",
        width: "27.8%",
        height: "88.3%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 13,
    },

    CommandsHeader: {
        paddingVertical: 10,
        display: "flex",
        width: "100%",
        height: "10%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#fff',
    },

    textBold: {
        fontWeight: "bold",
        fontSize: 25,
        color: 'black',
        justifyContent:"space-between",
    },

    devider: {
        borderBottomColor: '#7e7e7e',
        borderBottomWidth: 0.3,
        width: "80%",
    },
    services: {
        marginVertical: 10,
        display: "flex",
        width: "100%",
        height: "15%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
    
    
    },

    service: {
        display: "flex",
        width: 80,
        height: 80,
        borderRadius: 20,
        elevation: 8,
        backgroundColor: '#F0F0F2',
        justifyContent: "center",
        alignItems: "center",
        
    },

    text1: {
        fontWeight: "bold", 
        color:COLORS.dark    
    },
    text2: {
        fontWeight: "bold", 
        color:COLORS.dark     
    },
    text3: {
        fontWeight: "bold", 
        color:COLORS.dark
        //color:"#008000"     
    },
    
    inputtext :{
        fontWeight:"bold",

    },

    paytext:{
        fontWeight:"bold",
        color:"#DF0F0F"
    },

    CommandsBoard: {
        display: "flex",
        width: "97%",
        height: "35%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "auto",
        backgroundColor: '#F0F0F2',
    },

    Calculations: {
        display: "flex",
        width: "97%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "auto",
        backgroundColor: '#fdfdfd',
    },
    Calculation: {
        display: "flex",
        width: "97%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "auto",
        backgroundColor: '#fefefe',
    },
    Payement: {
        display: "flex",
        width: "100%",
        height: "7%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },

    PayMethods: {
        marginVertical: 10,
        display: "flex",
        width: "80%",
        height: "10%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        
    },

    Med: {
        display: "flex",
        width: 80,
        height: 80,
        borderRadius: 20,
        elevation: 8,
        backgroundColor: '#F0F0F2',
        justifyContent: "center",
        alignItems: "center",
    },

    ButtonsFooter: {
        display: "flex",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 10,
    },

    header: {
        flexDirection:'row',
        marginHorizontal: 20,
        marginTop:1,
        },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
  //actionBtn: {
    //   width: 80,
    //   height: 30,
    //   backgroundColor: COLORS.primary,
    //   borderRadius: 30,
    //   paddingHorizontal: 5,
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignContent: 'center',
    //  },

    removeicon:{
        width: 30,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },

    addicon:{
        width: 30,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft:35,
        marginTop:-30
    },

    closeicon :{
        width: 25,
        height: 25,
        backgroundColor: COLORS.rouge,
        borderRadius: 30,
        paddingHorizontal: -2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginStart:70,
        marginTop:-40,
        marginRight:-27
    
    }
});

export { styles }