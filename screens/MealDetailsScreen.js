import { Text } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>This is Meal Detail Screen ({mealId})</Text>;
}

export default MealDetailsScreen;
