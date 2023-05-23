import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import ticket from "../../consts/ticket";
import {PrimaryButton} from '../../consts/button';
import { styles } from "./styles";
import Categories from "../Categories";
import ticketProd from "../../consts/ticketProd";
import CartScreen from "./CartScreen";


const TicketPopup = ({ food, update, setUpdate, calculateTotPriceCommand,props}) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);

/****************************Ajout de produit par image****************************/ 
  const CartCardProd = ({item}) => {

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
                <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: -180 }}> {item.name} </Text>
                <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                    Size : {item && item.size ? item.size.name : ""}
                </Text>
                <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
                    Prix : {item && item.size ? item.size.price : ""} DT
                </Text>
            </View>
        </View>
    </View>
    );
  };

/****************************Ajout de produit par popup****************************/ 
  const CartCard = ({item}) => {

    const [price, setPrice] = useState(item.price);
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
            marginTop:-20,
          }}
        >
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: -180 }}>
              {item.name}            
            </Text>
        </View>

        <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
          Size : {item && item.size ? item.size.name : ""}
        </Text>

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

          <Text style={{ color: COLORS.grey, marginLeft: -180 }}>
            Prix : {item && item.price ? item.price : ""}
          </Text>

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


export default TicketPopup;




