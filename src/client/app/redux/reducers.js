import { combineReducers } from 'redux';
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, SET_VISIBILITY_FILTER, SET_SORT_ORDER, SortOrders, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;
const { SORT_NEW } = SortOrders;

function sortOrder(state = SORT_NEW, action) {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.order;
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function items (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          date: new Date().getTime()
        }
      ];
    case UPDATE_ITEM:
      return state.map((item) => {
        // update only the item with the specified id
        if (item.id === action.id) {
          return Object.assign({}, item, action.changes);
        }
        return item;
      });
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

const appReducer = combineReducers({
  sortOrder,
  visibilityFilter,
  items
})

export default appReducer
