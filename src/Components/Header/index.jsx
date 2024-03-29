import React, { useEffect, useState } from 'react';
import { Text, View,SafeAreaView,Image } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import COLORS from "../../consts/colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity,TextInput } from "react-native-gesture-handler";
const Header = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000); 
  //   return () => clearInterval(interval);
  // }, []);

  // function formatDate(date) {
  //   return [
  //     date.toLocaleDateString("en-US"),
  //     date.toLocaleTimeString("en-US"),
  //   ].join(" ");
  // }

  return (
    <View style={styles.header}>
      <View style={styles.logo}>
      <Image source={require('../../assets/catergories/logo.png')}
            style={{ width: '100%', height: '100%' }}
            />     
       </View>
      <View style={styles.bienvenueText}>
          <Text style={styles.textBold}>Bienvenue Chaima</Text>
      </View>
      {/* <View>
          <Text style={styles.text}>AppName</Text>
      </View> */}

      <View style={styles.num}>
          <Text style={styles.text}>+216 25256060</Text>
      </View>

      {/* <View>
        <Text>{formatDate(currentDate)}</Text>
      </View>  */}



      {/* <View>
        <SearchBar/>
      </View> */}

      {/* <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={28} color="#ffa500" />
        <TextInput
          style={{ marginLeft: 10, width: 400, fontSize: 18 }}
          placeholder="Recherche..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
    </SafeAreaView> */}


      <View style={styles.buttons}>
        {/* <TouchableOpacity style={styles.btn}>
        <Icon
                name="rotate-right"
                size={15}
                color="white"
              />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.btn}>
        <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
      </TouchableOpacity>
    </View>

      </View>
  );
};

export default Header;
