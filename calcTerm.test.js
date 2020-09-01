const {calcTerm} = require('./businessLogic.js');
test('Finds time (working time) to process text in Ukrainian and Russian. Text from textarea', () => {
    expect(calcTerm({ totalLength: 21, translateToLang: 'ua' })).toBe(1);
    expect(calcTerm({ totalLength: 593, translateToLang: 'rus' })).toBe(1);
    expect(calcTerm({ totalLength: 1702, translateToLang: 'ua' })).toBe(2);
    expect(calcTerm({ totalLength: 3347, translateToLang: 'rus' })).toBe(4);
    expect(calcTerm({ totalLength: 938818, translateToLang: 'ua' })).toBe(705);
});
test('Finds time (working time) to process text in Ukrainian and Russian. Text from file', () => {
    expect(calcTerm({ totalLength: 21,fileType: '.txt', translateToLang: 'ua' })).toBe(1);
    expect(calcTerm({ totalLength: 593, fileType: '.doc', translateToLang: 'rus' })).toBe(1);
    expect(calcTerm({ totalLength: 1702,fileType: '.pdf', translateToLang: 'ua' })).toBe(3);
    expect(calcTerm({ totalLength: 3347, fileType: '.txt',translateToLang: 'rus' })).toBe(4);
    expect(calcTerm({ totalLength: 938818, fileType: '.html',translateToLang: 'ua' })).toBe(846);
});
test('Finds time (working time) to process text in English. Text from textarea', () => {
    expect(calcTerm({ totalLength: 21, translateToLang: 'en' })).toBe(1);
    expect(calcTerm({ totalLength: 593, translateToLang: 'en' })).toBe(3);
    expect(calcTerm({ totalLength: 1702, translateToLang: 'en' })).toBe(6);
    expect(calcTerm({ totalLength: 3347, translateToLang: 'en' })).toBe(11);
    expect(calcTerm({ totalLength: 938818, translateToLang: 'en' })).toBe(2820);
});
test('Finds time (working time) to process text in English. Text from file', () => {
    expect(calcTerm({ totalLength: 21,fileType: '.txt', translateToLang: 'en' })).toBe(1);
    expect(calcTerm({ totalLength: 593,fileType: '.doc', translateToLang: 'en' })).toBe(3);
    expect(calcTerm({ totalLength: 1702,fileType: '.pdf', translateToLang: 'en' })).toBe(7);
    expect(calcTerm({ totalLength: 3347, fileType: '.txt',translateToLang: 'en' })).toBe(13);
    expect(calcTerm({ totalLength: 938818, fileType: '.html',translateToLang: 'en' })).toBe(3384);
});