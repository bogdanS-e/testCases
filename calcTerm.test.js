const {calcTerm} = require('./businessLogic.js');
describe('calcTerm', () => {
    test.each`
      length      | language | result
      ${21}       | ${'ua'}  | ${1}
      ${593}      | ${'rus'} | ${1}
      ${1702}     | ${'ua'}  | ${2}
      ${3347}     | ${'en'}  | ${11}
      ${938818}   | ${'ua'}  | ${705}
      ${1004400}  | ${'en'}  | ${3017}
      ${10454000} | ${'rus'} | ${7843}
    `(
        'Finds time (working time) to process text from textarea',
        ({ length, language, result }) => {
            expect(calcTerm({ totalLength: length, translateToLang: language })).toBe(
                result,
            );
        },
    );
    //////////////////////////////////////////////////////////////////////////////////////////////
    test.each`
      length      | language | fileType   | result
      ${21}       | ${'ua'}  | ${'.txt'}  | ${1}
      ${593}      | ${'en'}  | ${'.doc'}  | ${3}
      ${1702}     | ${'ua'}  | ${'.pdf'}  | ${3}
      ${3347}     | ${'en'}  | ${'.docx'} | ${11}
      ${938818}   | ${'ua'}  | ${'.txt'}  | ${846}
      ${1004400}  | ${'en'}  | ${'.html'} | ${3621}
      ${10454000} | ${'rus'} | ${'.doc'}  | ${7843}
    `(
        'Finds time (working time) to process text from file',
        ({ length, language, fileType, result }) => {
            expect(calcTerm({ totalLength: length, fileType: fileType, translateToLang: language })).toBe(
                result,
            );
        },
    );
});