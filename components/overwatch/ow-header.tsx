import { StyleSheet, Text, View } from 'react-native';

import { IconSymbol, type IconSymbolName } from '@/components/ui/icon-symbol';
import { OW_DARK, OW_ORANGE } from '@/constants/overwatch';

type Props = {
  icon: IconSymbolName;
  title: string;
  subtitle: string;
};

/** Cabeçalho usado no ParallaxScrollView das telas de Overwatch 2. */
export function OwHeader({ icon, title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.stripe} />
      <IconSymbol name={icon} size={72} color={OW_ORANGE} />
      <Text style={styles.kicker}>OVERWATCH 2</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OW_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 4,
  },
  stripe: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: OW_ORANGE,
  },
  kicker: {
    color: OW_ORANGE,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#C9D3DD',
    fontSize: 14,
    textAlign: 'center',
  },
});
