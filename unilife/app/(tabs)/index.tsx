import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <View style={styles.textContainer}>
          <Text style={styles.heroTitle}>
            Get started to adjust with university{" "}
            <Text style={styles.heroHighlight}>life</Text>.
          </Text>
          <TouchableOpacity onPress={() => router.push("/(tabs)/explore")} style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <Image source={require("../../assets/images/ivdl.jpg")} style={styles.heroImage} />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0b0b26',
  },
  heroSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  textContainer: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color:'white'
  },
  heroHighlight: {
    color: '#ff4276',
  },
  heroButton: {
    backgroundColor: '#00a6ff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginVertical: 16,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 16,
  },

});

export default HomeScreen;
