let avaragePriceArray = [];

function NewPrice(id, name, firstPrice, secondPrice) {
  this.id = id;
  this.name = name;
  this.avaragePrice = avarageValue(firstPrice, secondPrice);
}

function avarageValue(val1, val2) {
  return (val1 + val2) / 2;
}

for (var i = 0; i < oldArray.length; i++) {
  let obj = oldArray[i];
  avaragePriceArray[i] = new NewPrice(obj.id, obj.name, obj.firstPrice, obj.secondPrice);
}
