import { Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 32 }}>Hello, world</Text>
      <TextInput
        multiline
        scrollEnabled={false}
        style={{
          lineHeight: 22,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
}
