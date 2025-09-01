import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];
type FontAwesomeName = ComponentProps<typeof FontAwesome6>['name'];

interface IIcon {
  color: string;
  size?: number;
} 

interface IMaterialIcon extends IIcon {
  type?: 'material';
  name: MaterialIconName;
}

interface IFontAwesomeIcon extends IIcon {
  type: 'fontAwesome';
  name: FontAwesomeName;
}

type TIcon = IMaterialIcon | IFontAwesomeIcon;

export function Icon({
  name,
  color,
  size = 24,
  type = 'material'
}: TIcon) {
  if (type === 'fontAwesome') return <FontAwesome6 name={name} size={size} color={color} />

  return <MaterialIcons name={name} size={size} color={color} />;
}
