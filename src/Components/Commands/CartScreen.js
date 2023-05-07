import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import ticket from "../../consts/ticket";
// import {PrimaryButton} from '../../consts/button';
import { styles } from "./styles";
import Categories from "../Categories";
import ticketProd from "../../consts/ticketProd";


const CartScreen = ({ food, update, setUpdate, calculateTotPriceCommand,props}) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);
  //calculateTotPriceCommand(food.totPrice);

/****************************Ajout de produit par image****************************/ 
  const CartCardProd = ({ item }) => {
    // const [price, setPrice] = useState(item.price);
    // const [quantity,setQuantity]= useState(1);
    // const handleAdd = () => {
    //   setQuantity(quantity + 1);;
    // };
    // const handleRemove = () => {
    //   if (quantity > 1) {
    //     setQuantity(quantity - 1);
    //   }
    // };
    // const totalPrice = quantity * price;

    const HandleRemoveProdFromTicket = () => {
      // if (ticket && ticket.length > 0 && food) {
      ticketProd.pop(food);
      //calculateTotPriceCommand(-food.totPrice);
      setUpdate(!update);
      // }
    };

    return (
      <View style={styles.cartCardProd}>
        <View
          style={{
            height: 100,
            //width:100,
            marginLeft: 190,
            paddingVertical: 20,
          }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, marginLeft: -180 }}
            >
              {" "}
              {item.name}{" "}
            </Text>

            <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
              Size : {item && item.size ? item.size.name : ""}
            </Text>

            <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 7 }}>
              {item.price} TND{" "}
            </Text>
            {/* <Text style={{marginLeft:-80}}> Prix: {totalPrice}</Text>          */}
          </View>
        </View>
        <View style={{}}>
          {/* <Text style={{ fontWeight: "bold", fontSize: 18 }}>{quantity}</Text> */}
          <View style={{ marginLeft: 20, alignItems: "center" }}>
            <TouchableOpacity onPress={HandleRemoveProdFromTicket}>
              <Icon
                name="close"
                size={25}
                color={COLORS.white}
                style={styles.closeicon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

/****************************Ajout de produit par popup****************************/ 
  const CartCard = ({item}) => {
    const [price, setPrice] = useState(item.price);

    const HandleRemoveProdFromTicket = () => {
      // if (ticket && ticket.length > 0 && food) {
      ticket.pop(food);
      //calculateTotPriceCommand(-food.totPrice);
      setUpdate(!update);
      // }
    };
    const [quantity,setQuantity]= useState(1);
    const PrixTotal = quantity * price;
    return (
      <View style={styles.cartCard}>
        <View
          style={{
            height: 100,
            //width:100,
            marginLeft: 190,
            paddingVertical: 20,
          }}
        >
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: -180 }}>
              {item.name}            
            </Text>
            {/* <Text style={{marginLeft:-80}}>Total Price : {totalPrice}</Text>          */}
        </View>

        <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
          Size : {item && item.size ? item.size.name : ""}
        </Text>

           {/* <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
            Size :
            {item && item.size && item.size.length > 0
              ? item.size.map((sz, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                      {sz.name}
                      {index < item.size.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text> */}

           <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
           Sans :
            {item && item.ingredients && item.ingredients.length > 0
              ? item.ingredients.map((i, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                      {i.name}
                      {index < item.ingredients.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text> 

          <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
          Supp : 
            {item && item.supplement && item.supplement.length > 0
              ? item.supplement.map((sp, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                      {sp.name}
                      {index < item.supplement.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text>

           {/* <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
            Prix :
            {item && item.prix && item.prix.length > 0
              ? item.prix.map((pr, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                      {pr.name}
                      {index < item.prix.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text>  */}

         {/* <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: -180 }}>
          {item.price} TND 
           {calculateTotalPriceProduct()} TND 
          </Text>   */}
        </View>
        <View >
          <View style={{marginLeft:20, alignItems: "center"}}>
            <TouchableOpacity onPress={HandleRemoveProdFromTicket}>
              <Icon
                name="close"
                size={25}
                color={COLORS.white}
                style={styles.closeicon}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.removeicon} onPress={handleRemove}>
              <Icon name="remove" size={25} color={COLORS.white}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addicon} onPress={handleAdd} >
              <Icon name="add" size={25} color={COLORS.white}></Icon>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  };



  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 130 }}>
          Ticket
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        data={ticket ? ticket : ""}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{
          paddingHorizontal: 40,
          marginTop: 20,
          marginLeft: 260,
        }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
            </View>
          </View>
        )}
      /><FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 60 }}
      data={ticketProd ? ticketProd : ""}
      renderItem={({ item }) => <CartCardProd item={item} />}
      ListFooterComponentStyle={{
        paddingHorizontal: 40,
        marginTop: 20,
        marginLeft: 260,
      }}
      ListFooterComponent={() => (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
          </View>
        </View>
      )}
    />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  selectedInfoText: {
    fontSize: 8,
    fontWeight: "bold",
  },
});

export default CartScreen;
