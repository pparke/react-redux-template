/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';

/*
 * other constants
 */

export const SortOrders = {
  SORT_NEW: 'SORT_NEW',
  SORT_OLD: 'SORT_OLD'
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
};

/*
 * action creators
 */

/**
 * Create a new item, automatically assigns a new id
 * @param content {string} - the content the item stores
 */
let nextItemId = 0;
export function addItem(content) {
  return {
    type: ADD_ITEM,
    id: nextItemId++,
    content
  };
}

/**
 * Update the item specified by id with the given changes
 * @param id {number} - the id of the item to update
 * @param changes {object} - an object containing changes that will be assigned to the item
 */
export function updateItem(id, changes) {
  return {
    type: UPDATE_ITEM,
    id,
    changes
  };
}

/**
 * Remove an item by id
 * @param  {number} id - the id of the item to remove
 */
export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
  };
}

/**
 * Expand or contract the displayed portion of an item
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
export function toggleItem(index) {
  return {
    type: TOGGLE_ITEM,
    index
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
