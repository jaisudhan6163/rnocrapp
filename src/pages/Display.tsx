import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DisplayScreen(data : any) {
    try{
        data = data.route.params.data
        if(data.message === 'success'){
            return (
                <View style={styles.container}>
                {data.body.map((item, index) => (
                    <Text style={styles.text}>{item.text}</Text>
                ))}
                </View>
            );

        }
        else{
            console.log(data)
            return(
                <Text>ERROR</Text>
            )
        }
    }catch(e){
        return(
            <Text>ERROR</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16
    },
    button: {
      backgroundColor: '#6200ee',
      padding: 10,
      marginVertical: 10,
      width: '80%',
      borderRadius: 5,
      alignItems: 'center'
    },
    text: {
      color: '#000',
      fontSize: 16
    }
  });