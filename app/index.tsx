import {Animated, FlatList, Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import logo from "../assets/images/check.png";
import Alert from "@blazejkustra/react-native-alert";
import {colors} from "@/constants/colors";
import View = Animated.View;


export default function IndexScreen() {
    const tasks =[
        { id: 1, completed: true, text: "Fazer Café" },
        { id: 2, completed: false, text: "Estudar React Native" },
        { id: 3, completed: false, text: "Academia" },
    ]

  return (
    <ScrollView style={style.mainContainer}>
        <View style={style.rowContainer}>
            <Image source={logo} style={style.image} />
            <Text style={style.title}>Minhas Tarefas</Text>
        </View>
        <View style={style.rowContainer}>
            <TextInput style={style.input}/>
            <Pressable onPress={() => Alert.alert('oiee!', 'Viva a vida')}
                       style={
                           ({pressed}) => [
                               style.button,
                               {backgroundColor: pressed ? "gray" : colors.primary}
                           ]
                       }>
                <Text style={style.buttonText}>
                    +
                </Text>
            </Pressable>
        </View>
        <FlatList
            data={tasks}
            renderItem={({item}) => <Text>{item.text}</Text>}
            keyExtractor={(item) => item.id.toString()}
        />
    </ScrollView>
  );
}


const style = StyleSheet.create({
    image:{
        width: 50,
        height: 50
    },
    title:{
        fontSize: 30,
        fontFamily: "Calibri",
        fontWeight: 600,
        color: colors.primary
    },
    input:{
        height: 40,
        paddingHorizontal: 16,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        flexGrow: 1
    },
    button:{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 15
    },
    mainContainer: {
      margin: 50
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginBottom: 20
    }
});