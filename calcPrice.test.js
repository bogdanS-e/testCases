const { calcPrice } = require('./businessLogic.js');
describe('calcPrice', () => {
    test.each`
      length      | language | result
      ${21}       | ${'ua'}  | ${'50.00'}
      ${593}      | ${'rus'} | ${'50.00'}
      ${1702}     | ${'ua'}  | ${'85.10'}
      ${3347}     | ${'en'}  | ${'401.64'}
      ${938818}   | ${'ua'}  | ${'46940.90'}
      ${1004400}  | ${'en'}  | ${'120528.00'}
      ${10454000} | ${'rus'} | ${'522700.00'}
    `(
        'Finds the cost of the processed text from textarea',
        ({ length, language, result }) => {
            expect(calcPrice({ totalLength: length, translateToLang: language })).toBe(
                result,
            );
        },
    );
    //////////////////////////////////////////////////////////////////////////////////////////////
    test.each`
      length      | language | fileType   | result
      ${21}       | ${'ua'}  | ${'.txt'}  | ${'50.00'}
      ${593}      | ${'en'}  | ${'.doc'}  | ${'120.00'}
      ${1702}     | ${'ua'}  | ${'.pdf'}  | ${'102.12'}
      ${3347}     | ${'en'}  | ${'.docx'} | ${'401.64'}
      ${938818}   | ${'ua'}  | ${'.txt'}  | ${'56329.08'}
      ${1004400}  | ${'en'}  | ${'.html'} | ${'144633.60'}
      ${10454000} | ${'rus'} | ${'.doc'}  | ${'522700.00'}
    `(
        'Finds the cost of the processed text from file',
        ({ length, language, fileType, result }) => {
            expect(calcPrice({ totalLength: length, fileType: fileType, translateToLang: language })).toBe(
                result,
            );
        },
    );
});