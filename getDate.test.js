const { getDate } = require('./businessLogic.js');
const moment = require('moment');
describe('getDate', () => {
    test.each`
      startDate              | durationHours | expectedDate
      ${'29/08/2020, 15:00'} | ${'1'}        | ${'31/08/2020, 11:00'}
      ${'01/08/2020, 14:00'} | ${'1'}        | ${'03/08/2020, 11:00'}
      ${'15/05/2020, 18:00'} | ${'74'}       | ${'28/05/2020, 11:00'}
      ${'27/01/2021, 18:00'} | ${'734'}      | ${'21/05/2021, 14:00'}
      ${'03/04/2019, 19:30'} | ${'80'}       | ${'16/04/2019, 18:30'}
    `(
        'Converts working hours to the date when the work is ready',
        ({ startDate, durationHours, expectedDate }) => {
            const start = moment(startDate, 'DD/MM/YYYY HH:mm').valueOf();
            const expected = new Date(moment(expectedDate,'DD/MM/YYYY HH:mm').valueOf());
            expect(getDate(durationHours, start)).toStrictEqual(
                expected,
            );
        },
    );
});
