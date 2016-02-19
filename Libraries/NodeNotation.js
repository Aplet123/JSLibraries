/*================================================
=            NodeNotation by Un Known            =
================================================*/

/*----------  Log the loading to the console  ----------*/

console.log("NodeNotation : Loading...");

/*----------  Create node object for get and send methods  ----------*/

var node = {};

/*----------  Create node.send() method  ----------*/

node.send = (function() {
    var nodes = {};
    return function(name, value, noSend) { //The parameter noSend is purely there for this library, you do not have to fill it in.
        var no = noSend;
        if (no !== true && no !== false) {
            no = false;
        }
        if (no === false) {
            nodes[name] = value;
            return nodes;
        } else {
            return nodes;
        }
    };
})();

/*----------  Create node.get() method  ----------*/

node.get = function(name) {
    var nodes = node.send("", "", true);
    return nodes[name];
};

/*----------  Create node.list() method  ----------*/

node.list = function() {
    var nodes = node.send("","",true);
    return nodes;
};

/*----------  Log the loading to the console  ----------*/

console.log("NodeNotation : Done loading! Ready to use!");

/*----------  Insert "about"  ----------*/

console.log("NodeNotation JS Library by Un Known");
