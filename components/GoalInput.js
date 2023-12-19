import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal , Image} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (e) => {
    setEnteredGoalText(e);
  };
  const addgoalhandler = () => {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/istockphoto-1457288094-170667a.webp')}
        style={styles.imagestyle}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals"
          onChangeText={goalInputHandler} //this also give the value
          value={enteredGoalText} //this also gives the value
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title="Add Goal"
              onPress={addgoalhandler}
              color="seagreen"
            />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" color="crimson" 
            onPress={props.endAddGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'lightseagreen',
    
  },
  textInput: {
    width: "90%",
    padding: 15,
    borderColor: "#dadada",
    borderWidth: 1,
    fontSize:19,
    backgroundColor: 'aliceblue',
    borderRadius:6
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttons:{
    width: '34%',
    marginHorizontal: 8,
   
  },
  imagestyle:{
    height:100,
    width:100,
    borderRadius: 50,
    margin: 20,
    marginTop:100
    
  }
});
