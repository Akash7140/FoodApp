import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorites-context";

function FavouritesScreen() {
    const favMealCtx = useContext(FavoriteContext);
    const favouriteMeals = MEALS.filter(meal => favMealCtx.ids.includes(meal.id));

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.info}>
                    No Meal added to favourites yet!!
                </Text>
            </View >
        )
    }
    return (
        <MealList items={favouriteMeals} />

    )
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: 30
    },
    info: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})