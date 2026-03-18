import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function MessageLost() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Image
        source={require("../../assets/logo-fiap.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Sentimos muito pelo o ocorrido!</Text>
      <Text style={styles.texto}>Sua solicitação foi registrada e ajudará a comunidade a identificar possíveis itens encontrados no campus. Fique de olho pelo aplicativo para verificar se alguma descrição corresponde ao seu item. Caso alguém encontre o objeto, a secretaria entrará em contato para orientar sobre a retirada.</Text>
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
        alignSelf: 'start',
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
});
