import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import React from 'react';

export default function App() {
  const [inputValue, setInputValue] = React.useState("");

  const bankAccount = "01-545455444-4343-00";
  const copyText = (text) => {
    Clipboard.setString(text);
  };

  const setInputToCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <Text>{bankAccount}</Text>
      <Button title="Copy Bank Account" onPress={() => copyText(bankAccount)} />
      <TextInput onChangeText={setInputValue} value={inputValue} />
      <Button title="Set Input Value" onPress={setInputToCopiedText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
