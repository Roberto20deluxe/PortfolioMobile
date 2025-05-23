import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

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
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="academic"
                options={{
                    title: 'Acadêmico',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="graduationcap.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="professional"
                options={{
                    title: 'Profissional',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="projects"
                options={{
                    title: 'Projetos',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="folder.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="game"
                options={{
                    title: 'Jogo',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="gamecontroller.fill" color={color} />,
                }}
            />
        </Tabs>
    );
}