import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App({ navigation }) {

    const[email,SetEmail] = useState('');
    const[password,SetPassword] = useState('');

    const handleLogin = () => {
        const user = userData.find(user => user.email === email && user.password === password);
        if (user) {
            navigation.navigate('Screen04'); // Chuyển sang Screen_04
        } else {
            alert('User not found!');
        }
    };
    return(
        <View style={styles.container}>
            <View style={{
                marginBottom:20,
            }}>
               <Image source={require('../assets/DATA/Image 20.png')}
               style={{
                width:"100%",
                height:200,
                resizeMode:"contain",
               }}></Image>

               <Text style={{
                marginTop:20,
                fontSize:50,
                paddingLeft:15,
                fontWeight: "bold",
               }}>Welcome!</Text>
            </View>

            <View >
            <Text style={{
                    fontSize:20,
                    fontWeight: "bold",
                    marginTop:10,
                    paddingLeft:20,
                }}>Email</Text>
            </View>
            <View style={styles.inputContainer}>
                 <Image source={require("../assets/DATA/email.png")}
                 style={{
                    width:20,
                    height:20,
                    marginRight:10,
                 }}></Image>
                 <TextInput style={{flex:1,height:40}} placeholder="Enter email"
                 value={email} 
                 onChangeText={SetEmail}
                 ></TextInput>
            </View>
            <View >
            <Text style={{
                    fontSize:20,
                    fontWeight: "bold",
                    marginTop:10,
                    paddingLeft:20,
                }}>Password</Text>
            </View>
            <View style={styles.inputContainer}>
                 <Image source={require("../assets/DATA/password.png")}
                 style={{
                    width:20,
                    height:20,
                    marginRight:10,
                 }}></Image>
                 <TextInput style={{flex:1,height:40}} placeholder="Enter password"
                 value={password} 
                 onChangeText={SetPassword}>

                 </TextInput>
                 <Image 
                    source={require("../assets/DATA/mat.png")}
                    style={{ width: 20,
                        height: 20,
                        marginLeft: 10,}}
                />
            </View>

            <View style={{
                flexDirection:"row",
                alignItems: "center",
                justifyContent:"center",
                marginTop:40,
            }}>
                <TouchableOpacity style={{
                    backgroundColor:"#007BFF",
                    width:"80%",
                    height:50,
                    borderRadius:10,
                    alignItems: "center",
                    justifyContent:"center",
                }} onPress={handleLogin}>
                    <Text style={{
                        color:"#fff",
                        fontSize:20,
                        
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent: "center",
    },
    inputContainer:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        width: '90%',
        marginTop: 5,
        alignSelf:"center",
    }
});
