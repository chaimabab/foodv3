import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input, Button } from "react-native-elements";
import COLORS from "../../consts/colors";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-elements/dist/helpers";
import * as MailComposer from "expo-mail-composer";
// import { Linking } from 'react-native';

const ToastWithRef = React.forwardRef((props, ref) => {
  return <Toast {...props} ref={ref} />;
});

const HomeScreen = () => {
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [errorData, setErrorData] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPwd, setErrorPwd] = useState("");

  const validateFields = () => {
    setErrorData("");
    setErrorEmail("");
    setErrorPwd("");
    if (!emailInput && !passwordInput) {
      setErrorData("Veuillez saisir vos données.");
    } else if (!emailInput && passwordInput) {
      setErrorEmail("Veuillez saisir votre email.");
    } else if (!passwordInput && emailInput) {
      setErrorPwd("Veuillez saisir votre mot de passe.");
    } else {
      return true;
    }
  };
  const handleEmailChange = (emailInput) => {
    setemailInput(emailInput);
  };

  const handlePasswordChange = (passwordInput) => {
    setpasswordInput(passwordInput);
  };

  const navigation = useNavigation();

  const toastRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  toastRef.current?.setStyle({
    backgroundColor: "#333",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    width: "90%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  });

  const handleLogin = async (navigation) => {
    validateFields();
    try {
      const response = await axios.get(
        "http://192.168.1.13/food/api/employee/all"
      );
      const employees = response.data;
      const normalizedEmailInput = emailInput.toLowerCase();
      const normalizedPasswordInput = passwordInput.toLowerCase();
      const employee = employees.find(
        (emp) =>
          emp.email.toLowerCase() === normalizedEmailInput &&
          emp.password.toLowerCase() === normalizedPasswordInput
      );
      const employeePwd = employees.find(
        (emp) =>
          emp.email.toLowerCase() === normalizedEmailInput &&
          emp.password.toLowerCase() !== normalizedPasswordInput
      );
      const employeeEmail = employees.find(
        (emp) =>
          emp.email.toLowerCase() !== normalizedEmailInput &&
          emp.password.toLowerCase() !== normalizedPasswordInput
      );

      if (employee) {
        console.log("connexion valide");
        navigation.navigate("Dashborad");
      } else if (employeePwd && passwordInput.length > 0) {
        console.log("connexion echoué");
        Toast.show({
          type: "error",
          text1: "Erreur de connexion",
          text2: "le mot de passe est incorrect",
        });
      } else if (
        employeeEmail &&
        emailInput.length > 0 &&
        passwordInput.length > 0
      ) {
        console.log("connexion echoué");
        Toast.show({
          type: "error",
          text1: "Erreur de connexion",
          text2: "Auncun compte ne correspond à ces données",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgotPassword = () => {
    const emailContent = {
      subject: "Réinitialisation du mot de passe",
      body: `Veuillez réinitialiser le mot de passe de l'utilisateur avec l'adresse email : ${emailInput}`,
      recipients: ["caissea9@gmail.com"], // Adresse email de l'administrateur
    };

    MailComposer.composeAsync(emailContent);
  };

  // const handleForgotPassword = async () => {
  //   const { subject, body, recipients } = {
  //     subject: 'Réinitialisation du mot de passe',
  //     body: `Veuillez réinitialiser le mot de passe de l'utilisateur avec l'adresse email : ${emailInput}`,
  //     recipients: ['chaimabenabdallah19@gmail.com'], // Adresse e-mail de l'administrateur
  //   };

  //   try {
  //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  //     const msg = {
  //       to: recipients,
  //       from: 'noreply@example.com',
  //       subject: subject,
  //       text: body,
  //     };

  //     await sgMail.send(msg);

  //     Toast.show({
  //       type: 'success',
  //       text1: 'Succès',
  //       text2: 'L\'e-mail a été envoyé avec succès.',
  //     });
  //   } catch (error) {
  //     console.error('Erreur lors de l\'envoi de l\'e-mail', error);

  //     Toast.show({
  //       type: 'error',
  //       text1: 'Erreur',
  //       text2: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.',
  //     });
  //   }
  // };
  // const handleForgotPassword = () => {
  //   const emailContent = {
  //     subject: 'Réinitialisation du mot de passe',
  //     body: `Veuillez réinitialiser le mot de passe de l'utilisateur avec l'adresse email : ${emailInput}`,
  //     recipients: ['caissea9@gmail.com'], // Adresse e-mail de l'administrateur
  //   };

  //   const { subject, body, recipients } = emailContent;

  //   MailComposer.composeAsync({
  //     recipients,
  //     subject,
  //     body,
  //   })
  //     .then((result) => {
  //       if (result.status === 'sent') {
  //         Toast.show({
  //           type: 'success',
  //           text1: 'Succès',
  //           text2: 'E-mail envoyé avec succès.',
  //         });
  //       } else if (result.status === 'cancelled') {
  //         console.log('Envoi d\'e-mail annulé');
  //       } else {
  //         console.log('Échec de l\'envoi d\'e-mail');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors de l\'envoi d\'e-mail', error);

  //       Toast.show({
  //         type: 'error',
  //         text1: 'Erreur',
  //         text2: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.',
  //       });
  //     });
  // };

  // const handleForgotPassword = async () => {
  //   const emailBody = 'Demande de réinitialisation de mot de passe : ' + emailInput;
  //   const adminEmail = 'caissea9@gmail.com';

  //   try {
  //     await MailComposer.composeAsync({
  //       recipients: [adminEmail],
  //       subject: 'Réinitialisation de mot de passe',
  //       body: emailBody,
  //     });
  //   } catch (error) {
  //     console.log('Erreur lors de l\'ouverture de la messagerie :', error);
  //   }
  // };

  return (
    <ImageBackground
      source={require("../../consts/background.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <ToastWithRef ref={toastRef} />
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Image
              source={require("../../consts/khazina.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Connexion</Text>
          </View>
          <Input
            placeholder="Adresse email"
            placeholderTextColor="#ccc"
            value={emailInput}
            onChangeText={handleEmailChange}
            leftIcon={<Icon name="user" size={24} color={COLORS.grey} />}
          />
          {errorEmail ? (
            <Text style={styles.errorText}>{errorEmail}</Text>
          ) : null}
          <Input
            placeholder="Mot de passe"
            placeholderTextColor="#ccc"
            value={passwordInput}
            secureTextEntry={!showPassword}
            onChangeText={handlePasswordChange}
            leftIcon={<Icon name="lock" size={24} color={COLORS.grey} />}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? "eye-slash" : "eye"}
                  size={24}
                  color={COLORS.grey}
                />
              </TouchableOpacity>
            }
          />
          {errorPwd ? <Text style={styles.errorText}>{errorPwd}</Text> : null}
          <TouchableOpacity onPress={() => handleLogin(navigation)}>
            <Ionicons
              name="arrow-forward-circle"
              size={50}
              color={COLORS.red}
              style={styles.button}
            />
          </TouchableOpacity>
          {errorData ? <Text style={styles.errorText}>{errorData}</Text> : null}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey", // Couleur de l'ombre
    shadowOffset: { width: 0, height: 0 }, // Décalage de l'ombre
    shadowOpacity: 0.4, // Opacité de l'ombre
    shadowRadius: 4, // Rayon de l'ombre
  },

  content: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    height: "40%",
    width: "40%",
    borderWidth: 2,
    // borderColor: COLORS.primary,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,

    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    elevation: 4,
    alignItems: "center",
  },

  titleContainer: {
    //flexDirection: 'row',
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  logo: {
    width: 80,
    height: 80,
    //marginRight: 10,
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 21,
    color: "#ec1c24",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  input: {
    width: "60%",
    height: "15%",
    padding: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
    borderWidth: 3,
    borderColor: COLORS.primary,
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 100,
    // borderBottomLeftRadius: 120,
    // borderBottomRightRadius: 15,
    // backgroundColor: '#fff',
  },

  button: {
    marginLeft: 455,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  errorText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    marginLeft: 650,
    //marginTop:
  },
  forgotPasswordText: {
    color: COLORS.red,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

export default HomeScreen;
