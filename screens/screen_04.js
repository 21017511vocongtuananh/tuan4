import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";

const products = [
    {
        id: '1',
        name: 'Product 1',
        price: '$10',
        rating: require("../assets/DATA/Rating 3.png"),
        image: require('../assets/DATA/Image 7 (4).png'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$15',
        rating: require('../assets/DATA/Rating 3.png'),
        image: require('../assets/DATA/Image 7.png'),
    },
    {
        id: '3',
        name: 'Product 3',
        price: '$20',
        rating: require('../assets/DATA/Rating 3.png'),
        image: require('../assets/DATA/Image 7 (2).png'),
    },
    {
        id: '4',
        name: 'Product 4',
        price: '$20',
        rating: require('../assets/DATA/Rating 3.png'),
        image: require('../assets/DATA/Image 7 (1).png'),
    },
];

export default function App({ navigation }) {

    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.container}>
            <View style={{
                width: '90%',
                height: 400,
                marginBottom: 20,
            }}>
                <Image
                    source={selectedProduct.image}
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: 'contain',
                        borderRadius: 10,
                        backgroundColor: "pink",
                    }}
                />
            </View>

            <FlatList
                data={products}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedProduct(item)}>
                        <View style={[
                            styles.thumbnail,
                            selectedProduct.id === item.id && styles.selected
                        ]}>
                            <Image
                                source={item.image}
                                style={styles.thumbnaill}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            />
            <View style={{
                flexDirection:"row",
                marginRight:40,
            }}>
            <Text style={styles.priceText}>{selectedProduct.price}</Text>
            <Text style={{color:"red",}}>Buy 1 get 1</Text>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbnail: {
        marginHorizontal: 15,
        padding: 5,
        borderWidth: 2,
        borderColor: "transparent",
        borderRadius: 10,
    },
    selected: {
        borderColor: "#00f",
    },
    thumbnaill: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    priceText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00a',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingText: {
        fontSize: 16,
        marginBottom: 20,
    },
});
