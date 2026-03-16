import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function MessageFound() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Image
        source={require("../../assets/logo-fiap.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Obrigado por informar o item encontrado!</Text>
      <Text style={styles.texto}>Para que possamos ajudar a localizar o dono, pedimos que o objeto seja entregue na secretaria do 6º andar dentro do prazo de 24 horas. Caso o item não seja entregue nesse período, o relatório será desconsiderado.</Text>
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
});
