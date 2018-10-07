let priceList = '[\
  {\
    "id": 1,\
    "name": "Sprinter 2500",\
    "firstPrice": 8172,\
    "secondPrice": 9273\
  },\
  {\
    "id": 2,\
    "name": "Touareg",\
    "firstPrice": 5856,\
    "secondPrice": 5130\
  },\
  {\
    "id": 3,\
    "name": "Avenger",\
    "firstPrice": 8674,\
    "secondPrice": 3118\
  },\
  {\
    "id": 4,\
    "name": "Tracer",\
    "firstPrice": 8406,\
    "secondPrice": 2382\
  },\
  {\
    "id": 5,\
    "name": "Durango",\
    "firstPrice": 2093,\
    "secondPrice": 6622\
  },\
  {\
    "id": 6,\
    "name": "968",\
    "firstPrice": 7735,\
    "secondPrice": 3681\
  },\
  {\
    "id": 7,\
    "name": "Golf",\
    "firstPrice": 9363,\
    "secondPrice": 7039\
  },\
  {\
    "id": 8,\
    "name": "Z4",\
    "firstPrice": 4827,\
    "secondPrice": 6776\
  },\
  {\
    "id": 9,\
    "name": "LaCrosse",\
    "firstPrice": 3169,\
    "secondPrice": 5229\
  },\
  {\
    "id": 10,\
    "name": "Insight",\
    "firstPrice": 9030,\
    "secondPrice": 9207\
  }\
]'

let data1 = JSON.parse(priceList);
function avaragePrice(data1){
    let newArray = data1;
    for(let i = 0; i < newArray.length; i++){
        let {id, name, firstPrice, secondPrice} = newArray[i];
        let avarage = firstPrice/2 + secondPrice/2;
        newArray[i].avaragePrice = avarage;
        delete newArray[i].firstPrice;
        delete newArray[i].secondPrice;
    }
    return newArray;
}
console.log(avaragePrice(data1));
