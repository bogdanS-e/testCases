const {calcPrice} = require('./businessLogic.js');
test('Finds the cost of the processed text in Ukrainian and Russian. Text from textarea', () => {
  expect(calcPrice({ totalLength: 21, translateToLang: 'ua' })).toBe('50.00');
  expect(calcPrice({ totalLength: 593, translateToLang: 'rus' })).toBe('50.00');
  expect(calcPrice({ totalLength: 1702, translateToLang: 'ua' })).toBe('85.10');
  expect(calcPrice({ totalLength: 3347, translateToLang: 'rus' })).toBe('167.35');
  expect(calcPrice({ totalLength: 938818, translateToLang: 'ua' })).toBe('46940.90');
});
test('Finds the cost of the processed text in Ukrainian and Russian. Text from file', () => {
    expect(calcPrice({ totalLength: 21,fileType: '.txt', translateToLang: 'ua' })).toBe('50.00');
    expect(calcPrice({ totalLength: 593,fileType: '.doc', translateToLang: 'rus' })).toBe('50.00');
    expect(calcPrice({ totalLength: 1702,fileType: '.txt', translateToLang: 'ua' })).toBe('102.12');
    expect(calcPrice({ totalLength: 3347, fileType: '.docx', translateToLang: 'rus' })).toBe('167.35');
    expect(calcPrice({ totalLength: 938818, fileType: '.pdf', translateToLang: 'ua' })).toBe('56329.08');
});
test('Finds the cost of the processed text in English. Text from textarea', () => {
    expect(calcPrice({ totalLength: 21, translateToLang: 'en' })).toBe('120.00');
    expect(calcPrice({ totalLength: 593, translateToLang: 'en' })).toBe('120.00');
    expect(calcPrice({ totalLength: 1702, translateToLang: 'en' })).toBe('204.24');
    expect(calcPrice({ totalLength: 3347, translateToLang: 'en' })).toBe('401.64');
    expect(calcPrice({ totalLength: 843486, translateToLang: 'en' })).toBe('101218.32');
});
test('Finds the cost of the processed text in English. Text from file', () => {
    expect(calcPrice({ totalLength: 21,fileType: '.txt', translateToLang: 'en' })).toBe('120.00');
    expect(calcPrice({ totalLength: 593,fileType: '.doc', translateToLang: 'en' })).toBe('120.00');
    expect(calcPrice({ totalLength: 1702,fileType: '.txt', translateToLang: 'en' })).toBe('245.09');
    expect(calcPrice({ totalLength: 3347, fileType: '.docx', translateToLang: 'en' })).toBe('401.64');
    expect(calcPrice({ totalLength: 938818, fileType: '.pdf', translateToLang: 'en' })).toBe('135189.79');
});