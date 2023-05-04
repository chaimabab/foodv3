import React, { useEffect, useState } from 'react';
import { Text, View,Image, SafeAreaView } from "react-native";
import {styles} from './styles'
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";
import CartScreen from "./CartScreen";
import ticket from "../../consts/ticket";
import Categories from '../Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Commands = ({update}) => {

  // const [priceTot, setPriceTot] = useState(0);
  // useEffect(() => {
  //   ticket.map((t) => {
  //     setPriceTot(priceTot + t.price);
  //   });
  // }, []);

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


  const [totalprice, setTotalprice] = useState(0);
  useEffect(() => {}, []);

  const calculateTotPriceCommand = (price) => {
    setTotalprice(totalprice + price);
  };

  const [selectedService, setSelectedService] = useState(null);
  // const handlePressService = (service) => {
  //   if (selectedService === service) {
  //     setSelectedService(null);
  //   } else {
  //     setSelectedService(service);
  //   }
  // };
  const [serviceText, setServiceText] = useState('');
  const handlePressService = (service) => {

    if (selectedService === service) {
      setSelectedService(null);
      setServiceText('');
    } else {
      setSelectedService(service);
      switch (service) {
        case 'serv1':
          setServiceText('Commande en livraison');
          break;
        case 'serv2':
          setServiceText('Commande à emporter');
          break;
        case 'serv3':
          setServiceText('Commande sur place');
          break;
        default:
          setServiceText('');
      }
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const handlePressOption = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <View style={styles.Commands}>
      <View style={styles.CommandsHeader}>
        <Text style={styles.textBold}>Commande</Text>
        <Text style={styles.textBolded}>{formatDate(currentDate)}</Text>
      </View>
      <View style={styles.devider} />

      <View style={styles.services}>
      <TouchableOpacity
          style={[styles.Med2, selectedService === "serv1" ? styles.selectedService : null]}
          onPress={() => handlePressService("serv1")}
        >
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/services/livraison.png')} />
          <Text style={styles.text1}>Livraison</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={[styles.Med2, selectedService === "serv2" ? styles.selectedService : null]}
          onPress={() => handlePressService("serv2")}
        >
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/services/emporter.png')} />
          <Text style={styles.text2}>Emporter</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={[styles.Med2, selectedService === "serv3" ? styles.selectedService : null]}
          onPress={() => handlePressService("serv3")}
        >
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/services/plat.png')} />
          <Text style={styles.text3}>Sur place</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.commande}>
        {serviceText !== '' && (
          <Text style={styles.inputtext}>
            {serviceText}
          </Text>
        )}
      </View>


      {/* <View style={styles.commande}> 
        {selectedService && (
          <Text style={styles.inputtext}>
             Commande {selectedService === "serv1" ? "En Livraion" : "A Emporter"}
          </Text>
        )}
      </View> */}

      {/* <View style={styles.services}>
      <TouchableOpacity
        style={[styles.service, isSelected('livraison') ? styles.selected : styles.unselected]}
        onPress={() => handlePress('livraison')}
      >
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/services/livraison.png')} />
        <Text style={styles.text1}>Livraison</Text>
      </TouchableOpacity>
      {/* {isSelected && <Text style={styles.textliv}>Commande en Livraison</Text>} 

      <TouchableOpacity
        style={[styles.service, isSelected('emporter') ? styles.selected : styles.unselected]}
        onPress={() => handlePress('emporter')}
      >
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/services/emporter.png')} />
        <Text style={styles.text2}>Emporter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.service, isSelected('surplace') ? styles.selected : styles.unselected]}
        onPress={() => handlePress('surplace')}
      >
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/services/plat.png')} />
        <Text style={styles.text3}>Sur place</Text>
      </TouchableOpacity>
    </View> 

      {/* <SafeAreaView style={styles.CommandsBoard}>
      <CartScreen/>
    </SafeAreaView>  */}

      {/* <View style={styles.CommandsBoard}>
      <Cart />
    </View> */}

      <SafeAreaView style={styles.CommandsBoard}>
        <CartScreen
          update={update}
          calculateTotPriceCommand={calculateTotPriceCommand}
        />
      </SafeAreaView>

      <View style={styles.Calculations}>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Sous Total</Text>
          {/* <Text>0</Text> */}
          <Text>{totalprice} TND</Text>
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
        {selectedOption && (
          <Text style={styles.inputtext}>
             {selectedOption === "cash" ? "Espèce" : "Carte Bancaire"}
          </Text>
        )}
      </View>

      <View style={styles.PayMethods}>
        <TouchableOpacity
          style={[styles.Med, selectedOption === "cash" ? styles.selectedOption : null]}
          onPress={() => handlePressOption("cash")}
        >
          <MaterialIcons name="attach-money" size={40} color="#DF0F0F" />
          <Text style={styles.paytext}>Espèce</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.Med, selectedOption === "card" ? styles.selectedOption : null]}
          onPress={() => handlePressOption("card")}
        >
          <MaterialIcons name="credit-card" size={40} color="#DF0F0F" />
          <Text style={{ ...styles.paytext, textAlign: "center" }}>
            Carte Bancaire
          </Text>
        </TouchableOpacity>
      </View>





      {/* <View style={styles.Payement}>
        <Text style={styles.inputtext}>Mode de paiement</Text>
      </View>

      <View style={styles.PayMethods}>
      <TouchableOpacity
        style={[styles.Med, selectedOption === "cash" ? styles.selectedOption : null]}
        onPress={() => handlePressOption("cash")}
      >
        <MaterialIcons name="attach-money" size={40} color="#DF0F0F" />
        <Text style={styles.paytext}>Espèce</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.Med, selectedOption === "card" ? styles.selectedOption : null]}
        onPress={() => handlePressOption("card")}
      >
        <MaterialIcons name="credit-card" size={40} color="#DF0F0F" />
        <Text style={{ ...styles.paytext, textAlign: "center" }}>
          Carte Bancaire
        </Text>
      </TouchableOpacity>
    </View> */}

      {/* <View style={styles.PayMethods}>
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
      </View> */}

      <View style={styles.ButtonsFooter}>
        <Button size="sm" color="error" title="Annuler" />
        <Button size="sm" color="warning" title="En attente" />
        <Button size="sm" color="success" title="Valider" />
      </View>
    </View>
  );
};

export default Commands;
 

