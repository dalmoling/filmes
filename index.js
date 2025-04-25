import { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import MovieCard from './components/MovieCard'; // Verifique se o caminho está correto

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?apikey=1d3c64cb&s=${searchTerm}&type=movie`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (e) {
      alert('Erro ao buscar filmes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={fetchMovies}
        placeholder="Buscar filmes..."
      />
      {loading && <ActivityIndicator size="large" />}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 16
  }
});
