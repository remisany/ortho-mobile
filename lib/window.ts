import { containerPadding, iconMargin, iconSize } from "@/constants/common";
import { Dimensions } from "react-native";

export const getNumberIcons = () => {
    const { width, height } = Dimensions.get('window');
    
    const totalIconSize = iconSize + iconMargin * 2;
    const iconsPerRow = Math.floor((width - 2 * containerPadding) / totalIconSize);
    const iconsPerColumn = Math.floor((height - 2 * containerPadding) / totalIconSize);
    
    return iconsPerRow * iconsPerColumn;
}