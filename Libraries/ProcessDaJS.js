/*===============================================
=            ProcessDaJS by Un Known            =
===============================================*/

/*----------  Log the loading to the console  ----------*/

console.log("ProcessDaJS : Loading...");

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

/*----------  Create stringToArray() method  ----------*/

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

/*----------  Create playAudio() method  ----------*/

processDaJS.playAudio = function(src, start, end) {
    var audio = document.createElement("audio");
    audio.src = src;
    audio.currentTime = start;
    audio.autoplay = true;
    document.body.appendChild(audio);
    window.setTimeout(function() { document.body.removeChild(audio); }, (end - start) * 1000);
};

/*----------  Alias rNumber() method as randomNumber() method  ----------*/

processDaJS.rNumber = processDaJS.randomNumber;

/*----------  Alias rNum() method as randomNumber() method  ----------*/

processDaJS.rNum = processDaJS.randomNumber;

/*----------  Alias rArray() method as randomArray() method  ----------*/

processDaJS.rArray = processDaJS.randomArray;

/*----------  Alias rArr() method as randomArray() method  ----------*/

processDaJS.rArr = processDaJS.randomArray;

/*----------  Alias bVariance() method as biasVariance() method  ----------*/

processDaJS.bVariance = processDaJS.biasVariance;

/*----------  Alias sSplit() method as stringSplit() method  ----------*/

processDaJS.sSplit = processDaJS.stringSplit;

/*----------  Alias sSpl() method as stringSplit() method  ----------*/

processDaJS.sSpl = processDaJS.stringSplit;

/*----------  Alias rShift() method as realShift() method  ----------*/

processDaJS.rShift = processDaJS.realShift;

/*----------  Alias stringArray() method as stringToArray() method  ----------*/

processDaJS.stringArray = processDaJS.stringToArray;

/*----------  Alias strArray() method as stringToArray() method  ----------*/

processDaJS.strArray = processDaJS.stringToArray;

/*----------  Alias strArr() method as stringToArray() method  ----------*/

processDaJS.strArr = processDaJS.stringToArray;

/*----------  Alias pAudio() method as playAudio() method  ----------*/

processDaJS.pAudio = processDaJS.playAudio;

/*----------  Alias pAud() method as playAudio() method  ----------*/

processDaJS.pAud = processDaJS.playAudio;

/*----------  Log the loading to the console  ----------*/

console.log("ProcessDaJS : Done loading! Ready to use!");

/*----------  Insert "about"  ----------*/

console.log("ProcessDaJS JS Library by Un Known");
