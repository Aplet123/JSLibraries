/*===============================================
=            ProcessDaJS by Un Known            =
===============================================*/

/*----------  Log the loading to the console  ----------*/

console.log("ProcessDaJS : Loading...");

/*----------  Create processDaJS.processDaJS object for methods  ----------*/

var processDaJS = {};

/*----------  Create processDaJS.randomNumber() method  ----------*/

processDaJS.randomNumber = function(min, max) {
    var num = Math.round(Math.random() * (max - min)) + min;
    return num;
};

/*----------  Create processDaJS.randomArray() method  ----------*/

processDaJS.randomArray = function(array) {
    var r = randomNumber(0, array.length - 1);
    return array[r];
};

/*----------  Create processDaJS.mean() method  ----------*/

processDaJS.mean = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum /= array.length;
    return sum;
};

/*----------  Create processDaJS.variance() method  ----------*/

processDaJS.variance = function(array) {
    var num = processDaJS.mean(array);
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += (array[i] - num) * (array[i] - num);
    }
    sum /= (array.length - 1);
    return sum;
};

/*----------  Create processDaJS.biasVariance() method  ----------*/

processDaJS.biasVariance = function(array) {
    var num = processDaJS.mean(array);
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += (array[i] - num) * (array[i] - num);
    }
    sum /= array.length;
    return sum;
};

/*----------  Create processDaJS.standardDeviation() method  ----------*/

processDaJS.standardDeviation = function(array) {
    return Math.sqrt(processDaJS.variance(array));
};

/*----------  Create processDaJS.biasStandardDeviation() method  ----------*/

processDaJS.biasStandardDeviation = function(array) {
    return Math.sqrt(processDaJS.biasVariance(array));
};

/*----------  Create processDaJS.gaussianNumber() method  ----------*/

processDaJS.gaussianNumber = function(mean, stDev) {
    window.pop = [];
    var gaussn = 20;
    var arr = [];
    for (var j = 0; j < gaussn; j++) {
        arr.push(processDaJS.randomNumber(-10000, 10000) / 10000);
    }
    var arrn = processDaJS.mean(arr) * arr.length;
    arrn = arrn / 2.58 * stDev + mean;
    return arrn;
};

/*----------  Create processDaJS.median() method  ----------*/

processDaJS.median = function(array) {
    var sorted = array.sort(function(a, b) {
        return a - b;
    });
    if (sorted.length % 2 === 0) {
        return processDaJS.mean([sorted[sorted.length / 2 - 1], sorted[(sorted.length / 2)]]);
    } else {
        return sorted[(sorted.length / 2) + 0.5];
    }
};

/*----------  Create processDaJS.arrayToObject() method  ----------*/

processDaJS.arrayToObject = function(array) {
    var obj = {};
    if (array.length % 2 !== 0) {
        array.push(undefined);
    }
    for (i = 0; i < array.length; i += 2) {
        obj[array[i]] = array[i + 1];
    }
    return obj;
};

/*----------  Create processDaJS.stringSplit() method  ----------*/

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

/*----------  Create processDaJS.realShift() method  ----------*/

processDaJS.realShift = function(array) {
    var a = array;
    var b = a.shift();
    a.push(b);
    return a;
};

/*----------  Create processDaJS.stringToArray() method  ----------*/

processDaJS.stringToArray = function(string, seperator) {
    var comma = string.indexOf(seperator);
    var array = [];
    while (comma != (-1)) {
        var string1 = string.substring(0, comma);
        var string2 = string.substring(comma + 1);
        string = string2;
        array = array.concat([string1]);
        comma = string.indexOf(",");
    }
    array = array.concat([string]);
    return array;
};

/*----------  Create processDaJS.playAudio() method  ----------*/

processDaJS.playAudio = function(src, start, end) {
    var audio = document.createElement("audio");
    audio.src = src;
    audio.currentTime = start;
    audio.autoplay = true;
    document.body.appendChild(audio);
    window.setTimeout(function() { document.body.removeChild(audio); }, (end - start) * 1000);
};

