import { worldColors } from "@/constants/Colors";
import { Dispatch, SetStateAction } from "react";

export type TWorldColor = {light: string, dark: string}

export type TColor = {
    text: string,
    background: string,
    border: string,
    red: string
}

export type TColors = {
    light: TColor,
    dark: TColor
}

export type TIcon = {
    url: string,
    mirrorY?: boolean,
    mirrorX?: boolean,
}

export type TIcons = TIcon[];

export type TUrl = '/intruder/pair';
export type THref = '/'

//CONTEXT
export type TSetter<T> = Dispatch<SetStateAction<T>>;

export type TProgression = {current: number, last: number};

export type TLife = number;

export type TCorrection = number;

export type TWorld = keyof typeof worldColors;