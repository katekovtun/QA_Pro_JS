var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emails = arr.filter(function(user) {
    return /^[\w/]+(\.[\w/]+)?@(gmail\.com|yahoo\.com)$/.test(user.email);
}).map(function(user) {
    return user.email;
});

console.log("Підходять: " + emails);