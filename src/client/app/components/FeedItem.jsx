/* FeedItem.jsx */
import React, {PropTypes} from 'react';

class FeedItem extends React.Component {
  render () {
    return <li>{this.props.content}</li>;
  }
}

FeedItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
}

export default FeedItem;
