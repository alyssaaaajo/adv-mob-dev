import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet, Alert } from 'react-native';

export default function ComponentShowcase() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Component Showcase 🎉</Text>

      <Image
        source={require('@/assets/images/demonslayer.jpg')}
        style={styles.image}
      />

      <Text style={styles.text}>
        This is a simple example using React Native components.
      </Text>

      <Button
        title="Click Me"
        onPress={() => Alert.alert("Hello!", "You clicked the button.")}
      />

      <Text style={styles.text}>
        Scroll down to see more content 👇
      </Text>

      {[...Array(20).keys()].map((i) => (
        <Text key={i} style={styles.listItem}>Hi I am number {i + 1}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#d0ebff',
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  },
});
