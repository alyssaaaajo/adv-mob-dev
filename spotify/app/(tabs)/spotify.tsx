// spotify.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SpotifyAuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo and App Name */}
      <View style={styles.logoContainer}>
        <FontAwesome name="spotify" size={150} color="#1DB954" />
        <Text style={styles.title}>Spotify</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {isSignUp && (
          <>
            <TextInput placeholder="Username" placeholderTextColor="#aaa" style={styles.input} />
            <TextInput placeholder="Date of Birth (DD/MM/YYYY)" placeholderTextColor="#aaa" style={styles.input} />
            <TextInput placeholder="Gender (e.g. Male, Female)" placeholderTextColor="#aaa" style={styles.input} />
          </>
        )}
        <TextInput placeholder="Email address" placeholderTextColor="#aaa" style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor="#aaa" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Sign in'}</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>{isSignUp ? 'Sign Up With' : 'Be Connect With'}</Text>

        {/* Social Icons */}
        <View style={styles.socialIcons}>
          <FontAwesome name="facebook" size={24} color="#fff" style={styles.icon} />
          <FontAwesome name="google" size={24} color="#fff" style={styles.icon} />
        </View>

        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.toggleText}>
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01060D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  form: {
    backgroundColor: '#01060D',
    width: '100%',
    borderRadius: 20,
    padding: 20,
  },
  input: {
    backgroundColor: '#262729',
    color: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#ccc',
    marginVertical: 1,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  toggleText: {
    color: '#1DB954',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
