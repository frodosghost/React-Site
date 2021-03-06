var React = require('react');

module.exports = React.createClass({
  render: function() {

    // We clone the time object itself so the this time is bound to
    // the global app time

    var displayTime = this.props.date.format( 'DD/MM/YYYY' );

    return <div className="blog-post">
        <h3>Awesome blog post title <small>{displayTime}</small></h3>
        <img className="thumbnail" src="http://placehold.it/850x350" />
        <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
        <div className="callout">
            <ul className="menu simple">
                <li><a href="#">Author: Mike Mikers</a></li>
                <li><a href="#">Comments: 3</a></li>
            </ul>
        </div>
    </div>;
  }
});
