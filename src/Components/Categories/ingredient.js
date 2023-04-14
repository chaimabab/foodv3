import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import foods from '../../consts/foods';

const IngredientItem = ({ ingredient, onPress }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    onPress(ingredient, !selected);
  };

  return (
    <TouchableOpacity
      style={[styles.ingredientItem, selected && styles.selectedItem]}
      onPress={handlePress}
    >
      <Text style={styles.ingredientText}>{foods.ingredients}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ingredientItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  ingredientText: {
    fontSize: 16,
    color: 'black',
  },
});

export default IngredientItem;
