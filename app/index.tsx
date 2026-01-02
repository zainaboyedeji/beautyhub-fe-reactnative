import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { ThemedView } from "@/components/themed-view";

const { width, height } = Dimensions.get("window");

const IMAGES = [
  "https://res.cloudinary.com/debcfaccq/image/upload/v1767085989/CHEEK_CHARM_by_beautybyad_diiadem_%EF%B8%8FThese_pictures_are_campaign_worthy_I_just_couldn_t_2_asbj1t.jpg",
  "https://res.cloudinary.com/debcfaccq/image/upload/v1767100160/rhodesbymo_sjpfpt.jpg",
];

export default function OnboardingSplash() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
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
  }, [index, router]);

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
});
