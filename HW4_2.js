

/// pad

var str = 'qwerty';
var symbol = '+';
var count = 8;
var toStart = true;
function pad (str,symbol,count,toStart){
let add = count-str.length;
let repeatSymbol = symbol.repeat(add);
    if(add<=0) {
        console.log(str);
    } else {
        if (toStart == true) {
            console.log(repeatSymbol.concat(str))
        } else {
            console.log(str.concat(repeatSymbol))
        }

    }};
pad(str,symbol,count,toStart);
