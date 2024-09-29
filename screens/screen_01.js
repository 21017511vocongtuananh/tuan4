import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require("../assets/DATA/Image 18.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Boost Productivity</Text>
                <Text style={styles.subtitleText}>Sim tasks, boost productivity</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Screen_02")}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSecondary}
                    onPress={() => navigation.navigate("Screen_03")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
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
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 500,
        height: 300,
        resizeMode: 'contain',
        border: 1,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 40,
        

    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        marginRight:120,

    },
    subtitleText: {
        fontSize: 16,
        color: "gray",
        marginRight:130,
    },
    buttonContainer: {
        width: '100%',
        alignItems: "center",
    },
    button: {
        backgroundColor: "blue",
        borderRadius: 25,
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonSecondary: {
        backgroundColor: "gray",
        borderRadius: 25,
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "white",
    },
});
