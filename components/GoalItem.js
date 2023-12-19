import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "dadada" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //for ios
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text} </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "darkgreen",

  },
  pressedItem:{
    opacity:0.5,
  }
  ,
  goalText: {
    color: "white",
    padding: 10,
    fontSize:15,
  },
});
