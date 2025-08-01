import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSource = require("@/assets/image/header.jpg");

export default function Header({ title, back = false }) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View styles={styles.imageContainer}>
                <Image source={imageSource} style={styles.image}/>
            </View>
            <View style={styles.titleContainer}>
                <View style={styles.imageContainer}>
                    <Image source={imageSource} styles={styles.image}/>
                </View>
                <View style={styles.titleContainer}>
                    <View style={styles.imageContainer}/>
             </View>
            </View>
        </View>
    )
}