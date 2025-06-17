import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TopBar from '../components/TopBar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <TopBar />
      <View style={styles.container}>
        <Text style={styles.text}>[ Map will go here ]</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#eef' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});
