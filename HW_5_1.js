var user = {
    name: 'Kate',
    age: 37,
    city: 'Kyiv'};
    
function getInfo(user) {
for (let key in user) {
 console.log(key +': '+ user[key])};
};
console.log(getInfo(user)); // Правильна інформація про об'єкт
user.prop = 'Has cat'; // Додали властивість до об'єкта
console.log(getInfo(user));  // Виводить всі властивості, включаючи щойно додану.