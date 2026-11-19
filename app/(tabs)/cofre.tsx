import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { OwHeader } from '@/components/overwatch/ow-header';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { OW_DARK } from '@/constants/overwatch';
import { Palette } from '@/constants/theme';

/** Segredo do cofre: o ano de lançamento do Overwatch original. */
const SECRET = '2016';

const SAFE_CLOSED = require('@/assets/images/cofre/cofre-fechado.png');
const SAFE_OPEN = require('@/assets/images/cofre/cofre-aberto.png');

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'back'] as const;
type Key = (typeof KEYS)[number];

type Status = 'idle' | 'wrong' | 'open';

function feedback(type: Haptics.NotificationFeedbackType) {
  if (Platform.OS !== 'web') {
    Haptics.notificationAsync(type).catch(() => {});
  }
}

export default function CofreScreen() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const shake = useSharedValue(0);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shake.value }],
  }));

  function tryOpen(attempt: string) {
    if (attempt === SECRET) {
      setStatus('open');
      feedback(Haptics.NotificationFeedbackType.Success);
      return;
    }
    setStatus('wrong');
    setCode('');
    feedback(Haptics.NotificationFeedbackType.Error);
    shake.value = withSequence(
      withTiming(-12, { duration: 50 }),
      withTiming(12, { duration: 50 }),
      withTiming(-8, { duration: 50 }),
      withTiming(8, { duration: 50 }),
      withTiming(0, { duration: 50 })
    );
  }

  function handleKey(key: Key) {
    if (status === 'open') return;
    if (key === 'clear') {
      setCode('');
      setStatus('idle');
      return;
    }
    if (key === 'back') {
      setCode((current) => current.slice(0, -1));
      setStatus('idle');
      return;
    }
    if (code.length >= SECRET.length) return;

    const next = code + key;
    setCode(next);
    setStatus('idle');
    if (next.length === SECRET.length) {
      tryOpen(next);
    }
  }

  function closeSafe() {
    setCode('');
    setStatus('idle');
  }

  const isOpen = status === 'open';
  const message =
    status === 'open'
      ? 'Cofre aberto! Você encontrou o tesouro.'
      : status === 'wrong'
        ? 'Código incorreto. Tente novamente.'
        : `Digite o código de ${SECRET.length} dígitos.`;
  const messageColor =
    status === 'open' ? Palette.orange : status === 'wrong' ? '#E8604C' : Palette.textMuted;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: OW_DARK, dark: OW_DARK }}
      headerImage={<OwHeader icon="lock.fill" title="Cofre" subtitle="Descubra o código secreto" />}>
      <ThemedView style={styles.intro}>
        <ThemedText type="title">Cofre</ThemedText>
        <ThemedText style={styles.hint}>
          Dica: o ano em que o primeiro Overwatch foi lançado.
        </ThemedText>
      </ThemedView>

      <Animated.View style={[styles.safeWrapper, shakeStyle]}>
        <Image
          source={isOpen ? SAFE_OPEN : SAFE_CLOSED}
          style={styles.safe}
          contentFit="contain"
          transition={250}
          accessibilityLabel={isOpen ? 'Cofre aberto com ouro e dinheiro' : 'Cofre fechado'}
        />
      </Animated.View>

      <View style={styles.display}>
        {Array.from({ length: SECRET.length }, (_, i) => (
          <View
            key={i}
            style={[
              styles.slot,
              i < code.length && styles.slotFilled,
              status === 'wrong' && styles.slotWrong,
            ]}>
            <ThemedText style={styles.slotText}>{code[i] ?? ''}</ThemedText>
          </View>
        ))}
      </View>
      <ThemedText style={[styles.message, { color: messageColor }]}>{message}</ThemedText>

      {isOpen ? (
        <Pressable
          onPress={closeSafe}
          style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}>
          <IconSymbol name="lock.fill" size={20} color={Palette.navy} />
          <ThemedText style={styles.closeText}>Fechar cofre</ThemedText>
        </Pressable>
      ) : (
        <View style={styles.keypad}>
          {KEYS.map((key) => (
            <Pressable
              key={key}
              onPress={() => handleKey(key)}
              accessibilityLabel={
                key === 'clear' ? 'Limpar' : key === 'back' ? 'Apagar' : `Número ${key}`
              }
              style={({ pressed }) => [
                styles.key,
                key !== 'clear' && key !== 'back' && styles.keyDigit,
                pressed && styles.pressed,
              ]}>
              {key === 'back' ? (
                <IconSymbol name="delete.left.fill" size={24} color={Palette.textMuted} />
              ) : (
                <ThemedText style={key === 'clear' ? styles.keyLabel : styles.keyDigitText}>
                  {key === 'clear' ? 'Limpar' : key}
                </ThemedText>
              )}
            </Pressable>
          ))}
        </View>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  intro: {
    gap: 8,
  },
  hint: {
    color: Palette.textMuted,
    fontStyle: 'italic',
  },
  safeWrapper: {
    alignItems: 'center',
  },
  safe: {
    width: 240,
    aspectRatio: 180 / 156,
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  slot: {
    width: 52,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Palette.border,
    backgroundColor: Palette.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotFilled: {
    borderColor: Palette.orange,
  },
  slotWrong: {
    borderColor: '#E8604C',
  },
  slotText: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    fontWeight: '600',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    alignSelf: 'center',
    maxWidth: 3 * 80 + 2 * 12,
  },
  key: {
    width: 80,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyDigit: {
    backgroundColor: Palette.surface,
    borderWidth: 1,
    borderColor: Palette.border,
  },
  keyDigitText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600',
  },
  keyLabel: {
    fontSize: 14,
    color: Palette.textMuted,
  },
  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    alignSelf: 'center',
    backgroundColor: Palette.orange,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },
  closeText: {
    color: Palette.navy,
    fontWeight: 'bold',
  },
});
