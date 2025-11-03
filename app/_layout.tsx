import { Stack } from 'expo-router';
import {StatusBar} from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function RootLayoutNav() {
  return (
      <>
          <GestureHandlerRootView>
              <StatusBar style="auto"/>
              <Stack screenOptions={{
                  headerShown: true
              }}>
                  <Stack.Screen name="index" options={{headerTitle: "Minhas Tarefas"}}/>
              </Stack>
          </GestureHandlerRootView>
      </>
  );
}
