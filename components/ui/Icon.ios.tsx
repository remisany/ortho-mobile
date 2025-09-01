import { SymbolView, SymbolViewProps } from 'expo-symbols';

export function Icon({
  name,
  color,
  size = 24,
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
}) {
  return (
    <SymbolView
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
      ]}
    />
  );
}
