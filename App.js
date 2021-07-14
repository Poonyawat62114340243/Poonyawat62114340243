import { gray, red, rgb } from "chalk";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,TextInput, Button, Picker} from "react-native";
 
 const FlexDirectionBasics = () => {
   const [flexDirection, setflexDirection] = useState("column");
   const [num1 , setA] = useState();
   const [num2 , setB] = useState();
   const [selectedValue, setSelectedValue] = useState("plus");
   const calculate = () => {
     if(selectedValue == "plus")
     {
       alert(parseFloat(num1)+parseFloat(num2))
     }
     else if(selectedValue == "minus")
     {
       alert(parseFloat(num1)-parseFloat(num2))
     }
     else if(selectedValue == "mul")
     {
       alert(parseFloat(num1)*parseFloat(num2))
     }
     else if(selectedValue == "div")
     {
       alert(parseFloat(num1)/parseFloat(num2))
     }
   }
  
   return (
    <View style={{ flex:1, flexDirection: "column" }}>
      <TextInput style={{height:40,borderColor:red,borderWidth:1}}
        placeholder="Input Your Text PLS !"
        keyboardType = "number-pad"
        onChangeText ={num1=>setA(num1)}
      />
      <TextInput style={{height:40,borderColor:red,borderWidth:1}}
        placeholder="Input Your Text PLS !"
        keyboardType = "number-pad"
        onChangeText ={num2=>setB(num2)}
      />
      <Picker
        selectedValue={selectedValue}
        style={{ height:50 }}
        onValueChange={(itemValue,indexValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="+" value="plus"/>
        <Picker.Item label="-" value="minus"/>
        <Picker.Item label="*" value="mul"/>
        <Picker.Item label="/" value="div"/>
      </Picker>
      <Button 
        title="Learn More"
        color="#2196F3"
        accessibilityLabel="Learn more about this purple button"
        onPress={calculate}
      />
    </View>

   );
 };
 
 export default FlexDirectionBasics;