import { Entypo, Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];
type FontAwesomeName = ComponentProps<typeof FontAwesome6>['name'];
type EntypoName = ComponentProps<typeof Entypo>['name'];
type IoniconsName = ComponentProps<typeof Ionicons>['name'];

interface IIcon {
  color: string;
  size?: number;
  solid?: boolean
} 

interface IMaterialIcon extends IIcon {
  type?: 'material';
  name: MaterialIconName;
}

interface IFontAwesomeIcon extends IIcon {
  type: 'fontAwesome';
  name: FontAwesomeName;
}

interface IEntypo extends IIcon {
  type: 'entypo';
  name: EntypoName;
}

interface IIonicons extends IIcon {
  type: 'ionicons';
  name: IoniconsName;
}

type TIcon = IMaterialIcon | IFontAwesomeIcon | IIonicons ;

export function Icon({
  name,
  color,
  size = 24,
  type = 'material',
  solid = false
}: TIcon) {
  if (type === 'fontAwesome') return <FontAwesome6 name={name} size={size} color={color} solid={solid}/>
  if (type === 'ionicons') return <Ionicons name={name} size={size} color={color}/>

  return <MaterialIcons name={name} size={size} color={color} />;
}
