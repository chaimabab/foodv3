import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  Image
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import ticket from "../../consts/ticket";
// import {rougeButton} from '../../consts/button';
import { styles } from "./styles";
import Categories from "../Categories";
import ticketProd from "../../consts/ticketProd";
import axios from 'axios'; 
import Commands from "../Commands";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartScreen = ({
  food,
  update,
  setUpdate,
  calculateTotPriceCommand,
  props,
  item,
  selectedService,
  handlePressService,
  selectedOption,
  donneValue,
  renduValue,
  showModal,
  setShowModal,
  ticketNumber,
  // totalPrice,
  selectedServiceText,
  priceHT,
  paymentMethod,
  deliveryAddress,

}) => {
  useEffect(() => {
    console.log(ticket);
  }, [update]);
  // const [showModal, setShowModal] = useState(false);

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
  const CartCardProd = ({ item }) => {
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
            <Text
              style={{ fontWeight: "bold", fontSize: 16, marginLeft: -190 }}
            >
              {item.name}
            </Text>

            <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
              Size: {item && item.size ? item.size.name : ""}
            </Text>

            <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
              TVA: {item && item.tax ? item.tax : "0"} %
            </Text>
            <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
              Remise: {item && item.remise ? item.remise : "0"} %
            </Text>

            <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
              Prix HT: {item && item.size ? item.size.price : ""} DT
            </Text>
          </View>
        </View>
        <View style={{}}>
          <View style={{ marginLeft: 20, alignItems: "center" }}>
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
  const CartCard = ({ item, handleSelectItem }) => {
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
    //     const response = await axios.post("http://192.168.1.7/food/api/order/place", { products });
    //     // Traitez la réponse de Laravel si nécessaire
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const [price, setPrice] = useState(item.price);
    // const [ticketNumber, setTicketNumber] = useState(1);

    const HandleRemoveProdFromTicket = () => {
      ticket.pop(food);
      // calculateTotPriceCommand(-food.totPrice);
      setUpdate(!update);
    };
    const [quantity, setQuantity] = useState(1);
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
            marginTop: -20,
          }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, marginLeft: -190 }}
            >
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
            <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
              Sans: {itemWithDetails.ingredients.join(", ")}
            </Text>
          )}

          {itemWithDetails.supplements.length > 0 && (
            <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
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

          <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
            Remise: {item && item.remise ? item.remise : "0"} %
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

        <View>
          <View style={{ marginLeft: 20, alignItems: "center" }}>
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
    totalPrice += item.size.price;
  });

  let totalTax = 0;
  ticket.forEach((item) => {
    totalTax += item.tax;
  });
  
  let TotalNet = 0; 
  ticket.forEach((item) => {
    TotalNet += item.priceHT
  })

  let totalTaxMt=0; 
  ticket.forEach((item)=> {
    totalTaxMt += item.taxEnMontant
  })

  let totalRemiseMt=0; 
  ticket.forEach((item)=> {
    totalRemiseMt += item.RemiseEnMontant
  })

  ticketProd.forEach((item) => {
    totalTax += item.tax;
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
  <Commands
  selectedServiceText={selectedServiceText}
  paymentMethod={selectedOption === "Espéce" ? "Espèce" : "Carte Bancaire"}
  deliveryAddress={deliveryAddress}
/>

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
  //       "http://192.168.1.7/food/api/order/place",
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
        // ListFooterComponent={() => (
        //   <View style={styles.footerContent}>
        //     <TouchableOpacity
        //       onPress={() => {
        //         if (ticket.length !== 0) {
        //           openModal();
        //           setTicketNumber(ticketNumber + 1);
        //         }
        //       }}
        //       disabled={ticket.length === 0}
        //       style={styles.ticketButton}
        //     >
        //       <Text style={styles.ticketButtonText}>{`Voir le ticket`}</Text>
        //     </TouchableOpacity>
        //   </View>
        // )}

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
      <TicketModal
        items={ticket}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedService={selectedService}
        selectedOption={selectedOption}
        totalPrice={totalPrice}
        priceHT={priceHT}
        renduValue={renduValue}
        donneValue={donneValue}
        ticketNumber={ticketNumber}
        selectedServiceText={selectedServiceText}
        paymentMethod={selectedOption === "Espéce" ? "Espèce" : "Carte Bancaire"}
        deliveryAddress={deliveryAddress}


      />
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
            ></View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const TicketModal = ({
  itemsProd,
  items,
  showModal,
  handleCloseModal,
  donneValue,
  selectedService,
  handlePressService,
  selectedOption,
  renduValue,
  ticketNumber,
  item,
  priceHT,
  selectedServiceText,
  paymentMethod,
  deliveryAddress,
}) => {
  let totalPrice=0
  ticket.forEach((item) => {
    totalPrice += item.price;
  });
  let totalTax = 0;
  ticket.forEach((item) => {
    totalTax += item.tax;
  });
  let totalTaxMt=0; 
  ticket.forEach((item)=> {
    totalTaxMt += item.taxEnMontant
  })
  let totalRemiseMt=0; 
  ticket.forEach((item)=> {
    totalRemiseMt += item.RemiseEnMontant
  })


  let TotalNet = 0; 
  ticket.forEach((item) => {
    TotalNet += item.priceHT
  })
  const [ticketCounter, setTicketCounter] = useState(100009);
  const [date, setDate] = React.useState();

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  function formatDate(date) {
    return [
      date.toLocaleDateString("en-US"),
      date.toLocaleTimeString("en-US"),
    ].join(" ");
  }
  //arja3 lenna
  // useEffect(async () => {
  //   await AsyncStorage.setItem(
  //     "ticketInfoForSideBar",
  //     JSON.stringify({
  //       ticketNumber: ticketNumber + 1,
  //       totalPrice: totalPrice,
  //       date: formatDate(currentDate),
  //     })
  //   );
  // }, []);
  
  useEffect(() => {
    const saveData = async () => {
      await AsyncStorage.setItem(
        "ticketInfoForSideBar",
        JSON.stringify({
          ticketNumber: ticketCounter,
          totalPrice: totalPrice,
          date: formatDate(currentDate),
        })
      );
    };
    
    saveData();
  }, []);

  //juste nahit appel l fonction ken maa bouton fermer mtaa lmodal 
  // const saveDataToDatabase = async () => {
  //   try {
  //     const payload = {
  //       date: date,
  //       ticketNumber: ticketNumber,
  //       totalPrice: totalPrice,
  //       items: items.map((item) => ({
  //         name: item.name,
  //         quantity: item.quantity ? item.quantity : 0,
  //         size: item.size,
  //         tax: item.tax,
  //         remise: item.remise,
  //         prixHT: item.priceHT ? item.priceHT : 0, // Assurez-vous que priceHT a une valeur
  //         price: item.price,
  //       })),
  //     };
  
  //     const response = await axios.post('http://192.168.1.7/food/api/order/place', payload);
  
  //     console.log(response.data.message);
  //     // Traitez la réponse du serveur comme vous le souhaitez
  //   } catch (error) {
  //     console.error(error);
  //     // Traitez les erreurs de requête
  //   }
  // };

  // const sendTicketDetails = async () => {
  //   try {
  //     const ticketItems = [];
  
  //     items.forEach((item) => {
  //       const ticketItem = {
  //         produit: item.name,
  //         taille: item.size.name,
  //         quantite: item.quantity,
  //         tax: item.tax,
  //         remise: item.remise,
  //         priceHT: item.priceHT,
  //         price: item.price,
  //       };
  
  //       ticketItems.push(ticketItem);
  //       console.log(ticketItems);
  //     });
  //     const ticketItemsString = JSON.stringify(ticketItems);
  //     const ticketData = {
        // ticketNumber: ticketNumber + 1,
        // totalPrice: totalPrice,
        // date: formatDate(currentDate),
  //       ticketItems: ticketItems, 
  //     };
  
  //     const response = await axios.post('http://192.168.1.7/food/api/order/detailticket', ticketData);
  
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const sendTicketDetails = async () => {
  //   try {
  //     const ticketItems = [];
  //     items.forEach((item) => {
  //       const ticketItem = {
  //         produit: item.name,
  //         taille: item.size.name,
  //         quantite: item.quantity,
  //         tax: item.tax,
  //         remise: item.remise,
  //         priceHT: item.priceHT,
  //         price: item.price,
  //       };

  //       ticketItems.push(ticketItem);
  //       console.log(ticketItems);
  //     });
  
  //     const ticketItemsString = JSON.stringify(ticketItems);
  //     console.log(ticketItemsString);
  
  //     const ticketData = {
  //       ticketItems: ticketItemsString,
  //       ticketNumber: ticketNumber + 1,
  //       totalPrice: totalPrice,
  //       date: formatDate(currentDate),
  //     };
  
  //     const response = await axios.post('http://192.168.1.7/food/api/order/detail', ticketData);
  
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const sendTicketDetails = async () => {
    try {
      const ticketItems = []; 
      items.forEach((item) => {
        const ticketItem = {
          produit: item.name,
          taille: item.size.name,
          quantite: item.quantity,
          tax: item.tax,
          remise: item.remise,
          priceHT: item.priceHT,
          price: item.price,
          supplement:item.supplement,
        };
        ticketItems.push(ticketItem); 
        console.log(ticketItems);
      });

      // const addressString = deliveryAddress.toString();
      const ticketItemsString = JSON.stringify(ticketItems);
      console.log(ticketItemsString);
      console.log(ticketNumber)

      const ticketData = {
        ticketItems: ticketItems,
        ticketNumber: ticketCounter,
        totalPrice: totalPrice,
        date: formatDate(currentDate),
        paymentMethod: paymentMethod,
        selectedService:selectedService,
        deliveryAddress: deliveryAddress,
        totalTaxMt: totalTaxMt,
        // totalRemiseMt:totalRemiseMt,
        TotalNet:TotalNet,
      };

      const response = await axios.post('http://192.168.1.7/food/api/order/detail', ticketData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setTicketCounter((prevCounter) => prevCounter + 1);

  };
  
  const formattedTicketNumber = String(ticketCounter).padStart(6, '0');

  return (
    <Modal visible={showModal} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContentTicket}>
          <View style={styles.restaurantInfoContainer}>
            <Image
              source={require("../../assets/catergories/restau.png")}
              style={styles.logo}
            />
            <Text style={styles.restaurantName}>5 étoiles</Text>
            <View>
              <Text style={styles.date}>{formatDate(currentDate)}</Text>
            </View>
            <Text style={styles.restaurantAddress}>Houmet Essouk Djerba</Text>
            <Text style={styles.restaurantNumber}>+216 25256060</Text>
          </View>
          <View style={styles.rowContent}>
          {/* {formattedTicketNumber} */}
            <Text style={styles.ticketNumber}>Ticket N° 100006 </Text>
            <Text style={styles.ticketCaissier}>BEN ABDALLAH Chaima</Text>
          </View>
          <Text>
            *********************************************************************************************
          </Text>
          {/* <Text style={styles.ticketModalTitle}>Ticket Final</Text> */}
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.ticketItemContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.ticketItemName}>{item.name} </Text>
                  <Text style={styles.ticketItemInfo}>{item.size.name}</Text>
                  <Text style={styles.ticketItemInfo}>x{item.quantity}</Text>
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
                    Prix: {item && item.price ? item.price : ""} DT
                  </Text>
                </View>
                <View style={styles.row2Container}>
                  {item.ingredients && item.ingredients.length > 0 && (
                    <Text style={styles.ticketItemInfo}>
                      Sans:{" "}
                      {item.ingredients
                        .map((ingredient) => ingredient.name)
                        .join(", ")}
                    </Text>
                  )}
                  {item.supplement && item.supplement.length > 0 && (
                    <Text style={styles.ticketItemInfo}>
                      Supp:{" "}
                      {item.supplement.map((supp) => supp.name).join(", ")}
                    </Text>
                  )}
                </View>
              </View>
            )}
          />
          <View style={styles.servv}>
            <View style={styles.leftColumn}>
              <Text style={styles.leftText}>
                Mode de paiement:<Text style={styles.modeText}> {paymentMethod}</Text>
              </Text>
              <Text style={styles.leftText}>
                Mode de consommation:
                {/* <Text style={styles.modeText}> {selectedServiceText}</Text> */}
                <Text style={styles.selectedService}>
                  {selectedService}
                </Text>{" "}
              </Text>
              {selectedService === "livraison" && (
              <Text style={styles.addressText}>Adresse: {deliveryAddress}</Text>
              )}            
            </View>
          </View>
          <View style={styles.rightColumn}>
            <Text>Total net: {TotalNet.toFixed(3)} DT</Text>
            <Text>Total remise: {totalRemiseMt.toFixed(3)} DT</Text>
            <Text>Total tax: {totalTaxMt.toFixed(3)} DT</Text>
            <Text>A payer: {totalPrice.toFixed(3)} DT</Text>
            <Text>Donné: {donneValue} DT</Text>
            <Text>Rendu: {renduValue} DT</Text>
          </View>
          <View style={styles.FinTicket}>
            <Text>
              *********************************************************************************************
            </Text>
          </View>
          <Text style={styles.restaurantName}>
            Merci pour votre visite. A bientôt!
          </Text>
          <Button title="Fermer" color="red" onPress={() => {
              sendTicketDetails();
              handleCloseModal();
            }} />
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
