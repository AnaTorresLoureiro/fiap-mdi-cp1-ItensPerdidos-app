import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{ tabBarActiveTintColor: '#E83D84', headerShown: false }}
    >

      <Tabs.Screen
        name="report/found"
        options={{ href: null }}
      />

      <Tabs.Screen
        name="report/lost"
        options={{ href: null }}
      />

      <Tabs.Screen
        name="message/sucessoFound"
        options={{ href: null }}
      />

      <Tabs.Screen
        name="message/sucessoLost"
        options={{ href: null }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Relatar item',
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tab/history"
        options={{
          title: 'Itens registrados',
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}