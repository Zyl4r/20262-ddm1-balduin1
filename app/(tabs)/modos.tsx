import { StyleSheet } from 'react-native';

import { Bullet, InfoCard } from '@/components/overwatch/info-card';
import { OwHeader } from '@/components/overwatch/ow-header';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { CORE_MODES, EXTRA_MODES, OW_DARK } from '@/constants/overwatch';

export default function ModosScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: OW_DARK, dark: OW_DARK }}
      headerImage={
        <OwHeader icon="gamecontroller.fill" title="Modos" subtitle="Objetivos e formas de jogar" />
      }>
      <ThemedView style={styles.intro}>
        <ThemedText type="title">Modos de jogo</ThemedText>
        <ThemedText>
          Em Overwatch 2 as partidas giram em torno de objetivos, não só de eliminações. Conheça os
          modos de objetivo e as filas disponíveis.
        </ThemedText>
      </ThemedView>

      <ThemedText type="subtitle">Modos de objetivo</ThemedText>
      {CORE_MODES.map((mode) => (
        <InfoCard key={mode.name} title={mode.name}>
          <ThemedText>{mode.objective}</ThemedText>
          <Collapsible title="Como vencer">
            <ThemedText>{mode.howToWin}</ThemedText>
          </Collapsible>
        </InfoCard>
      ))}

      <ThemedText type="subtitle">Filas e modos alternativos</ThemedText>
      <InfoCard title="Onde jogar">
        {EXTRA_MODES.map((mode) => (
          <Bullet key={mode.name}>
            <ThemedText type="defaultSemiBold">{mode.name}: </ThemedText>
            {mode.description}
          </Bullet>
        ))}
      </InfoCard>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  intro: {
    gap: 8,
  },
});
