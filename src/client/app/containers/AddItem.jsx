import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../redux/actions'

class AddItem extends React.Component {
  constructor (props) {
    super(props);
    this.dispatch = props.dispatch;
    this._input = '';
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref={node => {
            this._input = node;
          }} />
          <button type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }

  /**
   * Submit action for form
   */
  onSubmit (e) {
    e.preventDefault();
    // guard against empty submit
    if (!this._input.value.trim()) {
      return;
    }
    // dispatch the addItem action
    this.dispatch(addItem(this._input.value));
    // reset the input to an empty string
    this._input.value = '';
  }
}

export default connect()(AddItem);
