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



const CartScreen = ({ food, update, setUpdate, calculateTotPriceCommand,props,item}) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
// const closeModal = () => {
//   setShowModal(false);
// };

const handleCloseModal = () => {
  setShowModal(false);
};



  // const [selectedItems, setSelectedItems] = useState([]);
  // const [showTicketModal, setShowTicketModal] = useState(false);
  
  // const handleSelectItem = (item) => {
  //   setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  // };

  // const openTicketModal = () => {
  //   setShowTicketModal(true);
  // };
  
  // const closeTicketModal = () => {
  //   setSelectedItems([]);
  //   setShowTicketModal(false);
  // };

  
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
  const CartCard = ({item,handleSelectItem}) => {

    // const sendProductsToLaravel = async () => {
    //   try {
    //     // Préparez les données à envoyer
    //     const products = ticket.map((item) => ({
    //       product: item.name,
    //       variant: item.size,
    //       quantity: item.quantity,
    //       ingredients: item.ingredients,
    //       addons: item.supplement,
    //       priceHT: item.priceHT,
    //       price: item.price,
    //       tax: item.tax,
    //       discount: item.remise,

    //     }));
    //     console.log(products); // Ajout de console.log pour vérifier les valeurs de products

    //     // Envoyez les données à Laravel
    //     const response = await axios.post("http://192.168.1.13/food/api/order/place", { products });
    //     // Traitez la réponse de Laravel si nécessaire
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    
    const [price, setPrice] = useState(item.price);

    const HandleRemoveProdFromTicket = () => {
      ticket.pop(food);
      // calculateTotPriceCommand(-food.totPrice);
      setUpdate(!update);
    };
    const [quantity,setQuantity]= useState(1);
    const PrixTotal = quantity * price;

    const itemWithDetails = {
      ...item,
      supplements: item.supplement.map((sp) => sp.name),
      ingredients: item.ingredients.map((i) => i.name),
    };

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

        {itemWithDetails.ingredients.length > 0 && (
          <Text style={{color: COLORS.grey, marginLeft: -190}}>
            Sans: {itemWithDetails.ingredients.join(", ")}
          </Text>
        )}

        {itemWithDetails.supplements.length > 0 && (
          <Text style={{color: COLORS.grey, marginLeft: -190}}>
            Supp: {itemWithDetails.supplements.join(", ")}
          </Text>
        )}


        {/* {item.ingredients && item.ingredients.length > 0 && (
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
      )}  */}


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


        {/* {item.supplement && item.supplement.length > 0 && (
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
            )} */}


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
        {/* <Button size="sm" color="success" title="Valider" onPress={sendProductsToLaravel} /> */}

        {/* <TouchableOpacity onPress={openModal}>
          <Text>Afficher les détails</Text>
        </TouchableOpacity> */}

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


  // const TicketModal = ({ items, closeModal }) => {
  //   return (
  //     <Modal visible={showModal} onRequestClose={closeModal}>
  //       <View>
  //         <Text>Ticket Final</Text>
  //         {/* Afficher les détails des produits sélectionnés */}
  //         {items.map((item, index) => (
  //           <View key={index}>
  //             <Text>Nom: {item.name}</Text>
  //             <Text>Taille: {item.size.name}</Text>
  //             <Text>Quantité: {item.quantity}</Text>
  //             {/* Afficher les autres détails */}
  //           </View>
  //         ))}
  //         <Button title="Fermer" onPress={closeModal} />
  //       </View>
  //     </Modal>
  //   );
  // };

  

  const renderCartCard = ({ item }) => {
    return <CartCard item={item} />;
  };

  // const placeOrder = async () => {
  //   try {
  //     const orderItems = ticket.map((item) => {
  //       return {
  //         name: item.name,
  //         size: item.size ? item.size.name : "",
  //         quantity: item.quantity ? item.quantity : 0,
  //         ingredients: item.ingredients ? item.ingredients.map(i => i.name) : [],
  //         supplement: item.supplement ? item.supplement.map(sp => sp.name) : [],
  //         tax: item.tax ? item.tax : 0,
  //         remise: item.remise ? item.remise : 0,
  //         priceHT: item.priceHT ? item.priceHT : 0,
  //         price: item.price ? item.price : 0,
  //       };
  //     });
  //     console.log(orderItems); // Ajout de console.log pour vérifier les valeurs de products

  //     const orderData = {
  //       items: orderItems,
  //       // totalPrice,
  //       // totalTax,
  //     };
  

  //     const response = await axios.post(
  //       "http://192.168.1.13/food/api/order/place",
  //       orderData
  //     );

  //     console.log("Order placed successfully:", response.data);
  //     // Effectuer d'autres actions après avoir placé la commande
  //   } catch (error) {
  //     console.log("Error placing order:", error);
  //     // Gérer l'erreur d'une manière appropriée
  //   }
  // };


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
        renderItem={renderCartCard}
        ListFooterComponentStyle={styles.footerContainer}
        ListFooterComponent={() => (
          <View style={styles.footerContent}>
            <TouchableOpacity
            
              onPress={openModal}
              disabled={ticket.length === 0}
            >
              <Text >Voir le ticket</Text>
            </TouchableOpacity>
          </View>
        )}

        // renderItem={({ item }) => <CartCard item={item} />}
        // ListFooterComponentStyle={{
        //   paddingHorizontal: 40,
        //   marginTop: 20,
        //   marginLeft: 260,
        // }}
        // ListFooterComponent={() => (
        //   <View>
        //     <View
        //       style={{
        //         flexDirection: "row",
        //         justifyContent: "space-between",
        //         marginVertical: 15,
        //       }}
        //     >
        //     </View>
        //   </View>
        // )}
        
      />
      <TicketModal items={ticket} showModal={showModal} handleCloseModal={handleCloseModal} />

      <FlatList
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

const TicketModal = ({ items, showModal, handleCloseModal}) => {
  let totalPrice = 0;
  ticket.forEach((item) => {
    totalPrice += item.price;
  });
  let totalTax = 0;
  ticket.forEach((item) => {
    totalTax += item.tax;
  });
  return (
    <Modal visible={showModal} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.ticketModalTitle}>Ticket Final</Text>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.ticketItemContainer}>
              <Text style={styles.ticketItemName}>Nom: {item.name}</Text>
              <Text style={styles.ticketItemInfo}>
                Taille: {item.size.name}
              </Text>
              <Text style={styles.ticketItemInfo}>
                Quantité: {item.quantity}
              </Text>
              {item.ingredients && item.ingredients.length > 0 && (
              <Text style={styles.ticketItemInfo}>
                Sans: {item.ingredients.map((ingredient) => ingredient.name).join(", ")}
              </Text>
            )}
            {item.supplement && item.supplement.length > 0 && (
              <Text style={styles.ticketItemInfo}>
                Supp: {item.supplement.map((supp) => supp.name).join(", ")}
              </Text>
            )}
            <Text style={styles.ticketItemInfo}>
              TVA: {item && item.tax ? item.tax : "0"} %
            </Text>
            <Text style={styles.ticketItemInfo}>
              Remise: {item && item.remise ? item.remise : "0"} %
            </Text>
            <Text style={styles.ticketItemInfo}>
              Prix Initial: {item && item.priceHT ? item.priceHT : ""} DT
            </Text>
            <Text style={styles.ticketItemInfo}>
              Prix : {item && item.price ? item.price : ""} DT
            </Text>
              {/* Afficher les autres détails */}
            </View>
          )}
        />
        <Text> Prix Total: {totalPrice} DT</Text>
        <Button title="Fermer" onPress={handleCloseModal} />
      </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  selectedInfoText: {
    fontSize: 8,
    fontWeight: "bold",
  },
});

export default CartScreen;
