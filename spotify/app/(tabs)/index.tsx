import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloFire } from '@/components/HelloFire';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/akazaey.jpg')}
          style={{
                  width: 410,
                  height: 250,
                  resizeMode: 'cover', // or 'contain', 'stretch', 'center'
                }}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">AKAZAAAA!!!!</ThemedText><HelloFire /><HelloFire />
<HelloFire />


      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Akaza in Infinity Castle</ThemedText>
        <ThemedText>
          Step inside the legendary <ThemedText type="defaultSemiBold">Akaza Infinity Castle</ThemedText>,
          where every corridor stretches endlessly, every chamber glows with a mysterious aura,
          and the air hums with untold power.
          Explore its <ThemedText type="defaultSemiBold">infinite halls</ThemedText> and uncover secrets that
          challenge your imagination.
        </ThemedText>
        <ThemedText>
          Use your curiosity and courage to navigate the <ThemedText type="defaultSemiBold">infinite maze</ThemedText>.
          The adventure awaits, and every choice shapes your story in this <ThemedText type="defaultSemiBold">ever-expanding realm</ThemedText>.
        </ThemedText>

      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
