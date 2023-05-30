// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import CO

// const TicketModal = ({ productDetails, onClose ,item}) => {
//   return (
//     <View>
//       {/* Render the product details received from the props */}

//       <Text style={{ }}>
//           Size: {item && item.size ? item.size.name : ""}
//         </Text>    
//         <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
//             Qte: {item && item.quantity ? item.quantity : ""} 
//         </Text>


//         {item.ingredients && item.ingredients.length > 0 && (
//         <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
//           Sans:{" "}
//           {item.ingredients.map((i, index) => {
//             return (
//               <Text
//                 style={{ color: COLORS.grey, marginLeft: -190 }}
//                 key={index}
//               >
//                 {i.name}
//                 {index < item.ingredients.length - 1 ? "," : ""}
//               </Text>
//             );
//           })}
//         </Text>
//       )} 

//               {item.supplement && item.supplement.length > 0 && (
//               <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
//                 Supp:{" "}
//                 {item.supplement.map((sp, index) => {
//                   return (
//                     <Text
//                       style={{ color: COLORS.grey, marginLeft: -190 }}
//                       key={index}
//                     >
//                       {sp.name}
//                       {index < item.supplement.length - 1 ? "," : ""}
//                     </Text>
//                   );
//                 })}
//               </Text>
//             )}
//                       <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
//             TVA: {item && item.tax ? item.tax : "0"} %
//           </Text>
//           <Text style={{ color: COLORS.grey, marginLeft: -190}}>
//             Remise: {item && item.remise ? item.remise: "0"} %
//           </Text>

//           <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
//             Prix Initial: {item && item.priceHT ? item.priceHT : ""} DT
//           </Text>

//           <Text style={{ color: COLORS.grey, marginLeft: -190 }}>
//             Prix Total: {item && item.price ? item.price : ""} DT
//           </Text>

  


//       <Button title="Fermer" onPress={onClose} />
//     </View>
//   );
// };

// export default TicketModal;


const TicketModal = ({ items, showModal, handleCloseModal}) => {
    let totalPrice = 0;
    ticket.forEach((item) => {
      totalPrice += item.price;
    });
    let totalTax = 0;
    ticket.forEach((item) => {
      totalTax += item.tax;
    });
    const [ticketNumber, setTicketNumber] = useState(1);
  
    return (
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={styles.modalContentTicket}>
        <View style={styles.restaurantInfoContainer}>
          <Image source={require('../../assets/catergories/restau.png')} style={styles.logo} />
          <Text style={styles.restaurantName}>Nom du restaurant</Text>
          <Text style={styles.restaurantAddress}>Adresse du restaurant</Text>
          <Text style={styles.restaurantNumber}>Numéro du restaurant</Text>
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.ticketNumber}>Ticket N° {ticketNumber}</Text>
          <Text style={styles.ticketCaissier}>Caissier</Text>
        </View>
        <Text >*********************************************************************************************</Text>
          {/* <Text style={styles.ticketModalTitle}>Ticket Final</Text> */}
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.ticketItemContainer}>
                <View style={styles.rowContainer}>
                <Text style={styles.ticketItemName}>{item.name} </Text>
                <Text style={styles.ticketItemInfo}>
                  S {item.size.name}
                </Text>
                <Text style={styles.ticketItemInfo}>
                  x{item.quantity} 
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
                Prix  : {item && item.price ? item.price : ""} DT
              </Text>
              </View>
                {/* Afficher les autres détails */}
              </View>
            )}
          />
              <View style={styles.leftColumn}>
                <Text style={styles.leftText}>Mode de paiement:</Text>
                <Text style={styles.leftText}>Mode de consommation:</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text>Total net:</Text>
                <Text>Total tax:</Text>
                <Text>A payer:</Text>
                <Text>Donné:</Text>
                <Text>Rendu:</Text>
              </View>
              <View style={styles.FinTicket}>
                <Text >*********************************************************************************************</Text>
                </View>
                <Text style={styles.restaurantName}>Merci de votre visite. A bientôt!</Text>
          {/* <Text> Prix Total: {totalPrice} DT</Text> */}
          <Button title="Fermer" color='red' onPress={handleCloseModal} />
        </View>
        </View>
      </Modal>
    );
  };
  