import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getMovieDetails } from './services/api'; // Ajuste conforme seu caminho real

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (e) {
        alert('Erro ao carregar detalhes');
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.year}>{movie.Year}</Text>
      <Text style={styles.plot}>{movie.Plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  year: { fontSize: 16, color: '#666', marginTop: 10 },
  plot: { fontSize: 14, marginTop: 10, textAlign: 'center' }
});
