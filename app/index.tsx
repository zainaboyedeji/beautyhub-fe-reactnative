import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const { width, height } = Dimensions.get("window");

const IMAGES = [
  "https://res.cloudinary.com/debcfaccq/image/upload/v1767085989/CHEEK_CHARM_by_beautybyad_diiadem_%EF%B8%8FThese_pictures_are_campaign_worthy_I_just_couldn_t_2_asbj1t.jpg",
  "https://res.cloudinary.com/debcfaccq/image/upload/v1767100160/rhodesbymo_sjpfpt.jpg",
];

export default function OnboardingSplash() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const progress = useSharedValue(0);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    progress.value = withTiming(index, { duration: 250 });
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
    if (index < IMAGES.length - 1) {
      autoAdvanceRef.current = setTimeout(() => setIndex((i) => i + 1), 2500);
    } else {
      autoAdvanceRef.current = setTimeout(
        () => router.replace("/welcome"),
        2000
      );
    }
    return () => {
      if (autoAdvanceRef.current) {
        clearTimeout(autoAdvanceRef.current);
      }
    };
  }, [index, progress, router]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.background}>
        <Image
          source={{ uri: IMAGES[index] }}
          style={styles.imageBg}
          contentFit="cover"
        />
        <View style={styles.topOverlay}>
          <Image
            source={{ uri: "https://res.cloudinary.com/debcfaccq/image/upload/v1766008840/Asset_12BH_bwsukr.png" }}
            style={styles.topLogo}
            contentFit="contain"
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.centerContent}>
            <ThemedText type="title" style={styles.title}>
              Shop Everything Beauty, ​
            </ThemedText>
            <ThemedText style={styles.subtitle}>All in One Hub</ThemedText>
          </View>
          <View style={styles.dots}>
            {IMAGES.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, i === index && styles.dotActive]}
              />
            ))}
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width,
    height,
    justifyContent: "flex-end",
  },
  imageBg: {
    ...StyleSheet.absoluteFillObject,
  },
  topOverlay: {
    position: "absolute",
    top: 60,
    width: "100%",
    alignItems: "center",
    zIndex: 10,
  },
  topLogo: {
    width: 120,
    height: 60,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  title: {
    color: "#FFD9F0",
    textShadowColor: "rgba(30,30,30,0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    color: "#FFD9F0",
    opacity: 0.95,
    textAlign: "center",
  },
  bottom: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: "center",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 10,
    marginBottom: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,217,240,0.8)",
  },
  dotActive: {
    backgroundColor: "#F7ACD9",
    width: 12,
  },
});
