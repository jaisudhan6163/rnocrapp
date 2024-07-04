import { View, Text, StyleSheet, TouchableOpacity, Alert,  } from "react-native";
import LaunCam from "../modules/LaunchCamera";
import LaunGal from "../modules/LaunchGallery";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>OCR Application using MLKit</Text>
            <TouchableOpacity 
                onPress={async () => {
                    var dat = await LaunCam()
                    console.log(dat)
                    navigation.navigate('Display', {data: dat})
                }}
                style = {styles.button}>
                    <Text style = {styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={async () => {
                    var dat = await LaunGal()
                    console.log(dat)
                    navigation.navigate('Display', {data: dat})
                }}
                style = {styles.button}>
                    <Text style = {styles.buttonText}>Open  Gallery</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop:250
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 50,
    },
    buttonText:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color:'#fff',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:7.5,
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: '#0068a6',
        marginBottom: 20,
    },
})