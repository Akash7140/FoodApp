import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";

import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {

    const favMealsCtx = useContext(FavoriteContext);

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFav = favMealsCtx.ids.includes(mealId);

    function headerButtonPressHandler() {
        if (mealIsFav) {
            favMealsCtx.removeFavorite(mealId);
        } else {
            favMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFav ? "star" : "star-outline"}
                    color="white"
                    pressHandler={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Text style={styles.detailsItems}>{selectedMeal.duration} min</Text>
                    <Text style={styles.detailsItems}>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItems}>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.subtitle}>Ingredients</Text>

                <View style={styles.stepsContainer}>{
                    selectedMeal.ingredients.map((ingredient) => (
                        <View key={ingredient} style={styles.subItemContainer}>
                            <Text style={styles.subItem}>{ingredient}</Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.subtitle}>Steps</Text>

                <View style={styles.stepsContainer}>
                    {selectedMeal.steps.map((step) => (
                        <View key={step} style={styles.subItemContainer} >
                            <Text style={styles.subItem}>{step}</Text>
                        </View>
                    ))}
                </View>

            </View>
        </ScrollView>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },

    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: '#363062',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
        color: 'white'
    },
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4C3575',
        width: '80%'
    },
    detailsItems: {
        fontSize: 13,
        marginHorizontal: 6,
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center'
    },
    subItem: {
        color: 'white',
        textAlign: 'center'
    },
    subItemContainer: {
        backgroundColor: '#4C3575',
        margin: 3,
        padding: 2,
        width: '80%'
    },
    stepsContainer: {
        alignItems: "center"
    },
    detailsContainer: {
        alignItems: "center",
        borderRadius: 8
    }
})