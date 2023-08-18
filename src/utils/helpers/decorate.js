export const textShortener = (text, characterCutOff = 10) => {
    return text.slice(0, characterCutOff).concat('...');
};

export const textCutter = (text) => {
    return text.split('.')[0]
};