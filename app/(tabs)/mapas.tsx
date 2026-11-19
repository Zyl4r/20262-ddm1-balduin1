import { StyleSheet, View } from 'react-native';

import { InfoCard } from '@/components/overwatch/info-card';
import { OwHeader } from '@/components/overwatch/ow-header';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MAP_HIGHLIGHTS, MAPS, OW_DARK, OW_ORANGE } from '@/constants/overwatch';

export default function MapasScreen() {
  const total = MAPS.reduce((sum, group) => sum + group.maps.length, 0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: OW_DARK, dark: OW_DARK }}
      headerImage={<OwHeader icon="map.fill" title="Mapas" subtitle="Campos de batalha pelo mundo" />}>
      <ThemedView style={styles.intro}>
        <ThemedText type="title">Mapas</ThemedText>
        <ThemedText>
          Os mapas de Overwatch 2 se passam em cidades reais e fictícias ao redor do mundo. Cada mapa
          pertence a um modo de jogo. Aqui estão {total} mapas do rodízio principal.
        </ThemedText>
      </ThemedView>

      <ThemedText type="subtitle">Mapas por modo</ThemedText>
      {MAPS.map((group) => (
        <InfoCard key={group.mode} title={`${group.mode} (${group.maps.length})`}>
          <View style={styles.chips}>
            {group.maps.map((map) => (
              <View key={map} style={styles.chip}>
                <ThemedText style={styles.chipText}>{map}</ThemedText>
              </View>
            ))}
          </View>
        </InfoCard>
      ))}

      <ThemedText type="subtitle">Mapas em destaque</ThemedText>
      {MAP_HIGHLIGHTS.map((map) => (
        <InfoCard key={map.name} title={map.name} caption={map.location}>
          <ThemedText>{map.description}</ThemedText>
        </InfoCard>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  intro: {
    gap: 8,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    borderWidth: 1,
    borderColor: OW_ORANGE,
    backgroundColor: 'rgba(249, 158, 26, 0.08)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  chipText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
