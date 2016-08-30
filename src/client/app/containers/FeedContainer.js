import { connect } from 'react-redux';
import { toggleItem } from '../redux/actions';
import Feed from '../components/Feed';

/**
 * Sort the feed items according to the given filter
 * @param  {array} items    - the items to sort
 * @param  {string} filter  - the filter to use
 * @return {array}          - the sorted items
 */
const getSortedItems = (items, order) => {
  switch (order) {
    case 'SORT_NEW':
      return items.sort(sortByDate);
    case 'SORT_OLD':
      return items.sort(sortByDate).reverse();
  }
};

/**
 * Show or hide items based on a filter.
 */
const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items;
  }
};

/**
 * Sort function for comparing items by date
 */
function sortByDate (a, b) {
  if (a.date < b.date) return -1;
  if (a.date > b.date) return 1;
  return 0;
}

/**
* Transforms the current store state into the props we want to pass
* to the presentational component
*/
const mapStateToProps = (state) => {
  let items = getVisibleItems(state.items, state.visibilityFilter);
  items = getSortedItems(items, state.sortOrder);
  return {
    items
  };
}

/**
 * Inject properties that will dispatch actions
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleItem(id))
    }
  }
}

/**
 * Create the FeedContainer component
 */
const FeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default FeedContainer;
