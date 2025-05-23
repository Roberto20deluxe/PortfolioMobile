import React from 'react';
import { ScrollView, Text, View, StyleSheet, Platform, Dimensions } from 'react-native';
import { Image } from 'react-native';

const { width } = Dimensions.get('window');

const academicTimeline = [
    {
        title: 'RMR',
        period: '1º Período',
        description: 'Primeiro contato com UI/UX. Protótipos criados no Figma para apps fictícios.',
        image: require('@/assets/images/FigmaRMR.png'),
    },
    {
        title: 'Biblioteca em Java',
        period: '3º Período',
        description: 'Projeto com conceitos de POO.',
        image: require('@/assets/images/biblioteca.png'),
    },
    {
        title: 'Jogo de Labirinto em Java',
        period: '3º Período',
        description: 'Projeto com conceitos de POO, herança e polimorfismo. Interface gráfica com Swing.',
        image: require('@/assets/images/poo-game.gif'),
    },
    {
        title: 'FlavourIt com Django',
        period: '4º Período',
        description: 'App web de recomendação de receitas com base em ingredientes.',
    },
    {
        title: 'Projeto de Extensão UNICAP',
        period: '5º Período',
        description: 'Plataforma para gerenciar projetos de extensão universitária.',
        // image: require('@/assets/images/unicap.png'),
    },
    {
        title: 'Rotina e Portfolio Web',
        period: '5º Período',
        description: 'Sistema de cadastro de alunos e projetos com MariaDB e Java.',
        // image: require('@/assets/images/'),
    },
    {
        title: 'Portfólio Mobile',
        period: '5º Período',
        description: 'Aplicativo React Native com navegação por abas e visual moderno.',
        // image: require('@/assets/images/'),
    },
];

export default function AcademicScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Linha do Tempo Acadêmica</Text>
            <View style={styles.timelineContainer}>
                <View style={styles.timelineLine} />
                {academicTimeline.map((item, index) => (
                    <View key={index} style={styles.timelineItem}>
                        <View style={styles.bullet} />
                        <View style={styles.contentBox}>
                            <Text style={styles.period}>{item.period}</Text>
                            <Text style={styles.projectTitle}>{item.title}</Text>
                            <Text style={styles.projectDescription}>{item.description}</Text>
                            {item.image ? (
                                <Image
                                    source={item.image}
                                    style={styles.projectImage}
                                    resizeMode="cover"
                                />
                            ) : null}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#3D1E6D',
    },
    title: {
        fontFamily: 'PlayfairDisplay_700Bold',
        fontSize: 28,
        marginBottom: 20,
        color: '#FFD700',
        textAlign: 'center',
    },
    timelineContainer: {
        position: 'relative',
        paddingLeft: 30,
    },
    timelineLine: {
        position: 'absolute',
        left: 10,
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: '#FFD700',
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: 32,
    },
    bullet: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#FFD700',
        position: 'absolute',
        left: 3,
        top: 6,
    },
    contentBox: {
        marginLeft: 24,
        backgroundColor: '#2D1255',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#FFD700',
    },
    period: {
        fontSize: 12,
        color: '#FFD700',
        marginBottom: 4,
        fontFamily: 'PlayfairDisplay-Regular',
    },
    projectTitle: {
        fontFamily: 'PlayfairDisplay_700Bold',
        fontSize: 18,
        color: '#FFD700',
        marginBottom: 6,
    },
    projectDescription: {
        fontSize: 14,
        fontFamily: 'PlayfairDisplay-Regular',
        color: '#FFD700',
    },
    projectImage: {
        width: '100%',
        height: width * 0.4,
        borderRadius: 8,
        marginTop: 8,
    },
});