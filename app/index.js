import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Image
        source={require("../assets/logo-fiap.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Perdeu algo? A gente ajuda a encontrar.</Text>
      <Text style={styles.texto}>Perdeu algo no campus da FIAP? Encontrou um objeto esquecido? O FindIt ajuda a comunidade FIAP a conectar quem perdeu com quem encontrou, facilitando a devolução de itens de forma rápida e segura.</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('report/found')}>
             <MaterialIcons name="add" size={20} color="#E1E1E1" />
            <Text style={styles.botaoTexto}>Achei um item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('report/lost')}>
            <MaterialIcons name="remove" size={20} color="#E1E1E1" />
            <Text style={styles.botaoTexto}>Perdi um item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#131313'
    },
    logo: {
        height: 80
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#E1E1E1',
        marginLeft: 24,
        marginRight: 24
    },
    texto:{
        fontSize: 12,
        color: '#E1E1E1',
        marginBottom: 50,
        marginLeft: 24,
        marginRight: 24
    },
    buttons:{
        flexDirection: 'row',
        gap: 14
    },
    botao:{
        backgroundColor: '#F01259',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: 'row',
        gap: 8
    },
    botaoTexto:{
        color: '#E1E1E1',
        fontSize: 14,
        fontWeight: '600'
    },
});
