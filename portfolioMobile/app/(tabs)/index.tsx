import { Image } from 'expo-image';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Dimensions,
  Linking
} from 'react-native';
import { useRouter } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  // Função para navegar para a tab de projetos
  const navigateToProjects = () => {
    router.push('/(tabs)/projects');
  };

  // Função para navegar para a página "sobre mim"
  const navigateToAbout = () => {
    router.push('/(tabs)/about');
  };
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
      <ParallaxScrollView
          headerBackgroundColor={{ light: '#F4F1EC', dark: '#121212' }}
          headerImage={
            <View style={styles.logoHeader}>
              <Image
                  source={require('@/assets/images/crown.png')}
                  style={styles.crownPeek}
              />
            </View>
          }>
        <ThemedView style={styles.heroSection}>
          <ThemedText type="title" style={styles.heroTitle}>
            Roberto Regis
          </ThemedText>
          <ThemedText type="default" style={styles.heroSubtitle}>
            Full-Stack Developer, Engenheiro de Software e um entusiasta da tecnologia... Em Constante Evolução
          </ThemedText>
          <ThemedView style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={navigateToProjects}>
              <Text style={styles.buttonText}>Meus Projetos</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.outline]}
                onPress={navigateToAbout}
            >
              <Text style={[styles.buttonText, styles.outlineText]}>Tecnologias usadas no app</Text>
            </Pressable>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Bem-vindo ao Meu Mundo Digital!</ThemedText>
          <ThemedText>
            Sou Roberto Regis, um estudante de Ciência da Computação no 5º período, apaixonado por transformar ideias em realidade através do código.
          </ThemedText>
          <ThemedText>
            Explore meu portfólio para descobrir mais sobre minha trajetória como desenvolvedor e engenheiro de software em formação.
          </ThemedText>
          <ThemedView style={styles.section}>
            <Pressable onPress={() => openLink('https://github.com/Roberto20deluxe')}>
              <Text style={styles.buttonText}>GitHub</Text>
            </Pressable>
            <Pressable onPress={() => openLink('https://github.com/mlrlima/Projeto_DB/tree/main')}>
              <Text style={styles.buttonText}>LinkedIn</Text>
            </Pressable>
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logoHeader: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    overflow: 'hidden',
  },
  crownPeek: {
    width: width,
    height: width * 0.7,
    left: -width * 0.2,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    marginBottom: 8,
  },
  heroSubtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#E5C100',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  outlineText: {
    color: '#FFD700',
  },
  section: {
    padding: 20,
  },
});