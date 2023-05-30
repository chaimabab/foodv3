import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = ({ onClose, onResult }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberPress = (number) => {
    if (displayValue === '0' || operator !== null) {
      setDisplayValue(number);
      setOperator(null);
    } else if (number === '.' && displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + number);
    } else if (number !== '.') {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorPress = (operatorValue) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(displayValue));
      setOperator(operatorValue);
      setDisplayValue('0');
    } else {
      const result = calculateResult();
      setFirstOperand(result);
      setOperator(operatorValue);
      setDisplayValue(result.toString());
    }
  };

  const handleEqualsPress = () => {
    const result = calculateResult();
    setDisplayValue(result.toString());
    setFirstOperand(null);
    setOperator(null);
    onResult(result);
  };

  const calculateResult = () => {
    const secondOperand = parseFloat(displayValue);
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleClearPress()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('.')} >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}  onPress={() => handleEqualsPress()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={() => onClose()}>
          <Text style={styles.closeButtonText}>Fermer</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    justifyContent: 'flex-end',
  },

  displayContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  displayText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 24,
  },
  closeButton: {
    backgroundColor: '#dddddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calculator;
