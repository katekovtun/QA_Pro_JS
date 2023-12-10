

///checkProbabilityTheory(count)

var rnd;
var count=10;
var i=0;
var isEven=0;
var isOdd=0;
function checkProbabilityTheory(count){
do {
    i++ 
    rnd = Math.random();
    rnd *= 1000;
//console.log (rnd)
rnd = Math.round (rnd);
console.log (rnd)
if (rnd%2) {
    isEven++
} else  {
    isOdd++
}
}
while (i<count)
console.log('Кількість згенерованих чисел: ' + count)
console.log('Парних чисел: ' + isEven);
console.log('Не парних чисел: '+ isOdd);
console.log('Відсоток парних до не парних: ' + Math.round((isEven/count)*100) + '%/' + Math.round((isOdd/count)*100) + '%');
}
checkProbabilityTheory(11);