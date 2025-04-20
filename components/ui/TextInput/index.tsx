import React from "react";
import { Control, Controller } from "react-hook-form";
import {
  KeyboardTypeOptions,
  TextInput as RnTextInput,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface TextInputProps {
  placeholder: string;
  placeholderTextColor: string;
  value: string;
  secureTextEntry?: boolean;
  error?: string;
  name: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const TextInput = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  name,
  error,
  containerStyle,
  style,
  keyboardType,
  control,
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={[styles.inputContainer, containerStyle]}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <RnTextInput
              secureTextEntry={secureTextEntry}
              style={[styles.mainInput, style, error && styles.inputError]}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 16,
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
