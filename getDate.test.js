const {getDate} = require('./businessLogic.js');
test('Converts working hours to the date when the work is ready', () => {
    expect(getDate(1,new Date(2020,8,29,14,30)).toString().substring(0,21)).toStrictEqual('Tue Sep 29 2020 15:30');
    //start date 2020.08.29 14:30
    //durationHours = 1
    //expected date 2020.08.29 15:30

    expect(getDate(1,new Date(2020,8,1,14)).toString().substring(0,21)).toStrictEqual('Tue Sep 01 2020 15:00');
    //start date 2020.08.01 14:00
    //durationHours = 1
    //expected date 2020.08.01 15:00

    expect(getDate(74,new Date(2020,8,1,14)).toString().substring(0,21)).toStrictEqual('Fri Sep 11 2020 16:00');
    //start date 2020.08.01 14:00
    //durationHours = 74
    //expected date 2020.08.11 16:00

    expect(getDate(794,new Date(2020,10,1,18,30)).toString().substring(0,21)).toStrictEqual('Thu Mar 04 2021 12:30');
    //start date 2020.08.01 14:00
    //durationHours = 794
    //expected date 2021.03.04 12:30
});
