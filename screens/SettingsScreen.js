import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import TopBar from '../components/TopBar'; 

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <TopBar />
      <View style={styles.container}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>👤  Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🎧  Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>❓  About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 20 },
  option: {
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
});
