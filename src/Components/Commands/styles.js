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
        marginTop:-35
    },

    textBolded: {
        color: 'black',
        justifyContent:"space-between",
        marginTop:-35
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
        marginTop:-30
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
        marginTop:-55,
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

    inputaddres:{
    

    },

    paytext:{
        fontWeight:"bold",
        color:"#DF0F0F"
    },

    CommandsBoard: {
        display: "flex",
        width: "97%",
        height: "43%",
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
        marginTop:-10
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
        marginTop:-5
        
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

    Med2: {
        display: "flex",
        width: 80,
        height: 80,
        borderRadius: 20,
        elevation: 8,
        backgroundColor: '#F0F0F2',
        justifyContent: "center",
        alignItems: "center",
        marginTop:-45,
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
        height: 160,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
   
    },

    ticketItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      label: {
        fontWeight: 'bold',
        width: 100,
        marginRight: 10,
      },
      value: {
        flex: 1,
        color: COLORS.grey,
      },
      valueText: {
        marginRight: 5,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      },
      modalContent: {
        width: '40%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 0,
    },

    cartCardProd: {
        height: 120,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    
//   actionBtn: {
//       width: 80,
//       height: 30,
//       backgroundColor: COLORS.primary,
//       borderRadius: 30,
//       paddingHorizontal: 5,
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignContent: 'center',
//      },

//     removeicon:{
//         width: 30,
//         height: 30,
//         backgroundColor: COLORS.primary,
//         borderRadius: 30,
//         paddingHorizontal: 2,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignContent: 'center',
//     },

//     addicon:{
//         width: 30,
//         height: 30,
//         backgroundColor: COLORS.primary,
//         borderRadius: 30,
//         paddingHorizontal: 2,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignContent: 'center',
//         marginLeft:35,
//         marginTop:-30
//     },

    closeicon :{
        width: 20,
        height: 20,
        backgroundColor: COLORS.rouge,
        borderRadius: 30,
        paddingHorizontal: -2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        //marginStart:70,
        marginTop:-40,
        //marginRight:30,
        marginLeft:50
    
    },

    selected: {
        backgroundColor: '#fedac5',
      },
    unselected: {},

      textliv:{
      //marginLeft: 10,
      fontSize: 16,
      color: '#333',
      marginTop:100,
      marginRight:-200
    },

    selectedOption: {
        backgroundColor: "#fedac5",
      },
      
    selectedService: {
        backgroundColor: "#fedac5",
      },

    commande: {
        display: "flex",
        width: "100%",
        height: "7%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginTop:-45,
        marginLeft:200
    } ,

    livraison:{
        marginTop:-30,
        flexDirection:'column'
    },

    fermerLiv:{
        backgroundColor:"green",
        padding: 10,
        fontWeight: 'bold',
        color:'white',
        borderRadius: 5,
    },

    label: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize:16
      },
      input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor:COLORS.secondary,
        borderRadius: 5,
        padding: 5,
        width: '85%',
        height:'11%'
      },
      buttonContainer: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop:50,
        borderRadius: 5,
        overflow: 'hidden',
      },
});

export { styles }