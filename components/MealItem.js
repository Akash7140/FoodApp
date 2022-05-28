import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={selectMealItemHandler}
            >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItems}>{duration} min</Text>
                    <Text style={styles.detailsItems}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItems}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: '#363062',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 200
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
        padding: 10
    },
    detailsItems: {
        fontSize: 13,
        marginHorizontal: 6,
        color: 'white'
    }
})