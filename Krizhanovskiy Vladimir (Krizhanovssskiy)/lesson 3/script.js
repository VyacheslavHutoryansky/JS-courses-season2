window.onload = function () {

    /////  Destruct properties from JSON

    // const {requestId} = task_1,
    //      {result: [{accountNumber}]} =  task_1,
    //      {result: [{balance: {otb}}]} = task_1,
    //      {result: [{cards: [{ucid}]}]} = task_1,
    //      {result: [{cards: [{expireDate}]}]} = task_1,
    //      {result: [{cards: [{expireDate: {year}}]}]} = task_1,
    //      {result: [{overdraftInfo: {lastCloseDayOverBalance}}]} = task_1,
    //      {result: [{bank: {id}}]} = task_1;

    const {requestId,
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


    //// The function returns a new array with objects.

    const newArray = [];

    function objPrice(id, name, avaragePrice) {
        this.id = id;
        this.name = name;
        this.avaragePrice = avaragePrice;

    }

    for (let i = 0; i < task_2.length; i++) {
        const {id, name, firstPrice, secondPrice} = task_2[i];
        const avaragePrice = (firstPrice + secondPrice) / 2;
        newArray[i] = new objPrice(id, name, avaragePrice);
    }

    console.log(newArray);


};