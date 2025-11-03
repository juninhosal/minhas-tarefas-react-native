import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import logo from "../assets/images/check.png";
import {colors} from "@/constants/colors";
import Task from "@/componentes/Task.jsx";
import {useState} from "react";

const initialTask = [
    {id: 1, completed: true, text: "Fazer Café"},
    {id: 2, completed: false, text: "Estudar React Native"},
    {id: 3, completed: false, text: "Academia"},
]

export default function IndexScreen() {

    const [tasks, setTasks] = useState(initialTask);
    const [text, setText] = useState("")
    const addTask = () => {
        const newTask = { id: tasks.length + 1, completed: false, text }
        setTasks ([...tasks, newTask])
        setText("")
    }

    return (
        <View style={style.mainContainer}>
            <View style={style.rowContainer}>
                <Image source={logo} style={style.image}/>
                <Text style={style.title}>Minhas Tarefas</Text>
            </View>
            <View style={style.rowContainer}>
                <TextInput style={style.input}
                           value={text}
                           onChangeText={setText}
                />
                <Pressable onPress={addTask}
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
                renderItem={({item}) =>
                    <Task text={item.text}
                          initialCompleted={item.completed}
                          deleteTask={() => setTasks(tasks.filter(task => task.id !== item.id))}
                    />
            }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}


const style = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 30,
        fontFamily: "Calibri",
        fontWeight: "600",
        color: colors.primary
    },
    input: {
        height: 40,
        paddingHorizontal: 16,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        flexGrow: 1
    },
    button: {
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
        margin: 50,
        flex: 1
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
