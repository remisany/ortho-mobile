//import constants
import { intruderPairList } from "@/constants/Beach";
//import lib
import { getRandomNumber } from "@/lib/random";

export const intruderPairGame = () => {
    const index = getRandomNumber(1, intruderPairList.length);
    const pair = intruderPairList[index];
}