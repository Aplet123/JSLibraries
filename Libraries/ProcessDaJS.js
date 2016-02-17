/*===============================================
=            ProcessDaJS by Un Known            =
===============================================*/

/*----------  Create processDaJS object for methods  ----------*/

var processDaJS = {};

/*----------  Create randomNumber() method  ----------*/

processDaJS.randomNumber = function(min, max) {
    var num = Math.round(Math.random() * (max - min)) + min;
    return num;
};

/*----------  Create randomArray() method  ----------*/

processDaJS.randomArray = function(array) {
    var r = randomNumber(0, array.length - 1);
    return array[r];
};

/*----------  Create mean() method  ----------*/

processDaJS.mean = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum /= array.length;
    return sum;
};

/*----------  Create variance() method  ----------*/

processDaJS.variance = function(array) {
    var num = mean(array);
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += (array[i] - num) * (array[i] - num);
    }
    sum /= (array.length - 1);
    return sum;
};

/*----------  Create biasVariance() method  ----------*/

processDaJS.biasVariance = function(array) {
    var num = mean(array);
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += (array[i] - num) * (array[i] - num);
    }
    sum /= array.length;
    return sum;
};

/*----------  Create stringSplit() method  ----------*/

processDaJS.stringSplit = function(string) {
    var array = [string];
    var arrayString = array.join("");
    var subsetString = "";
    for (i = 0; i < arrayString.length; i++) {
        subsetString = arrayString.substring(i, i + 1);
        array = array.concat([subsetString]);
    }
    return array;
};

/*----------  Create realShift() method  ----------*/

processDaJS.realShift = function(array) {
    var a = array;
    var b = a.shift();
    a.push(b);
    return a;
};

/*----------  Alias rNumber() method as randomNumber() method  ----------*/

var rNumber = randomNumber;

/*----------  Alias rNum() method as randomNumber() method  ----------*/

var rNum = randomNumber;

/*----------  Alias rArray() method as randomArray() method  ----------*/

var rArray = randomArray;

/*----------  Alias rArr() method as randomArray() method  ----------*/

var rArr = randomArray;

/*----------  Alias bVariance() method as biasVariance() method  ----------*/

var bVariance = biasVariance;

/*----------  Alias sSplit() method as stringSplit() method  ----------*/

var sSplit = stringSplit;

/*----------  Alias sSpl() method as stringSplit() method  ----------*/

var sSpl = stringSplit;

/*----------  Alias rShift() method as realShift() method  ----------*/

var rShift = realShift;
