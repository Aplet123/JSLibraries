/*================================================
=            NodeNotation by Un Known            =
================================================*/

/*----------  Enter strict mode  ----------*/

"use strict";

/*----------  Log the loading to the console  ----------*/

var loadStart = new Date();
loadStart = loadStart.getTime();
console.log("NodeNotation : Loading...");

/*----------  Create node object for get and send methods  ----------*/

var node = {};

/*----------  Create node.send() method  ----------*/

node.send = (function() {
    var nodes = {};

/*----------  Create node.get() method  ----------*/

    node.get = function(name) {
        return nodes[name];
    };

/*----------  Create node.list() method  ----------*/

    node.list = function() {
        return nodes;
    };
    return function(name, value) { //The parameter noSend is purely there for this library, you do not have to fill it in.
            nodes[name] = value;
            return nodes;
    };
})();

/*----------  Log the loading to the console  ----------*/

var loadEnd = new Date();
loadEnd = loadEnd.getTime();
console.log("NodeNotation : Done loading! Ready to use! Elapsed loading time(ms): " + String(loadEnd - loadStart));

/*----------  Insert "about"  ----------*/

console.log("NodeNotation JS Library by Un Known");
