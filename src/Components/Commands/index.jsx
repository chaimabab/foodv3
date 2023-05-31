import React, { useEffect, useState } from 'react';
import { Text, View,Image, SafeAreaView,Modal,TextInput } from "react-native";
import {styles} from './styles'
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";
import CartScreen from "./CartScreen";
import ticket from "../../consts/ticket";
import ticketProd from "../../consts/ticketProd";
import Categories from '../Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Calculator } from 'react-native-calculator';
import Calculator from './Calculator';
import TicketModal from '../Modals/Ticket';


const Commands = ({update,item}) => {

  const [ticketNumber, setTicketNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [donneValue, setDonneValue] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);

  const openCalculator = () => {
    setShowCalculator(true);
  };

  const closeCalculator = () => {
    setShowCalculator(false);
  };

  const handleCalculatorResult = (result) => {
    setDonneValue(result.toString());
    closeCalculator();
  };

  // const handleCalculatorResult = (result) => {
  //   setDonneValue(result);
  // };
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [selectedService, setSelectedService] = useState(null);
  const [serviceText, setServiceText] = useState("");

  // const handlePressService = (service) => {
  //   if (selectedService === service) {
  //     setSelectedService(null);
  //     setServiceText('');
  //     setDeliveryAddress('');
  //   } else {
  //     setSelectedService(service);
  //     switch (service) {
  //       case 'serv1':
  //         toggleModal();
  //         setServiceText('Commande en livraison');
  //         break;
  //       case 'serv2':
  //         setServiceText('Commande à emporter');
  //         break;
  //       case 'serv3':
  //         setServiceText('Commande sur place');
  //         break;
  //       default:
  //         setServiceText('');
  //     }
  //   }
  // };
  const handlePressService = (service) => {
    if (selectedService === service) {
      setSelectedService(null);
      setServiceText("");
      setDeliveryAddress("");
    } else {
      setSelectedService(service);
      switch (service) {
        case "en livraison":
          toggleModal();
          setServiceText("Commande en livraison");
          break;
        case "à emporter":
          setServiceText("Commande à emporter");
          break;
        case "sur place":
          setServiceText("Commande sur place");
          break;
        default:
          setServiceText("");
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

  let totalPrice = 0;
  ticket.forEach((item) => {
    totalPrice += item.price;
  });

  ticketProd.forEach((item) => {
    totalPrice += item.size.price;
  });

  // let totalTax = 0;
  // ticket.forEach((item) => {
  //   totalTax += item.tax;
  // });

  // ticketProd.forEach((item) => {
  //   totalTax += item.tax
  // });
  const renduValue = (donneValue - totalPrice).toFixed(2);

  return (
    <View style={styles.Commands}>
      <View style={styles.CommandsHeader}>
        <Text style={styles.textBold}>Commande</Text>
        <Text style={styles.textBolded}>{formatDate(currentDate)}</Text>
      </View>
      <View style={styles.devider} />

      <View style={styles.services}>
        <TouchableOpacity
          style={[
            styles.Med2,
            selectedService === "en livraison" ? styles.selectedService : null,
          ]}
          onPress={() => handlePressService("en livraison")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/services/livraison.png")}
          />
          <Text style={styles.text1}>Livraison</Text>
        </TouchableOpacity>

        <Modal
          visible={isModalVisible}
          onRequestClose={toggleModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.label}>Adresse de livraison: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setDeliveryAddress(text)}
                value={deliveryAddress}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.fermerLiv}>Valider</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={[
            styles.Med2,
            selectedService === "à emporter" ? styles.selectedService : null,
          ]}
          onPress={() => handlePressService("à emporter")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/services/emporter.png")}
          />
          <Text style={styles.text2}>Emporter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.Med2,
            selectedService === "sur place" ? styles.selectedService : null,
          ]}
          onPress={() => handlePressService("sur place")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/services/plat.png")}
          />
          <Text style={styles.text3}>Sur place</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commande}>
        {selectedService && (
          <Text style={styles.inputtext}>
            Commande{" "}
            {selectedService === "en livraison" ? "En Livraion" : "A Emporter"}
          </Text>
        )}
      </View>

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
          selectedService={selectedService}
          handlePressService={handlePressService}
          selectedOption={selectedOption}
          donneValue={donneValue}
          totalPrice={totalPrice}
          renduValue={renduValue}
          showModal={showModal}
          setShowModal={setShowModal}
          ticketNumber={ticketNumber}
        />
      </SafeAreaView>

      {/* <View style={styles.Calculations}>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Prix total</Text>
          <Text>{totalPrice} DT</Text>
        </View>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Donné</Text>
          <TextInput
          style={styles.input2}
          value={donneValue}
          onChangeText={text => setDonneValue(text)}
        />
        </View>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Rendu</Text>
          <Text>0.00</Text>
        </View>
      </View> */}

      <View style={styles.Calculations}>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Prix total</Text>
          <Text>{totalPrice} DT</Text>
        </View>
        <TouchableOpacity style={styles.Calculation3} onPress={openCalculator}>
          <Text style={styles.inputtext}>Donné</Text>
          <TextInput
            style={styles.input2}
            value={donneValue}
            onChangeText={(text) => {
              donneValue;
            }}
            editable={false}
          />
        </TouchableOpacity>
        <View style={styles.Calculation}>
          <Text style={styles.inputtext}>Rendu</Text>
          <Text>{renduValue} DT</Text>
        </View>
      </View>

      <Modal visible={showCalculator} animationType="slide" transparent={true}>
        <Calculator
          onClose={closeCalculator}
          onResult={handleCalculatorResult}
        />
      </Modal>

      <View style={styles.Payement}>
        <Text style={styles.inputtext}>Mode de paiement</Text>
        {selectedOption && (
          <Text style={styles.inputtext}>
            {selectedOption === "Espéce" ? "Espèce" : "Carte Bancaire"}
          </Text>
        )}
      </View>

      <View style={styles.PayMethods}>
        <TouchableOpacity
          style={[
            styles.Med,
            selectedOption === "Espéce" ? styles.selectedOption : null,
          ]}
          onPress={() => handlePressOption("Espéce")}
        >
          <MaterialIcons name="attach-money" size={40} color="#DF0F0F" />
          <Text style={styles.paytext}>Espèce</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.Med,
            selectedOption === "Carte Bancaire" ? styles.selectedOption : null,
          ]}
          onPress={() => handlePressOption("Carte Bancaire")}
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
        {/* <Button size="sm" color="warning" title="En attente" /> */}
        <Button
          onPress={() => {
            if (ticket.length !== 0) {
              setShowModal(true);
              setTicketNumber(ticketNumber + 1);
            }
          }}
          size="sm"
          color="success"
          title="Valider"
        />
      </View>
    </View>
  );
};



export default Commands;
 

