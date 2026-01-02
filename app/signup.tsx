import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupScreen() {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <IconSymbol name="chevron.left" size={18} color={Colors.light.text} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Get started</Text>
        <Text style={styles.subtitle}>Create your account to continue</Text>

        {/* Name Fields */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>First name</Text>
            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor={styles.placeholder.color}
            />
          </View>
          <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>Last name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor={styles.placeholder.color}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor={styles.placeholder.color}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Phone */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.phoneContainer}>
            <View style={styles.flagContainer}>
              <View style={styles.flagPlaceholder} />
              <Text style={styles.phonePrefix}>+234</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter phone number"
              placeholderTextColor={styles.placeholder.color}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Gender */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender (optional)</Text>
          <TouchableOpacity style={[styles.input, styles.genderInput]}>
            <View style={styles.genderContainer}>
              <Text style={styles.placeholderText}>Select gender</Text>
              <IconSymbol
                name="chevron.right"
                size={20}
                color={Colors.light.text}
                style={styles.chevronIcon}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Birthday */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Birthday (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            placeholderTextColor={styles.placeholder.color}
          />
        </View>

        {/* Terms Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I have read & accepted Beauty Hub&apos;s{" "}
            <Text style={styles.linkText}>terms of service</Text> and{" "}
            <Text style={styles.linkText}>privacy policy</Text>, and to
            automatically receive Beauty Hub offers and notifications via email.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} disabled={!isChecked}>
          <Text style={styles.buttonText}>Save & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
   header: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 10,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 100, // Push content down to avoid header overlap
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 32,
    color: Colors.light.text,
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: Colors.light.text,
  },
  input: {
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "rgba(30, 30, 30, 0.05)",
    color: Colors.light.text,
  },
  placeholder: {
    color: "rgba(30, 30, 30, 0.4)",
  },
  placeholderText: {
    color: "rgba(30, 30, 30, 0.4)",
  },
  phoneContainer: {
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "rgba(30, 30, 30, 0.05)",
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(0,0,0,0.1)",
    paddingRight: 12,
    marginRight: 12,
  },
  flagPlaceholder: {
    width: 24,
    height: 16,
    backgroundColor: "#008751", // Nigeria green
    marginRight: 8,
    borderRadius: 2,
    borderLeftWidth: 8,
    borderLeftColor: "#fff",
    borderRightWidth: 8,
    borderRightColor: "#fff",
  },
  phonePrefix: {
    fontSize: 16,
    color: Colors.light.text,
  },
  phoneInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: Colors.light.text,
  },
  genderInput: {
    justifyContent: "center",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chevronIcon: {
    transform: [{ rotate: "90deg" }],
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
    marginBottom: 32,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 2,
    borderColor: Colors.light.text,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: Colors.light.text,
  },
  checkmark: {
    color: Colors.light.background,
    fontSize: 12,
  },
  checkboxText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.8,
    color: Colors.light.text,
  },
  linkText: {
    textDecorationLine: "underline",
  },
  button: {
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 30, 30, 0.15)",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
