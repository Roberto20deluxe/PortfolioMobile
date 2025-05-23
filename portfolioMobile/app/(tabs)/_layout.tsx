// Fixed: use Image from react-native
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

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
                tabBarActiveTintColor: '#3D1E6D',
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
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="academic"
                options={{
                    title: 'Acadêmico',
                    tabBarIcon: ({ size }) => (
                        <Image
                            source={require('@/assets/images/Livro.png')}
                            style={{ width: size, height: size }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="projects"
                options={{
                    title: 'Projetos',
                    tabBarIcon: ({ size }) => (
                        <Image
                            source={require('@/assets/images/projects_logo.png')}
                            style={{ width: size, height: size }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ size }) => (
                        <Image
                            source={require('@/assets/images/about_logo.png')}
                            style={{ width: size, height: size }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
