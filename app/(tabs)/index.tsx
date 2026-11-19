import { StyleSheet, View } from 'react-native';

import { InfoCard } from '@/components/overwatch/info-card';
import { OwHeader } from '@/components/overwatch/ow-header';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { HEROES, OW_DARK } from '@/constants/overwatch';
import { Palette } from '@/constants/theme';

export default function PersonagensScreen() {
  const total = HEROES.reduce((sum, group) => sum + group.heroes.length, 0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: OW_DARK, dark: OW_DARK }}
      headerImage={
        <OwHeader icon="person.3.fill" title="Personagens" subtitle="Os heróis e suas funções" />
      }>
      <ThemedView style={styles.intro}>
        <ThemedText type="title">Heróis</ThemedText>
        <ThemedText>
          Overwatch 2 é um jogo de tiro em equipe 5v5. Cada time tem 1 Tanque, 2 de Dano e 2 de
          Suporte. Esta lista apresenta {total} heróis divididos por função; toque em uma função
          para ver os personagens.
        </ThemedText>
      </ThemedView>

      {HEROES.map((group) => (
        <InfoCard
          key={group.role}
          title={`${group.role} (${group.heroes.length})`}
          caption={group.summary}
          accentColor={group.color}>
          <ThemedText style={styles.passive}>
            <ThemedText type="defaultSemiBold">Passiva da função: </ThemedText>
            {group.passive}
          </ThemedText>
          <Collapsible title={`Ver heróis de ${group.role}`}>
            <View style={styles.list}>
              {group.heroes.map((hero) => (
                <View key={hero.name} style={styles.hero}>
                  <ThemedText type="defaultSemiBold" style={{ color: group.color }}>
                    {hero.name}
                  </ThemedText>
                  <ThemedText style={styles.heroText}>{hero.description}</ThemedText>
                </View>
              ))}
            </View>
          </Collapsible>
        </InfoCard>
      ))}

      <ThemedText style={styles.note}>
        Novos heróis são adicionados ao longo das temporadas, então o elenco pode crescer.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  intro: {
    gap: 8,
  },
  passive: {
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    gap: 10,
  },
  hero: {
    gap: 2,
  },
  heroText: {
    fontSize: 14,
    lineHeight: 20,
  },
  note: {
    fontSize: 13,
    color: Palette.textMuted,
    fontStyle: 'italic',
  },
});
