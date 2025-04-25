import { useRouter } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/${movie.imdbID}`)}
    >
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden'
  },
  poster: { width: 100, height: 150 },
  info: { padding: 10, flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
  year: { fontSize: 16, color: '#666', marginTop: 4 }
});
