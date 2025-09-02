import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="fire" size={24} color="8e8e8f" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color="black" />,
        }}
      />
      <Tabs.Screen
              name="ComponentShowcase"
              options={{
                title: 'Showcase',
                tabBarIcon: ({ color }) => <AntDesign name="star" size={24} color="#black" />
              }}
            />
      <Tabs.Screen
              name="spotify"
              options={{
                  title: "Spotify",
                  tabBarIcon: ({ color })=> <MaterialCommunityIcons name="spotify" size={24} color="8e8e8f" />
              }}
          />
    </Tabs>

  );
}
