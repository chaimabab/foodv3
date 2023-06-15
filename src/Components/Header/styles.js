import { StyleSheet } from 'react-native';
import COLORS from '../../consts/colors';
const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        display: "flex",
        width: "100%",
        height: "10%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 45,
        backgroundColor: '#fff',
    },


    inputContainer: {
        width: 500,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    bienvenueText:{
        marginLeft:-300,
        marginTop:-20,

    },

    input: {
        justifyContent: "space-between"
    },



    logo: {
        width: 60,
        height: 60,
        marginLeft:-130,
        marginTop:-20
      },


    text: {
        fontSize: 15,
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 25,
    },

    buttons: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "6%"
    },

    btn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 8,
        marginLeft:45
    },

});

export { styles }