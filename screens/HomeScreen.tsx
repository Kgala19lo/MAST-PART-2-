// screens/HomeScreen.tsx
import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CHEF CHRISTOFFEL.COM</Text>

      <Image source={require('../assets/img1.png')} style={styles.image} />

      <Text style={styles.subtitle}>
        Our job is to fill your tummy with delicious food and fast delivery.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  image: { width: 320, height: 340, resizeMode: 'contain', borderWidth: 2, borderColor: '#0ea5ff' },
  subtitle: { marginTop: 12, textAlign: 'center', color: '#333' },
  button: { backgroundColor: '#ff3b30', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 8, marginTop: 18 },
  buttonText: { color: '#fff', fontWeight: '700' },
});
