import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppContainer />
      </View>
    </SafeAreaProvider>
    
  );
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen,
},
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: () => {
  //       const routeName = navigation.state.routeName;
  //       console.log(routeName)
  //       if (routeName === "WriteStory") {
  //         return (
  //           <Image
  //             source={require("./assets/write.png")}
  //             style={{ width: 40, height: 40 }}
  //           />
  //         )

  //       }
  //       else if (routeName === "ReadStory") {
  //         return (
  //           <Image
  //             source={require("./assets/read.png")}
  //             style={{ width: 40, height: 40 }}
  //           />)

  //       }
  //     }
  //   })
  // }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
