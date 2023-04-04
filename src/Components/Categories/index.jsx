import React, { useEffect } from "react";
import { Modal, Text, View, Image, StyleSheet, SafeAreaView, Dimensions,TouchableOpacity, Alert, Pressable} from "react-native";
import {styles} from './styles'
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
//import { MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FlatList, ScrollView,TextInput,TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
import fonctions from '../../consts/fonctions';
import Burgers from '../../consts/burgers';
import Sandwichs from '../../consts/sandwichs';
import ticket from '../../consts/ticket';
const {width} = Dimensions.get('screen');
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import TicketModal from "../Modals/Ticket";
import TableModal from "../Modals/ClotureZ";
import RevenusModal from "../Modals/Revenus";
import ClotureZModal from "../Modals/ClotureZ";
import axios from 'axios'; 
const cardWidth = width/2 -20;


 const ListCategories = ({cats, setCategory}) => {
   const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
   const HandleChange=(category,index)=>{
    setCategory(category.id)
    setSelectedCategoryIndex(index) 
    // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    // console.log(categoryName)
    // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    // setCategory(categoryName)
    // setCategory(data)
    
   }

   return (
     <ScrollView 
     horizontal
     showsVerticalScrollIndicator={false}
     contentContainerStyle={styles.categoriesListContainer}>
       {cats.map((category,index) => (
         <TouchableOpacity key = {index} activeOpacity={0.8} onPress={() => HandleChange(category,index)}>
           <View style={{
             backgroundColor:selectedCategoryIndex == index
             ? COLORS.primary 
             : COLORS.secondary,
             ...style.categoryBtn
           }}>
             <View style={styles.categoryBtnImgCon}>
               <Image source={{uri: `http://192.168.1.15/admin/public/images/${category.name}.png`}}
               style ={styles.ImgCat} 
                />
             </View>
             <Text style= {{
                 fontSize :17,
                 fontWeight:'bold',
                 marginLeft: 10,
                 color : 
                 selectedCategoryIndex == index
                 ? COLORS.white
                 : COLORS.primary,
             }}>
                {category.name}
             </Text>
           </View>
         </TouchableOpacity>
       ))}
     </ScrollView>
   )
 };

 const ListCategoriesVertical = ({setStateModalIndex}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const handleModal = (index) => {
    setSelectedCategoryIndex(index)
    setStateModalIndex(index)
    //console.log(index)
  }
  return (
    <View  style={styles.categoriesListContainerVertical}>
       <TouchableOpacity onPress={()=>handleModal(1)} key = {1} activeOpacity={0.8}  >
          <View style={{
            backgroundColor:selectedCategoryIndex == 1
            ? COLORS.primary 
            : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 1 !== categories.length - 1 ? 50 : 0,
          }}>
            <View style={styles.categoryBtnImgCon}>
              <Image source={require('../../assets/catergories/ticket.png')}
              style ={styles.ImgCat}
               />
            </View>
            <Text style= {{
                fontSize :17,
                fontWeight:'bold',
                marginLeft: 10,
                color : 
                selectedCategoryIndex == 1
                ? COLORS.white
                : COLORS.primary,
                
            }}>
               Tickets
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleModal(2)} key = {2} activeOpacity={0.8}  >
          <View style={{
            backgroundColor:selectedCategoryIndex == 2
            ? COLORS.primary 
            : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 2 !== categories.length - 2 ? 50 : 0,
          }}>
            <View style={styles.categoryBtnImgCon}>
              <Image source={require('../../assets/catergories/table.png')}
              style ={styles.ImgCat}
               />
            </View>
            <Text style= {{
                fontSize :17,
                fontWeight:'bold',
                marginLeft: 10,
                color : 
                selectedCategoryIndex == 2
                ? COLORS.white
                : COLORS.primary,
                
            }}>
               Tables
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleModal(3)} key = {3} activeOpacity={0.8}  >
          <View style={{
            backgroundColor:selectedCategoryIndex == 3
            ? COLORS.primary 
            : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 3 !== categories.length - 3 ? 50 : 0,
          }}>
            <View style={styles.categoryBtnImgCon}>
              <Image source={require('../../assets/catergories/revenu.png')}
              style ={styles.ImgCat}
               />
            </View>
            <Text style= {{
                fontSize :17,
                fontWeight:'bold',
                marginLeft: 10,
                color : 
                selectedCategoryIndex == 3
                ? COLORS.white
                : COLORS.primary,
                
            }}>
               Revenus
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleModal(4)} key = {4} activeOpacity={0.8}  >
          <View style={{
            backgroundColor:selectedCategoryIndex == 4
            ? COLORS.primary 
            : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 4 !== categories.length - 4 ? 50 : 0,
          }}>
            <View style={styles.categoryBtnImgCon}>
              <Image source={require('../../assets/catergories/cloture.png')}
              style ={styles.ImgCat}
               />
            </View>
            <Text style= {{
                fontSize :17,
                fontWeight:'bold',
                marginLeft: 10,
                color : 
                selectedCategoryIndex == 4
                ? COLORS.white
                : COLORS.primary,
                
            }}>
               ClotureZ
            </Text>
          </View>
        </TouchableOpacity>
    </View>
  )
};



  const Card = ({food, update, setUpdate}) => {
    const HandleAddProd2Ticket = () =>{
      ticket.push(food)
      setUpdate(!update)
    }
   return (
     <View style ={style.card}>
      <View>
        <Image source={{uri: `http://192.168.1.15/admin/public/images/${food.name}.png`}} style={{height:120, width:120, marginLeft:15,}}     />
      </View> 
      <View style={{marginHorizontal:5}}>
        <Text style={{fontSize:18, fontWeight: 'bold',marginLeft:20}}> {food.name}</Text> 
      </View>
      <View style={{marginTop:10,marginHorizontal:20,flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:14, fontWeight: 'bold', marginLeft:7}}> {food.price} TND</Text>
        <TouchableOpacity onPress={HandleAddProd2Ticket} style={styles.addToCartBTn}>
          <Icon name="add" size={20} color={COLORS.white}/>
        </TouchableOpacity>
      </View>
     </View>
   );
 };

 //http://192.168.1.15/admin/api/categories/products/%7Bid_category%7D

