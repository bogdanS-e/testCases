function calcPrice({ totalLength, fileType, translateToLang = 'ua' } = {}) {
    const validTypes = ['.doc', '.docx', '.rtf'];
    const valueOfSymbol = translateToLang === 'en' ? 0.12 : 0.05;
    const minPrice = translateToLang === 'en' ? 120 : 50;
    let totalPrice = totalLength * valueOfSymbol;
    if (fileType) {
        if (!validTypes.includes(fileType)) {
            totalPrice += totalPrice * 0.2;
        }
    }
    if (totalPrice < minPrice)
        totalPrice = minPrice;
    return totalPrice.toFixed(2);
}
function calcTerm({ totalLength, fileType, translateToLang = 'ua' } = {}) {
    const validTypes = ['.doc', '.docx', '.rtf'];
    const symbolPerHour = translateToLang === 'en' ? 333 : 1333;
    const minTerm = 1;
    let totalTerm = 0.5 + totalLength / symbolPerHour;
    if (fileType) {
        if (!validTypes.includes(fileType)) {
            totalTerm += totalTerm * 0.2;
        }
    }
    if (totalTerm < minTerm)
        totalTerm = minTerm;
    totalTerm = Math.ceil(+totalTerm);
    return totalTerm;
}
function getDate(totalTerm,startDate) {
    const date = new Date(startDate);
    let termCounter = totalTerm;
    let readyDate;
    do {
        if (date.getDay() >= 1 && date.getDay() <= 5) {
            if (date.getHours() >= 10 && date.getHours() < 19) {
                if (termCounter === 0) {
                    readyDate = date;
                    break;
                }
                termCounter -= 1;
                date.setHours(date.getHours() + 1);
            } else {
                date.setHours(date.getHours() + 1);
            }
        } else {
            date.setHours(date.getHours() + 1);
        }
    } while (true);
    return readyDate;
}
module.exports = {calcPrice:calcPrice,calcTerm:calcTerm,getDate:getDate};

