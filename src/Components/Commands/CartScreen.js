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

const CartScreen = ({ food, update, setUpdate }) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);


  const CartCard = ({ item }) => {
    const [price, setPrice] = useState(item.price);

    // const [quantity,setQuantity]= useState(1);
    // const handleAdd = () => {
    //   setQuantity(quantity + 1);;
    // };
    // const handleRemove = () => {
    //   if (quantity > 1) {
    //     setQuantity(quantity - 1);
    //   }
    // };

    const HandleRemoveProdFromTicket = () => {
      // if (ticket && ticket.length > 0 && food) {
      ticket.pop(food);
      setUpdate(!update);
      // }
    };

    // const calculateTotalPriceProduct = () => {
    //   return quantity * price;
    // };

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

          <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
          size :
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
          </Text>

          <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
          sans :
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
          supp :
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

          <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
          prix :
            {item && item.price && item.price.length > 0
              ? item.price.map((pr, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                      {pr.name}
                      {index < item.price.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text>


          {/* <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: -180 }}>
          {item.price} TND 
           {calculateTotalPriceProduct()} TND 
          </Text> */}
        </View>

        <View style={{ marginRight: 20, alignItems: "center" }}>
          {/* <Text style={{ fontWeight: "bold", fontSize: 18 }}>{quantity}</Text> */}
          <View>
            <TouchableOpacity 
             onPress={HandleRemoveProdFromTicket} >
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
              {/* <Text
                style={{ fontSize: 18, fontWeight: "bold", marginLeft: -220 }}
              >
                Prix Total
              </Text> */}
              {/* <Text
                style={{ fontSize: 18, fontWeight: "bold", marginLeft: -50 }}
              >
                {" "}
                TND{" "}
              </Text> */}
            </View>
            {/* <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: 30,
                    alignItem: "center",
                    justifyContent: "center",
                    marginLeft: -160,
                    marginRight: 45,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "blod",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    CHECKOUT
                  </Text>
                </View>
              </TouchableOpacity>
            </View> */}
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