/*----------  Alias processDaJS.rNumber() method as processDaJS.randomNumber() method  ----------*/

processDaJS.rNumber = processDaJS.randomNumber;

/*----------  Alias processDaJS.rNum() method as processDaJS.randomNumber() method  ----------*/

processDaJS.rNum = processDaJS.randomNumber;

/*----------  Alias processDaJS.rArray() method as processDaJS.randomArray() method  ----------*/

processDaJS.rArray = processDaJS.randomArray;

/*----------  Alias processDaJS.rArr() method as processDaJS.randomArray() method  ----------*/

processDaJS.rArr = processDaJS.randomArray;

/*----------  Alias processDaJS.bVariance() method as processDaJS.biasVariance() method  ----------*/

processDaJS.bVariance = processDaJS.biasVariance;

/*----------  Alias processDaJS.stDeviation() method as processDaJS.standardDeviation() method  ----------*/

processDaJS.stDeviation = processDaJS.standardDeviation;

/*----------  Alias processDaJS.stDev() method as processDaJS.standardDeviation() method  ----------*/

processDaJS.stDev = processDaJS.standardDeviation;

/*----------  Alias processDaJS.bStandardDeviation() method as processDaJS.biasStandardDeviation() method  ----------*/

processDaJS.bStandardDeviation = processDaJS.biasStandardDeviation;

/*----------  Alias processDaJS.bStDeviation() method as processDaJS.biasStandardDeviation() method  ----------*/

processDaJS.bStDeviation = processDaJS.biasStandardDeviation;

/*----------  Alias processDaJS.bStDev() method as processDaJS.biasStandardDeviation() method  ----------*/

processDaJS.bStDev = processDaJS.biasStandardDeviation;

/*----------  Alias processDaJS.gNumber() method as processDaJS.gaussianNumber() method  ----------*/

processDaJS.gNumber = processDaJS.gaussianNumber;

/*----------  Alias processDaJS.gNum() method as processDaJS.gaussianNumber() method  ----------*/

processDaJS.gNum = processDaJS.gaussianNumber;

/*----------  Alias processDaJS.arrToObject() method as processDaJS.arrayToObject() method  ----------*/

processDaJS.arrToObject = processDaJS.arrayToObject;

/*----------  Alias processDaJS.arrObject() method as processDaJS.arrayToObject() method  ----------*/

processDaJS.arrObject = processDaJS.arrayToObject;

/*----------  Alias processDaJS.arrObj() method as processDaJS.arrayToObject() method  ----------*/

processDaJS.arrObj = processDaJS.arrayToObject;

/*----------  Alias processDaJS.sSplit() method as processDaJS.stringSplit() method  ----------*/

processDaJS.sSplit = processDaJS.stringSplit;

/*----------  Alias processDaJS.sSpl() method as processDaJS.stringSplit() method  ----------*/

processDaJS.sSpl = processDaJS.stringSplit;

/*----------  Alias processDaJS.rShift() method as processDaJS.realShift() method  ----------*/

processDaJS.rShift = processDaJS.realShift;

/*----------  Alias processDaJS.stringArray() method as processDaJS.stringToArray() method  ----------*/

processDaJS.stringArray = processDaJS.stringToArray;

/*----------  Alias processDaJS.strArray() method as processDaJS.stringToArray() method  ----------*/

processDaJS.strArray = processDaJS.stringToArray;

/*----------  Alias processDaJS.strArr() method as processDaJS.stringToArray() method  ----------*/

processDaJS.strArr = processDaJS.stringToArray;

/*----------  Alias processDaJS.pAudio() method as processDaJS.playAudio() method  ----------*/

processDaJS.pAudio = processDaJS.playAudio;

/*----------  Alias processDaJS.pAud() method as processDaJS.playAudio() method  ----------*/

processDaJS.pAud = processDaJS.playAudio;

/*----------  Log the loading to the console  ----------*/

console.log("ProcessDaJS : Done loading! Ready to use!");

/*----------  Insert "about"  ----------*/

console.log("ProcessDaJS JS Library by Un Known");
