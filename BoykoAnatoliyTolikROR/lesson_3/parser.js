const {
  requestId,
  result: [{
    accountNumber, balance: {
      otb
    }, cards: [{
      expireDate: {
        year
      },
      ucid
    }], overdraftInfo: {
      lastCloseDayOverBalance
    }, bank: {
      id
    }
  }]
} = jsonHomeWork;

console.log(requestId);
