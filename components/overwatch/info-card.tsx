import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { OW_ORANGE } from '@/constants/overwatch';
import { Palette } from '@/constants/theme';

type Props = PropsWithChildren<{
  title: string;
  accentColor?: string;
  caption?: string;
}>;

/** Cartão com borda colorida usado para destacar informações. */
export function InfoCard({ title, caption, accentColor = OW_ORANGE, children }: Props) {
  return (
    <View style={ styles.card }>
      <ThemedText type="defaultSemiBold" style={{ color: accentColor }}>
        {title}
      </ThemedText>
      {caption ? <ThemedText style={styles.caption}>{caption}</ThemedText> : null}
      {children}
    </View>
  );
}

/** Item de lista com marcador. */
export function Bullet({ children }: PropsWithChildren) {
  return (
    <View style={styles.bulletRow}>
      <ThemedText style={styles.bullet}>•</ThemedText>
      <ThemedText style={styles.bulletText}>{children}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Palette.surface,
    borderRadius: 10,
    padding: 14,
    gap: 6,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
    color: Palette.textMuted,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 8,
  },
  bullet: {
    color: OW_ORANGE,
  },
  bulletText: {
    flex: 1,
  },
});
