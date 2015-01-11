(function() {
    'use strict';
    window.define(['react'],function(React) {

        var returnObject = {};

        var HelloWorld = React.createClass({
            render: function() {
                return React.createElement('div',null,'Hello World');
            }
        });

        returnObject.bindElement = function(elem) {
            React.render(React.createElement(HelloWorld),elem);
        };

        return returnObject;

    });

}).call(this);
