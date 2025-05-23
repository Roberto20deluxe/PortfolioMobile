// File: app/(tabs)/about.tsx
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const technologies = [
    {
        id: '1',
        name: 'React Native',
        description: 'Framework para desenvolvimento de aplicativos móveis multiplataforma',
        version: '0.72.4',
    },
    {
        id: '2',
        name: 'Expo',
        description: 'Plataforma para desenvolver e publicar aplicativos React Native',
        version: '49.0.0',
    },
    {
        id: '3',
        name: 'Expo Router',
        description: 'Sistema de navegação baseado em arquivos para Expo',
        version: '2.0.0',
    },
    {
        id: '4',
        name: 'TypeScript',
        description: 'Linguagem de programação tipada baseada em JavaScript',
        version: '5.1.6',
    },
    {
        id: '5',
        name: 'React Navigation',
        description: 'Biblioteca de navegação para React Native',
        version: '6.1.7',
    },
    {
        id: '6',
        name: 'React Native Reanimated',
        description: 'Biblioteca para animações fluidas',
        version: '3.3.0',
    },
    {
        id: '7',
        name: 'AsyncStorage',
        description: 'Sistema de armazenamento local para React Native',
        version: '1.18.2',
    },
];

export default function About() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Image source={require('@/assets/images/about_logo.png')} style={styles.logo} />
                    <Text style={styles.title}>Sobre o Aplicativo</Text>
                    <Text style={styles.subtitle}>
                        Desenvolvido como parte do meu projeto de portfólio mobile
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
                    <FlatList
                        data={technologies}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View style={styles.techItem}>
                                <View style={styles.techHeader}>
                                    <Text style={styles.techName}>{item.name}</Text>
                                    <Text style={styles.techVersion}>v{item.version}</Text>
                                </View>
                                <Text style={styles.techDescription}>{item.description}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D1E6D',
    },
    scrollContainer: {
        padding: 16,
    },
    header: {
        marginBottom: 25,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 16,
    },
    title: {
        fontFamily: 'PlayfairDisplay_700Bold',
        fontSize: 28,
        marginBottom: 8,
        color: '#FFD700',
    },
    subtitle: {
        fontSize: 16,
        color: '#FFD700',
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#2D1255',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#FFD700',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: 'PlayfairDisplay_700Bold',
        color: '#FFD700',
        marginBottom: 15,
    },
    techItem: {
        backgroundColor: '#3D1E6D',
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#FFD700',
    },
    techHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    techName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    techVersion: {
        fontSize: 14,
        color: '#FFD700',
        backgroundColor: '#2D1255',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
    },
    techDescription: {
        fontSize: 14,
        color: '#FFD700',
        lineHeight: 20,
    },
});
