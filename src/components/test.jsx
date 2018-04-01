var Parent = React.createClass({
  render: function() {
    return <div id="parent">Hello Parent<Child></Child></div>;
  }
});

var Child = React.createClass({
  componentDidMount: function() {
    alert('Parent width: ' + this.refs.child.parentNode.clientWidth);
  },
  render: function() {
    return <div ref="child">Hello Child</div>;
  }
});