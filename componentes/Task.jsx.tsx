import {View, StyleSheet, Pressable, Text, Animated} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "@/constants/colors";
import {useState} from "react";
import {Gesture, GestureDetector, Directions } from "react-native-gesture-handler";

interface TaskProps {
    text: string;
    initialCompleted: boolean;
    deleteTask: () => void;
}

export default function Task({ text, initialCompleted, deleteTask }: TaskProps) {
    const [completed, setCompleted] = useState(initialCompleted)
    const swipe = new Animated.Value(0);

    const FlingGesture = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onStart(() => {
            Animated.timing(swipe, {
                toValue: 500,
                duration: 300,
                useNativeDriver: true
            }).start(() => deleteTask())
        })
        .runOnJS(true)
    return(
        <GestureDetector gesture={FlingGesture}>
            <Animated.View style={[style.rowContainer, { transform: [{ translateX: swipe }]}]}>
                <Pressable onPress={() => setCompleted(!completed)}>
                    <Ionicons
                        name={"checkmark-circle"}
                        size={32}
                        color={completed ? colors.primary : "gray"}
                    />
                </Pressable>
                <Text>{text}</Text>
            </Animated.View>
        </GestureDetector>
    )
}

const style = StyleSheet.create({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        elevation: 3, // Android
        shadowColor: "#000000", // iOS
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: "#FFFFFF",
        padding: 10
    }
})