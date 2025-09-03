export const getRandomNumber = (min: number, max: number): number => (
    Math.floor(Math.random() * (max - min + 1)) + min
)

export const getFlag = (max: number = 2): boolean => {
    const randomNumber = getRandomNumber(0, max);
    return randomNumber === 0;
}