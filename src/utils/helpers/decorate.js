export const textShortener = (text, characterCutOff = 10) => {
    return text.slice(0, characterCutOff).concat('...');
};