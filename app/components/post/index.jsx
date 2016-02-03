var React = require('react');
var moment = require( 'moment' );
var Post = require('./post.jsx');

module.exports = React.createClass( {

    render: function() {
        return <div className="post-list">
            {this.props.posts.map(function(post, index){
                return <Post key={index}
                    date={post.date} />;
            }.bind(this))}
        </div>;
    }

} );
