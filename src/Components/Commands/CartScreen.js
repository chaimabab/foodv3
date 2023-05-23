import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import ticket from "../../consts/ticket";
// import {PrimaryButton} from '../../consts/button';
import { styles } from "./styles";
import Categories from "../Categories";
import ticketProd from "../../consts/ticketProd";
import axios from 'axios'; 
import { async } from "node-stream-zip";



const CartScreen = ({ food, update, setUpdate, calculateTotPriceCommand,props,item}) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);

/****************************Ajout de produit par image****************************/ 
  const CartCardProd = ({item}) => {

    const HandleRemoveProdFromTicket = () => {
      ticketProd.pop(food);
      setUpdate(!update);

    };

    return (
      <View style={styles.cartCardProd}>
        <View
          style={{
            height: 145,
            //width:100,
            marginLeft: 190,
            paddingVertical: 20,
          }}
        >
        <View>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: -190 }}>{item.name}</Text>

        <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
          Size: {item && item.size ? item.size.name : ""}
        </Text>

        <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
            TVA: {item && item.tax ? item.tax : "0"} %
        </Text>
        <Text style={{ color: COLORS.grey, marginLeft: -190}}>
            Remise: {item && item.remise ? item.remise: "0"} %
        </Text>

        <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
          Prix HT: {item && item.size ? item.size.price : ""} DT
        </Text>

      </View>
      </View>
        <View style={{}}>
          <View style={{marginLeft:20, alignItems: "center"}}>
            <TouchableOpacity onPress={HandleRemoveProdFromTicket}>
              <Icon
                name="close"
                size={20}
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



    // const sendProductsToLaravel = async () => {
    //   try {
    //     const detail = ticket.map((item) => ({
    //       name: item.name,
    //       size: item.size,
    //       quantity: item.quantity,
    //       ingredients: item.ingredients,
    //       supplement: item.supplement,
    //       priceHT: item.priceHT,
    //       price: item.price,
    //       tax: item.tax,
    //       remise: item.remise,
    //     }));
    //     const response = await axios.post("http://192.168.1.13/food/api/order/place", { detail });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // const sendProductsToLaravel =  (detail) => {

    //     axios.post("http://192.168.1.13/food/api/order/place", detail )
    //     .then((response) =>{
    //       console.log('details envoye');
    //     })

    //    .catch ((error) => {
    //     console.error('erreuuuuuuuuur',error);
    //    });
      
    //   detail = ticket.map((item) => ({
    //     name: item.name,
    //     size: item.size,
    //     quantity: item.quantity,
    //     ingredients: item.ingredients,
    //     supplement: item.supplement,
    //     priceHT: item.priceHT,
    //     price: item.price,
    //     tax: item.tax,
    //     remise: item.remise,
    //   }));

    // };




    
    const [price, setPrice] = useState(item.price);

    const HandleRemoveProdFromTicket = () => {
      ticket.pop(food);
      // calculateTotPriceCommand(-food.totPrice);
      setUpdate(!update);
    };
    const [quantity,setQuantity]= useState(1);
    const PrixTotal = quantity * price;




    return (
      <View style={styles.cartCard}>

        <View
          style={{
            height: 170,
            marginLeft: 190,
            paddingVertical: 20,
            marginTop:-20,
          }}
        >
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: -190 }}>
              {item.name}            
            </Text>
        </View> 

         <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
          Size: {item && item.size ? item.size.name : ""}
        </Text>

        <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
            Qte: {item && item.quantity ? item.quantity : ""} 
        </Text>


        {item.ingredients && item.ingredients.length > 0 && (
        <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
          Sans:{" "}
          {item.ingredients.map((i, index) => {
            return (
              <Text
                style={{ color: COLORS.grey, marginLeft: -190 }}
                key={index}
              >
                {i.name}
                {index < item.ingredients.length - 1 ? "," : ""}
              </Text>
            );
          })}
        </Text>
      )} 


           {/* <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
           Sans: {item && item.ingredients && item.ingredients.length > 0
              ? item.ingredients.map((i, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
                      {i.name}
                      {index < item.ingredients.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text>  */}


        {item.supplement && item.supplement.length > 0 && (
              <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
                Supp:{" "}
                {item.supplement.map((sp, index) => {
                  return (
                    <Text
                      style={{ color: COLORS.grey, marginLeft: -190 }}
                      key={index}
                    >
                      {sp.name}
                      {index < item.supplement.length - 1 ? "," : ""}
                    </Text>
                  );
                })}
              </Text>
            )}


          {/* <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
          Supp: {item && item.supplement && item.supplement.length > 0
              ? item.supplement.map((sp, index) => {
                  return (
                    <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
                      {sp.name}
                      {index < item.supplement.length - 1 ? "," : ""}
                    </Text>
                  );
                })
              : ""}
          </Text> */}


          <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
            TVA: {item && item.tax ? item.tax : "0"} %
          </Text>
          <Text style={{ color: COLORS.grey, marginLeft: -190}}>
            Remise: {item && item.remise ? item.remise: "0"} %
          </Text>

          <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
            Prix Initial: {item && item.priceHT ? item.priceHT : ""} DT
          </Text>

          <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
            Prix Total: {item && item.price ? item.price : ""} DT
          </Text>

          {/* <TouchableOpacity
            style={styles.detailsButton}
            onPress={handleModalOpen}
          >
            <Text style={styles.detailsButtonText}>Voir les détails</Text>
          </TouchableOpacity> */}

        </View>

        <View >
          <View style={{marginLeft:20, alignItems: "center"}}>
            <TouchableOpacity onPress={HandleRemoveProdFromTicket}>
              <Icon
                name="close"
                size={20}
                color={COLORS.white}
                style={styles.closeicon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button size="sm" color="success" title="Valider" />
        {/* onPress={sendProductsToLaravel(detail)} */}
      </View>
  
    );
  };


  let totalPrice = 0;
  ticket.forEach((item) => {
    totalPrice += item.price;
  });
  ticketProd.forEach((item) => {
    totalPrice += item.size.price
  });

  let totalTax = 0;
  ticket.forEach((item) => {
    totalTax += item.tax;
  });

  ticketProd.forEach((item) => {
    totalTax += item.tax
  });




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
    {/* <Text style={{ color: COLORS.grey, marginLeft: -10,fontWeight: "bold"}}>
      Prix total : {totalPrice} DT
    </Text> */}


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
