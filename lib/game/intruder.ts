//import constants
import { icons } from "@/constants/Beach";
import { TIcon } from "@/constants/Definitions";
//import lib
import { getRandomNumber } from "@/lib/random";
import { getNumberIcons } from "@/lib/window";

export const getFind = (pair: TIcon) => {
    if (pair.mirrorX) return {...pair, style: {transform: [{ scaleY: -1 }]}}
    
    return {...pair, style: {transform: [{ scaleX: -1 }]}}
}

export const intruderPairGame = () => {
    const length = getNumberIcons();

    const index = getRandomNumber(0, length-1);
    const pair = icons[getRandomNumber(0, icons.length-1)];

    return {
        length,
        index,
        common: pair,
        find: getFind(pair)
    };
}