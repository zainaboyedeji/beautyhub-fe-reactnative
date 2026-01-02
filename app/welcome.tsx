import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/debcfaccq/image/upload/v1767085989/CHEEK_CHARM_by_beautybyad_diiadem_%EF%B8%8FThese_pictures_are_campaign_worthy_I_just_couldn_t_2_asbj1t.jpg' }}
          style={styles.heroImage}
          contentFit="cover"
        />
        <View style={styles.overlay}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/debcfaccq/image/upload/v1766008840/Asset_12BH_bwsukr.png' }}
            style={styles.logo}
            contentFit="contain"
          />
        </View>
      </View>

      <ThemedView style={styles.bottomSection}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroText}>Shop Everything Beauty,</Text>
          <Text style={styles.heroText}>All in One Hub</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Login To Your Account</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={handleGetStarted}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: height * 0.7, // Occupy ~70% of the screen
    width: width,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: 'rgba(30,30,30,0.1)', // Slight tint for text readability if needed
  },
  logo: {
    width: 120,
    height: 60,
  },
  heroTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E1E1E',
  },
  bottomSection: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24, // Overlap slightly
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 16,
    borderRadius: 0, // Rectangular as per screenshot (or slightly rounded? Screenshot looks rectangular with maybe small radius. I'll stick to slight radius or 0)
    // Screenshot actually looks like standard buttons, maybe small radius (4px). Let's go with 0 for sharp look or 4.
    // Screenshot buttons are rectangular.
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signupText: {
    fontSize: 14,
    color: '#1E1E1E',
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1E1E',
    textDecorationLine: 'underline',
  },
  footerText: {
    fontSize: 12,
    color: '#1E1E1E',
    textDecorationLine: 'underline',
  },
});
