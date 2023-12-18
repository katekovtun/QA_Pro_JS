
//знайти принаймні шість символів і не містити літери А (великої або малої)

var str = "I don't like tomatoes, because they smell bad.";
var re = /^[^Aa]{6,}$/;
//console.log(re.test(str));
if (re.test(str)) {
    console.log("Correct");
} else {
    console.log("Incorrect");
};
