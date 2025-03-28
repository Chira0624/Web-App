import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const LANGUAGES = [
  { id: 'es', name: 'Spanish', flag: 'https://images.unsplash.com/photo-1516507138820-056d5448e006?w=64&h=64&fit=crop' },
  { id: 'fr', name: 'French', flag: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=64&h=64&fit=crop' },
  { id: 'de', name: 'German', flag: 'https://images.unsplash.com/photo-1554072675-66db59dba46f?w=64&h=64&fit=crop' },
];

const LESSONS = [
  { id: 1, title: 'Basic Greetings', duration: '5 min', progress: 0.8 },
  { id: 2, title: 'Numbers 1-10', duration: '7 min', progress: 0.6 },
  { id: 3, title: 'Common Phrases', duration: '10 min', progress: 0.3 },
];

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Learner! 👋</Text>
        <Text style={styles.subtitle}>What would you like to learn today?</Text>
      </View>

      <View style={styles.languageSection}>
        <Text style={styles.sectionTitle}>Choose Language</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languageList}>
          {LANGUAGES.map((language) => (
            <TouchableOpacity key={language.id} style={styles.languageCard}>
              <Image source={{ uri: language.flag }} style={styles.languageFlag} />
              <Text style={styles.languageName}>{language.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.lessonsSection}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        {LESSONS.map((lesson) => (
          <TouchableOpacity key={lesson.id} style={styles.lessonCard}>
            <View style={styles.lessonInfo}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.lessonDuration}>{lesson.duration}</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${lesson.progress * 100}%` }]} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#7c3aed',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e9d5ff',
  },
  languageSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  languageList: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  languageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  languageFlag: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
  },
  languageName: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '500',
  },
  lessonsSection: {
    padding: 24,
  },
  lessonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  lessonInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#64748b',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7c3aed',
    borderRadius: 2,
  },
});