import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import ticket from "../../consts/ticket";
// import {PrimaryButton} from '../../consts/button';
import { styles} from "./styles";

const CartScreen = ({food, update, setUpdate, setTicket }) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);

  const CartCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);

  const handleAdd = () => 
    { 
      setQuantity(quantity + 1); 
    }

  const handleRemove = () => {
    if (quantity > 1) {  
      setQuantity(quantity - 1); 
    }
  }  
  
  const HandleRemoveProdFromTicket = () => {
    // if (ticket && ticket.length > 0 && food) {
      ticket.pop(food);
      setUpdate(!update);
    // }
  };
  

  const calculateTotalPriceProduct = () => {
    return quantity * price; 
  }

  //   const HandleRemoveFromTicket = () =>{
  //     ticket.pop(food)
  //     setUpdate(!update)  
  // } 

  // const calculateTotalPriceTicket = () => {
  //   return price=+price; 
  // }

  const [supplement, setSupplement] = useState([]);
  const [selectedSupplement, setSelectedSupplement] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

    return (
      <View style={styles.cartCard}>
        <View
          style={{
            height: 100,
            marginLeft: 190,
            paddingVertical: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: -180 }}>
            {item.name}
          </Text>

          {item && item.size && item.size.length > 0
            ? item.size.map((s) => {
                return <Text style={{ color: "red" }}>sizes : {s}</Text>;
              })
            : ""}

          {item && item.ingredients && item.ingredients.length > 0
            ? item.ingredients.map((i) => {
                return <Text style={{ color: "red" }}>ingridients : {i}</Text>;
              })
            : ""}

          {item && item.supplement && item.supplement.length > 0
            ? item.supplement.map((sp) => {
                return <Text style={{ color: "red" }}>supplements : {sp}</Text>;
              })
            : ""}
          <Text
            style={{ fontSize: "17", fontWeight: "bold", marginLeft: -180 }}
          >
            {/*item.price} TND */}
            {calculateTotalPriceProduct()} TND
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{quantity}</Text>
          <View>
            <TouchableOpacity onPress={HandleRemoveProdFromTicket}>
              <Icon
                name="close"
                size={25}
                color={COLORS.white}
                style={styles.closeicon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemove} style={styles.removeicon}>
              <Icon name="remove" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdd} style={styles.addicon}>
              <Icon name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold",marginLeft: 130}}>
          Ticket
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        data={ticket ? ticket : ""}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20, marginLeft:220}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" ,marginLeft:-220}}>
                Prix Total
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" ,marginLeft:-50}}> TND </Text>
            </View>
            <View style={{ marginHorizontal: 30}}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: 30,
                    alignItem: "center",
                    justifyContent:'center',
                    marginLeft:-160,
                    marginRight:45,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "blod",
                      fontSize: 18,
                      marginLeft:10
                    }}
                  >
                    CHECKOUT
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  selectedInfoText: {
    fontSize:8,
    fontWeight:"bold"

  },

})

export default CartScreen;

