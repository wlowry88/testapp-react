var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

console.log(App);

if (typeof(window) !== "undefined") {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}
