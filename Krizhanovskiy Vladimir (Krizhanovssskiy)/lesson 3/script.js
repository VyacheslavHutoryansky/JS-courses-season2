window.onload = function () {

    /////  Destruct properties from JSON
    let {requestId,
        result:
        [{
            accountNumber,
            balance: {otb},
            cards:
                [{
                ucid,
                expireDate,
                expireDate: {year}
            }],
            overdraftInfo: {lastCloseDayOverBalance},
            bank: {id}
    }]} = task_1;

    console.log('requestId - ' + requestId);
    console.log('accountNumber - ' + accountNumber);
    console.log('otb - ' + otb);
    console.log('ucid - ' + ucid);
    console.log('expireDate - ' + expireDate);
    console.log('year - ' + year);
    console.log('lastCloseDayOverBalance - ' + lastCloseDayOverBalance);
    console.log('Id - ' + id);



};