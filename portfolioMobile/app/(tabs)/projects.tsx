import React from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions, Pressable, Text, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');

export default function ProjectsScreen() {
    const openLink = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ThemedView style={styles.header}>
                <ThemedText type="title" style={styles.title}>
                    Projetos
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.projectsGrid}>
                {/* Projeto POO */}
                <ThemedView style={styles.projectCard}>
                    <ThemedText type="subtitle" style={styles.projectTitle}>
                        Projeto POO
                    </ThemedText>
                    <Image
                        source={require('@/assets/images/poo-game.gif')}
                        style={styles.projectGif}
                        resizeMode="cover"
                    />
                    <ThemedText style={styles.projectDescription}>
                        Jogo desenvolvido com conceitos de Programação Orientada a Objetos em Java.
                        Utiliza herança, polimorfismo e interface gráfica.
                    </ThemedText>
                    <Pressable
                        style={styles.button}
                        onPress={() => openLink('https://github.com/Roberto20deluxe/poo-project')}
                    >
                        <Text style={styles.buttonText}>Ver Mais</Text>
                    </Pressable>
                </ThemedView>

                {/* Projeto Banco de Dados */}
                <ThemedView style={styles.projectCard}>
                    <ThemedText type="subtitle" style={styles.projectTitle}>
                        Projeto Banco de Dados
                    </ThemedText>
                    <ThemedText style={styles.projectDescription}>
                        Projeto de cadastro, registro de login em instituição usando JAVA MariaDB.
                    </ThemedText>
                    <Pressable
                        style={styles.button}
                        onPress={() => openLink('https://github.com/mlrlima/Projeto_DB/tree/main')}
                    >
                        <Text style={styles.buttonText}>Ver Mais</Text>
                    </Pressable>
                </ThemedView>

                {/* Projeto FlavourIt */}
                <ThemedView style={styles.projectCard}>
                    <ThemedText type="subtitle" style={styles.projectTitle}>
                        Projeto FlavourIt
                    </ThemedText>
                    <ThemedText style={styles.projectDescription}>
                        App web para recomendação de receitas com base nos ingredientes disponíveis.
                        Desenvolvido com Django
                    </ThemedText>
                    <Pressable
                        style={styles.button}
                        onPress={() => openLink('https://github.com/Roberto20deluxe/flavourit-project')}
                    >
                        <Text style={styles.buttonText}>Ver Mais</Text>
                    </Pressable>
                </ThemedView>

                {/* Projeto para UNICAP */}
                <ThemedView style={styles.projectCard}>
                    <ThemedText type="subtitle" style={styles.projectTitle}>
                        Projeto para UNICAP
                    </ThemedText>
                    <ThemedText style={styles.projectDescription}>
                        App web para cadastro e visualizção de projetos de extensão feito para a
                        Universidade Católica de Pernambuco
                    </ThemedText>
                    <Pressable
                        style={styles.button}
                        onPress={() => openLink('https://github.com/Dhu-a/portalDeExtensaoUnicap')}
                    >
                        <Text style={styles.buttonText}>Ver Mais</Text>
                    </Pressable>
                </ThemedView>
                {/* Projeto Web*/}
                <ThemedView style={styles.projectCard}>
                    <ThemedText type="subtitle" style={styles.projectTitle}>
                        Projeto jogo bulls & cows
                    </ThemedText>
                    <ThemedText style={styles.projectDescription}>
                        Jogo de advinhação numérica.
                    </ThemedText>
                    <Pressable
                        style={styles.button}
                        onPress={() => openLink('https://atvwebrotinaregis.surge.sh/portfolio/game.html')}
                    >
                        <Text style={styles.buttonText}>Ver Mais</Text>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#3D1E6D', // Background roxo da tela inteira
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'PlayfairDisplay_700Bold',
        fontSize: 28,
        marginBottom: 12,
        color: '#FFD700', // Título principal dourado
    },
    projectsGrid: {
        width: '100%',
    },
    projectCard: {
        backgroundColor: '#2D1255', // Roxo mais escuro que o background
        borderRadius: 16,
        marginBottom: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#FFD700', // Outline dourada
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    projectTitle: {
        fontFamily: 'PlayfairDisplay_700Bold',
        fontSize: 20,
        marginBottom: 10,
        color: '#FFD700', // Título dourado
    },
    projectGif: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    projectLogo: {
        width: '100%',
        height: 100,
        marginBottom: 12,
    },
    projectDescription: {
        fontSize: 14,
        marginBottom: 16,
        lineHeight: 20,
        color: '#FFD700', // Texto descritivo dourado
    },
    button: {
        backgroundColor: '#E5C100',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        textAlign: 'center',
    },
});