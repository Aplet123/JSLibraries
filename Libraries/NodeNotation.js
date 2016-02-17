var node = {};
node.send = (function() {
    var nodes = {};
    return function(name, value, noSend) { //The parameter noSend is purely there for this library, you do not have to fill it in.
        var no = noSend;
        if (no !== true || no !== false) {
            no = false;
        }
        if (!no) {
            nodes[name] = value;
            return nodes;
        } else {
            return nodes;
        }
    };
})();
node.get = function(name) {
    var nodes = node.send("", "", true);
    return nodes[name];
};
