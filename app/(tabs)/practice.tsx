import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Brain, Volume as VolumeUp, MessageSquare, PenTool } from 'lucide-react-native';

const PRACTICE_SECTIONS = [
  {
    id: 'vocab',
    title: 'Vocabulary',
    description: 'Practice new words with flashcards',
    icon: Brain,
    color: '#f97316',
  },
  {
    id: 'pronunciation',
    title: 'Pronunciation',
    description: 'Perfect your accent with speech exercises',
    icon: VolumeUp,
    color: '#06b6d4',
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Practice writing sentences and phrases',
    icon: PenTool,
    color: '#8b5cf6',
  },
  {
    id: 'conversation',
    title: 'Conversation',
    description: 'Practice real-world conversations',
    icon: MessageSquare,
    color: '#ec4899',
  },
];

export default function PracticeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Practice</Text>
        <Text style={styles.subtitle}>Choose a skill to practice</Text>
      </View>

      <View style={styles.grid}>
        {PRACTICE_SECTIONS.map((section) => (
          <TouchableOpacity key={section.id} style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: section.color }]}>
              <section.icon size={24} color="#ffffff" />
            </View>
            <Text style={styles.cardTitle}>{section.title}</Text>
            <Text style={styles.cardDescription}>{section.description}</Text>
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});