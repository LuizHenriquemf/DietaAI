import {
    View,
    StyleSheet,
    Pressable,
    Text,
    SafeAreaView,
    StatusBar,
    Platform
} from "react-native";

import { Feather } from '@expo/vector-icons'
import { colors } from "../../constants/colors";


export function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Header AQQ!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        marginBottom: 14,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34

    }
})