const Categories = () => {
  const [modalState ,setModalState] = React.useState(0)
  const [category, setCategory]=React.useState();
  const [update, setUpdate] = React.useState(false);
  const [categoryProds, setCategoryProds] = React.useState([
    {
      id: "1",
      category: "Pizza",

      name: "Meat Pizza",
      ingredients: "Mixed Pizza",
      price: "12.00",
      image: require("../../assets/meatPizza.png"),
    },
    {
      category: "Pizza",
      id: "2",
      name: "Cheese Pizza",
      ingredients: "Cheese Pizza",
      price: "16.00",
      image: require("../../assets/cheesePizza.png"),
    },
    {
      category: "Pizza",
      id: "3",
      name: "Pepperoni Pizza",
      ingredients: "Fried Chicken",
      price: "18.00",
      image: require("../../assets/pepperoniPizza.png"),
    },
  ]);
  const [open, setOpen] = React.useState(false);
  //const [data, setData]=React.useState([...foods, ...Burgers, ...Sandwichs]);
  const [cats, setCats] = React.useState();

  useEffect(() => {
    handleData();
    handleProdsByCat(category);
    console.log(cats);
  }, [cats]);

  const handleData = () => {
    axios
      .get("http://192.168.1.15/admin/api/categories")
      .then((response) => {
        setCats(response.data);
        setCategory(response.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleProdsByCat(category);
    console.log(category);
  }, [, category]);

  const handleProdsByCat = (id) => {
    axios
      .get(`http://192.168.1.15/admin/api/categories/products/${id}`)
      .then((response) => {
        setCategoryProds(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [stateModalTicket, setStateModalTicket] = React.useState(false);
  const [stateModalTable, setStateModalTable] = React.useState(false);
  const [stateModalRevenus, setStateModalRevenus] = React.useState(false);
  const [stateModalClotureZ, setStateModalClotureZ] = React.useState(false);
  const [stateModalIndex, setStateModalIndex] = React.useState(0);

  useEffect(() => {
    console.log(stateModalIndex);
    if (stateModalIndex == 1) {
      console.log("Ticket");
      setStateModalTicket(true);
    }
    if (stateModalIndex == 2) {
      console.log("Table");
      setStateModalTable(true);
    }
    if (stateModalIndex == 3) {
      console.log("Revenus");

      setStateModalRevenus(true);
    }
    if (stateModalIndex == 4) {
      console.log("ClotureZ");

      setStateModalClotureZ(true);
    }
  }, [stateModalIndex]);

  return (
    <View style={styles.Categories}>
      {open ? (
        <Animatable.View
          animation="bounceInLeft"
          duration={600}
          style={styles.drawer}
        >
          <AntDesign
            onPress={() => setOpen(false)}
            name="menu-unfold"
            size={40}
            color="#DF0F0F"
            style={{ margin: 10 }}
          />
          <ListCategoriesVertical setStateModalIndex={setStateModalIndex} />
        </Animatable.View>
      ) : (
        ""
      )}
      <View style={styles.cat}>
        <AntDesign
          onPress={() => setOpen(true)}
          name="menu-fold"
          size={40}
          color="#DF0F0F"
          style={{ marginLeft: 25 }}
        />
        {cats ? <ListCategories setCategory={setCategory} cats={cats} /> : ""}
      </View>

      <View style={styles.souscat}>
        <FlatList
          contentContainerStyle={{
            width: "80%",
            height: "auto",
            alignSelf: "center",
          }}
          style={styles.souscatList}
          showsVerticalScrollIndicator={false}
          numColumns={4}
          data={categoryProds && category ? categoryProds : categoryProds}
          renderItem={({ item }) => (
            <Card food={item} update={update} setUpdate={setUpdate} />
          )}
        />
      </View>

      {stateModalIndex == 1 ? (
        <TicketModal
          stateModalTicket={stateModalTicket}
          setStateModalTicket={setStateModalTicket}
        />
      ) : (
        ""
      )}

      {stateModalIndex == 2 ? (
        <TableModal
          stateModalTable={stateModalTable}
          setStateModalTable={setStateModalTable}
        />
      ) : (
        ""
      )}

      {stateModalIndex == 3 ? (
        <RevenusModal
          stateModalRevenus={stateModalRevenus}
          setStateModalRevenus={setStateModalRevenus}
        />
      ) : (
        ""
      )}

      {stateModalIndex == 4 ? (
        <ClotureZModal
          stateModalClotureZ={stateModalClotureZ}
          setStateModalClotureZ={setStateModalClotureZ}
        />
      ) : (
        ""
      )}
    </View>
  );
};
const style = StyleSheet.create({
categoryBtn: {
  height: 55,
  width: 200,
  marginRight: 7,
  borderRadius: 30,
  alignItems: 'center',
  paddingHorizontal: 5,
  flexDirection: 'row',
  
},
card: {
  height: 200,
  width: 150,
  marginHorizontal:15,
  marginVertical: 15, 
  borderRadius: 15,
  backgroundColor: COLORS.secondary,
  //marginLeft:10,

  
},
});
export default Categories ; 
