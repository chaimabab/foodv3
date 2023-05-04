import React, {useState, useEffect} from "react";
import { Modal, Text, View, Image, StyleSheet,TouchableOpacity, TextInput} from "react-native";
import {styles} from './styles'
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import ticket from '../../consts/ticket';
import ticketProd from "../../consts/ticketProd";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import TicketModal from "../Modals/Ticket";
import TableModal from "../Modals/ClotureZ";
import RevenusModal from "../Modals/Revenus";
import ClotureZModal from "../Modals/ClotureZ";
import axios, { all } from 'axios'; 
import Commands from "../Commands";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartScreen from "../Commands/CartScreen";

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
               <Image source={{uri: `http://192.168.1.13/admin/storage/app/public/category/${category.image}`}}
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
  const [modalVisibleTick, setModalVisibleTick] = useState(false);
  const [modalVisibleRev, setModalVisibleRev] = useState(false);
  const [modalVisibleClz, setModalVisibleClz] = useState(false);

  return (
    <View  style={styles.categoriesListContainerVertical}>
      <TouchableOpacity
        key={2}
        activeOpacity={0.8}
        onPress={() => setModalVisibleTick(true)}>
        <View
          style={{
            backgroundColor:
              selectedCategoryIndex == 3 ? COLORS.primary : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 3 !== categories.length - 3 ? 50 : 0,
          }}>
          <View style={styles.categoryBtnImgCon}>
            <Image
              source={require('../../assets/catergories/ticket.png')}
              style={styles.ImgCat}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
              color:
                selectedCategoryIndex == 3 ? COLORS.white : COLORS.primary,
            }}>
            Ticket
          </Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisibleTick}  animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent2}>
          <TouchableOpacity onPress={() => setModalVisibleTick(false)}>
            <Text style={styles.btnclose2}>Close</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        key={3}
        activeOpacity={0.8}
        onPress={() => setModalVisibleRev(true)}>
        <View
          style={{
            backgroundColor:
              selectedCategoryIndex == 3 ? COLORS.primary : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 3 !== categories.length - 3 ? 50 : 0,
          }}>
          <View style={styles.categoryBtnImgCon}>
            <Image
              source={require('../../assets/catergories/revenu.png')}
              style={styles.ImgCat}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
              color:
                selectedCategoryIndex == 3 ? COLORS.white : COLORS.primary,
            }}>
            Revenus
          </Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisibleRev}  animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent2}>
          <View >
            <Image source={require('../../assets/catergories/revenu.png')} style={styles.ImgRev}/>
            <Text style={styles.NomRev}> Statistiques des commandes </Text>
          </View>
          <View style={styles.rectContainer}>
            <View style={styles.rect}></View>
            <View style={styles.rect}></View>
            <View style={styles.rect}></View>
          </View>
          {/* <TextInput placeholder="Enter your text here" style={styles.textInput} /> */}
          <TouchableOpacity onPress={() => setModalVisibleRev(false)}>
              <Text style={styles.btnclose2}>Fermer</Text>
          </TouchableOpacity>       
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        key={4}
        activeOpacity={0.8}
        onPress={() => setModalVisibleClz(true)}>
        <View
          style={{
            backgroundColor:
              selectedCategoryIndex == 3 ? COLORS.primary : COLORS.secondary,
            ...style.categoryBtn,
            marginTop: 3 !== categories.length - 3 ? 50 : 0,
          }}>
          <View style={styles.categoryBtnImgCon}>
            <Image
              source={require('../../assets/catergories/cloture.png')}
              style={styles.ImgCat}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
              color:
                selectedCategoryIndex == 3 ? COLORS.white : COLORS.primary,
            }}>
            ClotureZ
          </Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisibleClz} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent2}>
            <TouchableOpacity onPress={() => setModalVisibleClz(false)}>
              <Text style={styles.btnclose2}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </View>
  )
};

  const Card = ({ food, update, setUpdate}) => {
    const [price, setPrice] = useState(food.price);
    const [priceSize, setPriceSize] = useState(0);
    const [priceSupplement, setPriceSupplement] = useState(0);

    useEffect(() => {
      setPrice(priceSize + priceSupplement);
    }, [priceSize, priceSupplement]);

    // const HandleSetPrice = (priceSupp) => {
    //   ticket.map((t) => {
    //     if (t.id === food.id) {
    //       t.price = food.price + priceSupp;
    //     }
    //   });
    // };

    const HandleAddProd2Ticket = () => {
      ticketProd.push({
        ...food,
        size: selectedSize,
      });
      setUpdate(!update);
    };
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      ticket.push({
        ...food,
        size: selectedSize,
        ingredients: notSelectedIngredients,
        supplement: selectedSupplement,
        // prix: calculateTotalPriceProduct(),
        //prix : selectedPrice, 
      });
      setUpdate(!update);
      //setSelectedSize();
      //setNotSelectedIngredients();
      setSelectedSupplement([]);
    };

    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    useEffect(() => {
      axios
        .get(`http://192.168.1.13/admin/api/products/variants/${food.id}`)
        .then((response) => {
          setSizes(response.data);
          setSelectedSize(response.data[0]);
          //setPrice(response.data[0].price);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des tailles du produit :",
            error
          );
        });
    }, []);

    const handleSizePress = (size) => {
      setSelectedSize(size);
      setPriceSize(size.price);
    };
    // const ingredientsList = ['Tomate', 'Sauce', 'Fromage','Pepperoni'];
    // useEffect(() => {
    //   setSelectedIngredients(ingredientsList);
    // }, []);

    // const [selectedIngredients, setSelectedIngredients] = useState([]);
    // const handleIngredientToggle = (ingredient) => {
    //   const isSelected = selectedIngredients.includes(ingredient);

    //   if (isSelected) {
    //     setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    //   } else {
    //     setSelectedIngredients([...selectedIngredients, ingredient]);
    //   }
    // };

    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [notSelectedIngredients, setNotSelectedIngredients] = useState([]);

    useEffect(() => {
      axios
        .get(`http://192.168.1.13/admin/api/products/ingredients/${food.id}`)
        .then((response) => {
          setIngredients(response.data);
          setSelectedIngredients(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors du chargement des ingrédients:", error);
        });
    }, []);

    const handleIngredientToggle = (ingredient) => {
      const isSelected = selectedIngredients.includes(ingredient);
      if (isSelected) {
        setSelectedIngredients(
          selectedIngredients.filter((item) => item !== ingredient)
        );
        setNotSelectedIngredients([...notSelectedIngredients, ingredient]);
      } else {
        setSelectedIngredients([...selectedIngredients, ingredient]);
        setNotSelectedIngredients(
          notSelectedIngredients.filter((item) => item !== ingredient)
         );
      }
    };

    // const supplementList = ['Tomate', 'Sauce', 'Fromage','Pepperoni'];
    // useEffect(() => {
    // }, []);

    // const [selectedSupplement, setSelectedSupplement] = useState([]);
    // const handleSupplementToggle = (supplement) => {
    //   const isSelected = selectedSupplement.includes(supplement);

    //   if (isSelected) {
    //     setSelectedSupplement(selectedSupplement.filter((item) => item !== supplement));
    //   } else {
    //     setSelectedSupplement([...selectedSupplement, supplement]);
    //   }
    // };
    const [supplement, setSupplement] = useState([]);
    const [selectedSupplement, setSelectedSupplement] = useState([]);
    useEffect(() => {
      axios
        .get(`http://192.168.1.13/admin/api/products/addons/${food.id}`)
        .then((response) => {
          setSupplement(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors du chargement des ingrédients:", error);
        });
    }, []);
    const handleSupplementToggle = (supplement) => {
      const isSelected = selectedSupplement.includes(supplement);
      if (isSelected) {
        setSelectedSupplement(
          selectedSupplement.filter((item) => item !== supplement)
        );
      } else {
        setSelectedSupplement([...selectedSupplement, supplement]);
      }
    };

    useEffect(() => {
      selectedSupplement.map((si) => {
        supplement.map((i) => {
          if (i.id === si.id) {
            setPriceSupplement(priceSupplement + si.price);
          }
        });
      });
    }, [selectedSupplement]);

    useEffect(() => {
      let totalPrice = 0;
      selectedSupplement.forEach((si) => {
        const matchingSupplement = supplement.find((i) => i.id === si.id);
        if (matchingSupplement) {
          totalPrice += si.price;
        }
      });
      setPriceSupplement(totalPrice);
    }, [selectedSupplement]);

    const [quantity,setQuantity]= useState(1);
    const handleAdd = () => {
      setQuantity(quantity + 1);;
    };
    const handleRemove = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    // const calculateTotalPriceProduct = () => {
    //   const totalPrice = quantity * price;
    //   return totalPrice;
    // };
    // const prix =calculateTotalPriceProduct();

    const [selectedPrice, setSelectedPrice] = useState(0);
    const calculateTotalPriceProduct = () => {
      const totalPrice = quantity * price;
      setSelectedPrice(totalPrice);
    };
    useEffect(() => {
      calculateTotalPriceProduct();
    }, [quantity, price]);


    return (
      <View style={style.card}>
        <TouchableOpacity onPress={HandleAddProd2Ticket}>
          <Image
            source={{
              // uri: `http://192.168.1.13/admin/public/images/${food.name}.png`,
              uri: `http://192.168.1.13/admin/storage/app/public/product/${food.image}`,

            }}
            style={{ height: 120, width: 120, marginLeft: 15 }}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>
            {food.name}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 7 }}>
            {food.price} TND{" "}
          </Text>
          <TouchableOpacity style={styles.addToCartBTn}>
            <Icon
              name="add"
              size={20}
              color="white"
              onPress={handleOpenModal}
            />
            <Modal visible={showModal} animationType="slide" transparent={true}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Image
                    source={{
                      uri: `http://192.168.1.13/admin/storage/app/public/product/${food.image}`,
                      //  `http://192.168.1.13/admin/public/images/${food.name}.png`,
                    }}
                    style={{ height: 120, width: 120, marginLeft: 15 }}
                  />
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}
                  >
                    {" "}
                    {food.name}
                  </Text>

                  <View style={styles.containerSize}>
                    {sizes.map((size) => (
                      <TouchableOpacity
                        key={size.price}
                        style={[
                          styles.sizeButton2,
                          selectedSize === size && styles.selectedSizeButton2,
                        ]}
                        onPress={() => handleSizePress(size)}
                      >
                        <Text style={styles.sizeButtonText2}>{size.name}</Text>
                        <Text style={styles.sizeButtonText2}>
                          {size.price} TND{" "}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View>
                    {selectedSize && (
                      <Text style={styles.selectedSizeText2}>
                        Size: {selectedSize.name}
                      </Text>
                    )}
                  </View>

                  <View style={styles.containerIng}>
                    <View style={styles.ingredientsContainer}>
                      {ingredients.map((ingredient) => (
                        <TouchableOpacity
                          key={ingredient.name}
                          onPress={() => handleIngredientToggle(ingredient)}
                          style={[
                            styles.ingredientButton,
                            selectedIngredients.includes(ingredient) &&
                              styles.selectedIngredientButton,
                          ]}
                        >
                          <Text style={styles.ingredientText}>
                            {ingredient.name}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    <Text style={styles.selectedIngredientsText}>
                      Sans:{" "}
                      {ingredients
                        .filter(
                          (ingredient) =>
                            !selectedIngredients.includes(ingredient)
                        )
                        .map((ingredient) => ingredient.name)
                        .join(", ")}
                    </Text>
                  </View>

                  <View style={styles.containerSupp}>
                    <View style={styles.SupplementContainer}>
                      {supplement.map((supplement) => (
                        <TouchableOpacity
                          key={supplement.name}
                          onPress={() => handleSupplementToggle(supplement)}
                          style={[
                            styles.supplementButton,
                            selectedSupplement.includes(supplement) &&
                              styles.selectedSupplementButton,
                          ]}
                        >
                          <Text style={styles.SupplementText}>
                            {supplement.name}
                          </Text>
                          <Text style={styles.SupplementText}>
                            {supplement.price} TND
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>

                    <Text style={styles.selectedSupplementText}>
                      Suppléments:{" "}
                      {supplement
                        .filter((supplement) =>
                          selectedSupplement.includes(supplement)
                        )
                        .map((supplement) => supplement.name)
                        .join(", ")}
                    </Text>
                  </View>

                  <View>
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: 14,marginLeft:29, marginTop:10}}>{quantity}</Text> 
                    </View>
                    <TouchableOpacity style={styles.removeicon} onPress={handleRemove}>
                      <Icon name="remove" size={25} color={COLORS.white}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addicon} onPress={handleAdd} >
                      <Icon name="add" size={25} color={COLORS.white}></Icon>
                    </TouchableOpacity>
                  </View>
                  
                  <View>
                    <Text style={styles.pricetext}> Prix: {selectedPrice} TND</Text>
                    {/* <CartScreen totalPrice={totalPrice} /> */}
                  </View>

                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text style={styles.btnclose}> Valider </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //http://192.168.1.13/admin/api/categories/products/%7Bid_category%7D
  const Categories = () => {
    const [modalState, setModalState] = React.useState(0);
    const [category, setCategory] = React.useState();
    const [update, setUpdate] = React.useState(false);
    const [categoryProds, setCategoryProds] = React.useState([
      {
        id: "1",
        category: "Pizza",
        name: "Meat Pizza",
        ingredients: "Mixed Pizza",
        //price: "12.00"
        image: require("../../assets/meatPizza.png"),
      },
      {
        category: "Pizza",
        id: "2",
        name: "Cheese Pizza",
        ingredients: "Cheese Pizza",
        //price: "16.00",
        image: require("../../assets/cheesePizza.png"),
      },
      {
        category: "Pizza",
        id: "3",
        name: "Pepperoni Pizza",
        ingredients: "Fried Chicken",
        //price: "18.00",
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
        .get("http://192.168.1.13/admin/api/categories")
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
        .get(`http://192.168.1.13/admin/api/categories/products/${id}`)
        .then((response) => {
          setCategoryProds(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // const [stateModalTicket, setStateModalTicket] = React.useState(false);
    // // const [stateModalTable, setStateModalTable] = React.useState(false);
    // const [stateModalRevenus, setStateModalRevenus] = React.useState(false);
    // const [stateModalClotureZ, setStateModalClotureZ] = React.useState(false);
    const [stateModalIndex, setStateModalIndex] = React.useState(0);

    // useEffect(() => {
    //   console.log(stateModalIndex);
    //   if (stateModalIndex == 1) {
    //     console.log("Ticket");
    //     setStateModalTicket(true);
    //   }
    //   // if (stateModalIndex == 2) {
    //   //   console.log("Table");
    //   //   setStateModalTable(true);
    //   // }
    //   if (stateModalIndex == 3) {
    //     console.log("Revenus");
    //     setStateModalRevenus(true);
    //   }
    //   if (stateModalIndex == 4) {
    //     console.log("ClotureZ");
    //     setStateModalClotureZ(true);
    //   }
    // }, [stateModalIndex]);

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

        {/* {stateModalIndex == 1 ? (
          <TicketModal
            stateModalTicket={stateModalTicket}
            setStateModalTicket={setStateModalTicket}
          />
        ) : (
          ""
        )} */}
{/* 
        {stateModalIndex == 2 ? (
          <TableModal
            stateModalTable={stateModalTable}
            setStateModalTable={setStateModalTable}
          />
        ) : (
          ""
        )} */}

        {/* {stateModalIndex == 3 ? (
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
        )} */}
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
export default Categories;
