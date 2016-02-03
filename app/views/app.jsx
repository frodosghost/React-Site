var React = require('react');
var ReactDOM = require('react-dom');
var Posts = require('../components/post');

module.exports = React.createClass({
  render: function() {
    return <div className="medium-8 columns">
        <Posts
            posts={this.props.posts}
        />
    </div>;
  }
});
