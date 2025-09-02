import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import MusicPlayer from '@/components/MusicPlayer';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import akazaey from '../../assets/images/akazaey.jpg';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/akazaGf.jpg')}
              style={{
                      width: 410,
                      height: 250,
                      resizeMode: 'cover', // or 'contain', 'stretch', 'center'
                    }}
            />
          }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🌸 Akaza & Infinity Castle 🌸</ThemedText>
      </ThemedView>

      <ThemedText>
        Beneath the endless shifting halls of the Infinity Castle, their story unfolds.
        Though surrounded by shadows, their bond glows brighter than the lanterns that line the endless stairways.
      </ThemedText>

      <Collapsible title="A Love in the Darkness">
        <ThemedText>
          Within the labyrinth of mirrors and sliding doors, Akaza’s strength hides a softer truth — a heart that
          beats not for battle, but for devotion.
          Their presence together turns the cold castle into something almost alive, almost tender.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Infinity Reflections">
        <ThemedText>
          Every wall and corridor of the castle reflects their connection — endless, unbreakable,
          as if the Infinity Castle itself is a mirror of their eternal bond.
        </ThemedText>
      </Collapsible>

      <Collapsible title="A Flame That Won’t Fade">
        <ThemedText>
          Even in a place built for demons, where time has no meaning,
          their story carries a warmth that refuses to vanish.
          A fleeting romance that feels infinite — like the castle around them.
        </ThemedText>
        <Image
          source={require('../../assets/images/akazaey.jpg')}
          style={{ alignSelf: 'center', width: 220, height: 220, borderRadius: 12, marginTop: 12 }}
        />
      </Collapsible>

    </ParallaxScrollView>
  );


}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});


