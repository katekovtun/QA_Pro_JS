var services = {
 "Стрижка": "60 грн",
 "Гоління": "80 грн",
 "Миття голови": "100 грн"
  
};
services['Розбити скло'] = "300 грн";
//console.log(services);

function price() {
    var total = 0;
    for (var service in services) {
      total += parseInt(services[service]);    
    }
    return total;
  };
console.log('Загальна вартість послуг: ' + price() + ' грн');

function minPrice() {
    var min = Infinity; 
    for (var service in services) {
      min = Math.min(min, parseInt(services[service]));  
    }
    return min;
  };
console.log('Мінімальна вартість послуг: ' + minPrice() + ' грн');

function maxPrice() {
    var max = 0;
    for (var service in services) {
      max = Math.max(max, parseInt(services[service]));
    }
    return max;
  };
console.log('Максимальна вартість послуг: ' + maxPrice() + ' грн');
