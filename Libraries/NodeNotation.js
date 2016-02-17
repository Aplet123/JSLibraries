/*================================================
=            NodeNotation by Un Known            =
================================================*/

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
