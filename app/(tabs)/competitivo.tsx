import { StyleSheet, View } from 'react-native';

import { Bullet, InfoCard } from '@/components/overwatch/info-card';
import { OwHeader } from '@/components/overwatch/ow-header';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { COMPETITIVE_TOPICS, OW_DARK, OW_ORANGE, RANKS } from '@/constants/overwatch';
import { Palette } from '@/constants/theme';

export default function CompetitivoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: OW_DARK, dark: OW_DARK }}
      headerImage={
        <OwHeader icon="trophy.fill" title="Competitivo" subtitle="Ranques, divisões e temporadas" />
      }>
      <ThemedView style={styles.intro}>
        <ThemedText type="title">Competitivo</ThemedText>
        <ThemedText>
          O modo Competitivo é onde os jogadores disputam partidas ranqueadas para mostrar sua
          habilidade e subir na escada de ranques a cada temporada.
        </ThemedText>
      </ThemedView>

      <InfoCard title="Ranques" caption="Do mais baixo para o mais alto">
        <View style={styles.ranks}>
          {RANKS.map((rank, index) => (
            <View key={rank.name} style={styles.rankRow}>
              <View style={[styles.rankBadge, { backgroundColor: rank.color }]}>
                <ThemedText style={styles.rankNumber}>{index + 1}</ThemedText>
              </View>
              <ThemedText type="defaultSemiBold">{rank.name}</ThemedText>
              <ThemedText style={styles.divisions}>Divisões 5 → 1</ThemedText>
            </View>
          ))}
          <View style={styles.rankRow}>
            <View style={[styles.rankBadge, styles.top500]}>
              <ThemedText style={styles.rankNumber}>★</ThemedText>
            </View>
            <ThemedText type="defaultSemiBold">Top 500</ThemedText>
            <ThemedText style={styles.divisions}>Ranking por região</ThemedText>
          </View>
        </View>
      </InfoCard>

      {COMPETITIVE_TOPICS.map((topic) => (
        <Collapsible key={topic.title} title={topic.title}>
          {topic.points.map((point) => (
            <Bullet key={point}>{point}</Bullet>
          ))}
        </Collapsible>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  intro: {
    gap: 8,
  },
  ranks: {
    gap: 8,
    marginTop: 4,
  },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rankBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top500: {
    backgroundColor: OW_ORANGE,
  },
  rankNumber: {
    color: Palette.navy,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
  },
  divisions: {
    marginLeft: 'auto',
    fontSize: 13,
    color: Palette.textMuted,
  },
});
