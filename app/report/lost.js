import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { addLostReport } from '../context/report-context';
import { formatDateInput } from '../utils/date-format';

export default function LostItem() {
  const router = useRouter();
  const [object, setObject] = useState("");
  const [color, setColor] = useState("");
  const [id, setId] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [local, setLocal] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  const validateRequiredFields = () => {
    const nextErrors = {};

    if (!object.trim()) nextErrors.object = true;
    if (!color.trim()) nextErrors.color = true;
    if (!local.trim()) nextErrors.local = true;
    if (!time.trim()) nextErrors.time = true;

    return nextErrors;
  };

  const updateField = (field, value, setter) => {
    setter(value);

    if (value.trim()) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: false,
      }));
    }
  };

  const handleSubmit = () => {
    const nextErrors = validateRequiredFields();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    addLostReport({
      object: object.trim(),
      color: color.trim(),
      identifier: id.trim(),
      additionalInfo: additionalInfo.trim(),
      brand: brand.trim(),
      model: model.trim(),
      extraInfo: extraInfo.trim(),
      local: local.trim(),
      time: time.trim(),
    });

    router.push('/message/sucessoLost');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.tituloTexto}>Perdidos</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text-outline" size={20} color="#F01259" />
            <Text style={styles.sectionTitle}>Informações</Text>
          </View>

          <Text style={styles.label}>Objeto</Text>
          <TextInput
            placeholder="ex., Garrafa"
            placeholderTextColor="#888"
            style={[styles.input, errors.object && styles.inputError]}
            value={object}
            onChangeText={(value) => updateField('object', value, setObject)}
          />
          {errors.object && <Text style={styles.errorText}>Inserir dados</Text>}

          <Text style={styles.label}>Estado em que o objeto foi deixado</Text>
          <TextInput
            placeholder="Quebrado, rasgado, sujo..."
            placeholderTextColor="#888"
            style={styles.textarea}
            multiline
            value={additionalInfo}
            onChangeText={setAdditionalInfo}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location-outline" size={20} color="#F01259" />
            <Text style={styles.sectionTitle}>Quando e Onde</Text>
          </View>

          <Text style={styles.label}>Data</Text>
          <TextInput
            placeholder="dd/mm/aaaa"
            placeholderTextColor="#888"
            style={[styles.input, errors.time && styles.inputError]}
            value={time}
            onChangeText={(value) =>
              updateField('time', formatDateInput(value), setTime)
            }
            keyboardType="numeric"
          />
          {errors.time && <Text style={styles.errorText}>Inserir dados</Text>}

          <Text style={styles.label}>Local</Text>
          <TextInput
            placeholder="Sala 201, Cafeteria..."
            placeholderTextColor="#888"
            style={[styles.input, errors.local && styles.inputError]}
            value={local}
            onChangeText={(value) => updateField('local', value, setLocal)}
          />
          {errors.local && <Text style={styles.errorText}>Inserir dados</Text>}
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="pricetag-outline" size={20} color="#F01259" />
            <Text style={styles.sectionTitle}>Detalhes</Text>
          </View>

          <Text style={styles.label}>Cor</Text>
          <TextInput
            placeholder="ex., Black"
            placeholderTextColor="#888"
            style={[styles.input, errors.color && styles.inputError]}
            value={color}
            onChangeText={(value) => updateField('color', value, setColor)}
          />
          {errors.color && <Text style={styles.errorText}>Inserir dados</Text>}

          <Text style={styles.label}>Marca</Text>
          <TextInput
            placeholder="ex., Nike"
            placeholderTextColor="#888"
            style={styles.input}
            value={brand}
            onChangeText={setBrand}
          />

          <Text style={styles.label}>Modelo</Text>
          <TextInput
            placeholder="ex., Jordan"
            placeholderTextColor="#888"
            style={styles.input}
            value={model}
            onChangeText={setModel}
          />

          <Text style={styles.label}>Identificador</Text>
          <TextInput
            placeholder="ex., ABC123XYZ"
            placeholderTextColor="#888"
            style={styles.input}
            value={id}
            onChangeText={setId}
          />

          <Text style={styles.label}>Informações adicionais</Text>
          <TextInput
            placeholder="Detalhes que diferenciem o item"
            placeholderTextColor="#888"
            style={styles.textarea}
            multiline
            value={extraInfo}
            onChangeText={setExtraInfo}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar relatório</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    padding: 16,
  },

  tituloTexto: {
    fontSize: 32,
    color: '#F01259',
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 16
  },

  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },

  label: {
    color: '#ccc',
    marginBottom: 4,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
    padding: 12,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  inputError: {
    borderColor: '#ff4d4f',
  },

  textarea: {
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
    padding: 12,
    height: 100,
    color: '#fff',
    textAlignVertical: 'top',
  },

  errorText: {
    color: '#ff4d4f',
    fontSize: 12,
    marginTop: 4,
  },

  button: {
    backgroundColor: '#F01259',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});