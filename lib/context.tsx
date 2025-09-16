import { TLife, TProgression, TSetter, TWorld } from "@/constants/Definitions";
import { initialLife, initialProgression, initialWorld } from "@/constants/Initial";
import { createContext, FC, ReactNode, useContext, useState } from "react";

interface ProviderProps { children: ReactNode }

//LIFE CONTEXT
type TLifeContext = [TLife, TSetter<TLife>];
const LifeContext = createContext<TLifeContext | undefined>(undefined);

export const LifeProvider: FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useState<TLife>(initialLife);

    return (
        <LifeContext.Provider value={[state, dispatch]}>
            {children}
        </LifeContext.Provider>
    )
}

export const useLife = (): TLifeContext => useContext(LifeContext as React.Context<TLifeContext>);

//WORLD CONTEXT
type TWorldContext = [TWorld, TSetter<TWorld>];
const WorldContext = createContext<TWorldContext | undefined>(undefined);

export const WorldProvider: FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useState<TWorld>(initialWorld);

    return (
        <WorldContext.Provider value={[state, dispatch]}>
            {children}
        </WorldContext.Provider>
    )
}

export const useWorld = (): TWorldContext => useContext(WorldContext as React.Context<TWorldContext>);

//PROGRESSION CONTEXT
type TProgressionContext = [TProgression, TSetter<TProgression>];
const ProgressionContext = createContext<TProgressionContext | undefined>(undefined);

export const ProgressionProvider: FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useState<TProgression>(initialProgression);

    return (
        <ProgressionContext.Provider value={[state, dispatch]}>
            {children}
        </ProgressionContext.Provider>
    )
}

export const useProgression = (): TProgressionContext => useContext(ProgressionContext as React.Context<TProgressionContext>);