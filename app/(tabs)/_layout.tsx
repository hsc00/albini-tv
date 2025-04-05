import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image, ImageStyle } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { tabConfig } from '@/config/tab-config';

type TabBarIconProps = { color: string };

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      {tabConfig.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            title: tab.name,
            tabBarIcon: ({ color }: TabBarIconProps) => (
              <Image
                source={typeof tab.url === 'string' ? { uri: tab.url } : tab.url}
                style={{ width: 28, height: 28, tintColor: color } as ImageStyle}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
