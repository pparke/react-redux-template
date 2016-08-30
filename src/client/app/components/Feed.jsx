/* Feed.jsx */
import React, {PropTypes} from 'react';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  render() {
    return (
      <ul>
        { this.props.items.map(this.renderItem) }
      </ul>
    );
  }

  renderItem ({id, content, extras}) {
    return (
      <FeedItem
        key={id}
        content={content}
        {...extras}
        onClick={() => onItemClick(todo.id)}
      />
    );
  }
};

Feed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default Feed;
