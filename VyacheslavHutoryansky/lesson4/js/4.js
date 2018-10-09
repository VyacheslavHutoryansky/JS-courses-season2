let User = {};

Object.defineProperties(User, {
    name: {
        value: 'Вова',
        enumerable: true
    },

    years: {
        value: 35,
        enumerable: true
    },

    business: {
        value: 'Банкір',
        enumerable: true
    },

    userData: {
        get: () => `\n1) Ім'я: ${User.name}. \n2) Вік: ${User.years}. \n3) Рід діяльності: ${User.business}.`
    },

    vizitka: {
        get: () => new Vizitka(User.name, User.business)
    }
});

function Vizitka(name, business) {
    this.name = name;
    this.business = business;
}

User.moreInfoUser = () => {
    User.hobby = 'Програмування';
    User.pet = 'Чіхуахуа';
    return `1) Hobby: ${User.hobby}; \n2) Home pet: ${User.pet}.`;
}

console.log(`Візитка: ${User.userData}`);
console.log(`Бізнес картка - ${User.name}: `);
console.log(User.vizitka);
console.log(`Додаткова інформація:`);
console.log(User.moreInfoUser());
