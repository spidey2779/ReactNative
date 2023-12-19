import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const startAddGoalHandler = () => {
    setModelIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModelIsVisible(false);
  };
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((goals) => {
      return [
        ...goals,
        {
          text: enteredGoalText,
          id: Math.random().toString(),
        },
      ];
    });
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((current) => {
      return current.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style={'light'} />
      <View style={styles.container}>
        <View style={styles.newbutton}>
          <Button
            title="Add new Goals"
            color="darkgreen"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          visible={modelIsVisible}
          addGoalHandler={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView alwaysBounceVertical={true}>
        {
          courseGoals.map((goal)=>(
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))
        }
        </ScrollView> */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 55,
    paddingHorizontal: 16,
    backgroundColor: "lightseagreen",
  },
  newbutton: {
    width: "80%",
    margin: "10%",
  },
});
