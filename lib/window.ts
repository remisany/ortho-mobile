import { heightTopBar, iconMargin, iconSize, marginS } from '@/constants/Common';
import { Dimensions } from 'react-native';

export const getNumberIcons = () => {
    const { width, height } = Dimensions.get('window');
    
    const totalIconSize = iconSize + iconMargin * 2;
    const iconsPerRow = Math.floor((width - 2 * marginS) / totalIconSize);
    const iconsPerColumn = Math.floor((height - 2 * marginS - heightTopBar) / totalIconSize);
    
    return iconsPerRow * iconsPerColumn;
}