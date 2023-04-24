import React, { useEffect, useState } from 'react';
import { Text, View,Image, SafeAreaView } from "react-native";
import {styles} from './styles'
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";
import CartScreen from "./CartScreen";
import ticket from "../../consts/ticket";

const Commands = ({ update }) => {
  const [priceTot, setPriceTot] = useState(0);
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

  useEffect(() => {
    ticket.map((t) => {
      setPriceTot(priceTot + t.price);
    });
  }, []);


  return (
    <View style={styles.Commands}>
      <View style={styles.CommandsHeader}>
        <Text style={styles.textBold}>Commande</Text>
        <Text>{formatDate(currentDate)}</Text>
        {/* <Text>{formatDate(new Date())}</Text> */}
      </View>
      <View style={styles.devider} />

      <View style={styles.services}>
        <TouchableOpacity style={styles.service}>
          {/* <MaterialIcons
            name="delivery-dining"
            size={40}
            color="#008000"
          /> */}
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/services/livraison.png")}
          />
          <Text style={styles.text}>Livraison</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.service}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/services/emporter.png")}
          />

          {/* <MaterialCommunityIcons
            name="food-takeout-box"
            size={40}
            color="#008000"
          /> */}
          <Text style={styles.text}>Emporter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.service}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/services/plat.png")}
          />

          {/* <MaterialIcons
            name="food-bank"
            size={40}
            color="#008000"
          /> */}
          <Text style={styles.text}>Sur place</Text>
        </TouchableOpacity>
      </View>

      {/* <SafeAreaView style={styles.CommandsBoard}>
      <CartScreen/>
    </SafeAreaView>  */}

      {/* <View style={styles.CommandsBoard}>
      <Cart />
    </View> */}

      <SafeAreaView style={styles.CommandsBoard}>
        <CartScreen update={update} />
      </SafeAreaView>

      <View style={styles.Calculations}>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Sous Total</Text>
          <Text>0</Text>
          {/* <Text>{priceTot}</Text> */}
        </View>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Tax</Text>
          <Text>0</Text>
        </View>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Total</Text>
          <Text>0.00</Text>
        </View>
      </View>

      <View style={styles.Payement}>
        <Text style={styles.inputtext}>Mode de paiement</Text>
      </View>

      <View style={styles.PayMethods}>
        <TouchableOpacity style={styles.Med}>
          <MaterialIcons name="attach-money" size={40} color="#DF0F0F" />
          <Text style={styles.paytext}>Espèce</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Med}>
          <MaterialIcons name="credit-card" size={40} color="#DF0F0F" />
          <Text style={{ ...styles.paytext, textAlign: "center" }}>
            Carte Bancaire
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ButtonsFooter}>
        <Button size="sm" color="success" title="valider" />
        <Button size="sm" color="warning" title="En attente" />
        <Button size="sm" color="error" title="Annuler" />
      </View>
    </View>
  );
};

export default Commands;
 

