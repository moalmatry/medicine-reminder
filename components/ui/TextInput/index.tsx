import {
  StyleSheet,
  Text,
  View,
  TextInput as RnTextInput,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

interface TextInputProps {
  placeholder: string;
  placeholderTextColor: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: any;
  name: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextInput = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  name,
  error,
  containerStyle,
  style,
}: TextInputProps) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <RnTextInput
        secureTextEntry={secureTextEntry}
        style={[
          styles.mainInput,
          style,
          error && error[name] && styles.inputError,
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
          if (error & error[name]) {
            error[name] = "";
          }
        }}
      />
      {error && error[name] && (
        <Text style={styles.errorText}>{error[name]}</Text>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  mainInput: {
    fontSize: 20,
    color: "#333",
    padding: 15,
  },
  inputError: {
    borderColor: "#FF5252",
  },
  errorText: {
    color: "#FF5252",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
  },
});
