import { StyleSheet } from 'react-native';
import COLORS from '../../consts/colors';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    drawer: {
        width: "28.35%",
        height: "102.7%",
        backgroundColor: "#fff",
        position: "absolute",
        zIndex: 2,
        opacity: 1,
        borderRadius: 20,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        shadowColor: '#000',
        elevation: 4,

    },
    Categories: {
        paddingVertical: 10,
        display: "flex",
        width: "70%",
        height: "88.3%",
        justifyContent: "space-between", //justifyContent: "space-around",
        // alignItems: "right",
        flexDirection: "column",
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 13,
    },

    sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoriesListContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },

    categoriesListContainerVertical: {

        width: "100%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",

    },

    categoryBtnImgCon: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },

    ImgCat: {
        height: 35,
        width: 35,
        resizeMode: 'cover',
    },

    souscat: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingBottom: 100,
        flex: 1, 
    },
    souscatList: {
        width: "50%",
        height: "100%",
    },
    cat: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    addToCartBTn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      },

    modalContent: {
        width: '40%',
        height: '70%',
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

    modalContent2: {
        width: '85%',
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
    
    btnvalider :{
        padding: 10,
        backgroundColor:"green",
        fontWeight: 'bold',
        color:'white',
        marginTop:20,
        marginLeft:300,
    },

    btnannuler :{
        padding: 10,
        backgroundColor:COLORS.rouge,
        fontWeight: 'bold',
        color:'white',
        marginTop:-35,
        marginRight:300,
    },
    btnclose2 :{
        padding: 10,
        backgroundColor:COLORS.primary,
        fontWeight: 'bold',
        color:'white',
        marginTop:20,
        borderRadius: 5,
        marginTop:80,
    },
    rectangle: {
        width: 80,
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput: {
        width: '90%',
        height: '90%',
        padding: 5,
        fontSize: 16,
      },
    containerSize :{
        flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:-230
    },

    sizeButtonText2: {
		textAlign: 'center',
		fontWeight: 'bold',
	},

    sizeButton2: {
		backgroundColor: '#fedac5',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		margin: 5,
		//marginStart:50,
        marginTop:250,
        // marginRight:50,
        // marginLeft:50,
        marginHorizontal:30,
	},

    selectedSizeButton2: {
		backgroundColor: '#ffa500',
	},

    selectedSizeText2: {
		marginTop: 10,
		textAlign: 'center',
		// marginLeft:50,
		// marginRight:50,
        fontWeight:"bold",
	},


    /**ingredieeeeeeeent */

    containerIng: {
        padding: 25,
        marginTop:-15
    },

    ingredientsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
       marginLeft:20,
       justifyContent:"flex-start",
       marginTop:25
    },

    ingredientButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        padding: 10,
        margin: 4,
        width: 'auto', 
        marginHorizontal:5,
        marginRight:30      
    },

    selectedIngredientButton: {
        backgroundColor: COLORS.primary,
    },

    ingredientText: {
        //fontSize: 16,
        fontWeight:"bold",
        textAlign: 'center',

    },


    selectedIngredientsText: {
        //fontSize: 16,
        //marginTop: 16,
        //marginRight:120
        marginTop: 10,
		textAlign: 'center',
		// marginLeft:50,
		// marginRight:50,
        fontWeight:"bold",
    },

    /***suuppleeeemeeenttt */

    containerSupp: {
        padding: 25,
        marginTop:-15
    },


    SupplementContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
       marginLeft:20,
       justifyContent:"flex-start"
    },

    supplementButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        padding: 10,
        margin: 4,
        width: 'auto', 
        marginHorizontal:5,
        marginRight:30      
    },

    selectedSupplementButton: {
        backgroundColor: COLORS.primary,
    },

    SupplementText: {
        //fontSize: 16,
        fontWeight:"bold",
        textAlign: 'center',

    },

    selectedSupplementText: {
        //fontSize: 16,
        //marginTop: 16,
        //marginRight:120
        marginTop: 10,
		textAlign: 'center',
		// marginLeft:50,
		// marginRight:50,
        fontWeight:"bold",
    },

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

    pricetext :{
        marginTop: 10,
        fontWeight: "bold",
         fontSize: 14,
    },

    remisetext :{
        // fontWeight: "bold",
         fontSize: 14,
         marginLeft:10
    },
    tvatext:{
        // fontWeight: "bold",
         fontSize: 14,
         marginLeft:24,
    },
    percent :{
        marginTop:13
    },

    rectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginTop: 20,
      },
      
      rect: {
        width: '30%',
        height: 100,
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
      },

      ImgRev:{
        height: 35,
        width: 35,
        resizeMode: 'cover',
        marginRight:1070,
        marginTop:20
      },

      NomRev: {
        fontSize: 18, 
        fontWeight: "bold", 
        marginLeft: 20 ,
        marginTop: -20,
        marginStart:40,
    },
    // formules:{
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    // }

    formules: {
        marginTop: 10, 
        //alignSelf: "flex-end",
        // marginRight:-50
        marginLeft:25,
    
      },
      sectionCatTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: -10,
        marginLeft:100
      },
      sectionFormTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6,
        marginLeft:40
      },

});

export { styles }