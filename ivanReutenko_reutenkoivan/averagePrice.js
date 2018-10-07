function getAveragePrice(buff){
	buff.forEach(function(item, i){
		let avaragePrice = (item.firstPrice + item.secondPrice)/2;
		average[i] ={
			"id" : item.id,
			"name" : item.name,
			"avaragePrice" : avaragePrice
		}
	})
}

console.log(goods);
const average = [];
getAveragePrice(goods);
console.log(average);
