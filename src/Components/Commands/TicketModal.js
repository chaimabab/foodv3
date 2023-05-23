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
