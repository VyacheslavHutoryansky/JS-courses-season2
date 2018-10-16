const {	requestId,
				result:[{	accountNumber, 
									balance:{otb}, 
									cards:[{ucid, 
													expireDate, 
													expireDate:{year}
									}], 
									overdraftInfo:{lastCloseDayOverBalance},
									bank:{id}
				}]
			} = json;

console.log(requestId);
console.log(accountNumber);
console.log(otb);
console.log(ucid);
console.log(expireDate);
console.log(year);
console.log(lastCloseDayOverBalance);
console.log(id);
