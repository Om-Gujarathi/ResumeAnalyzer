import { createStore, combineReducers } from 'redux';

// Example of a simple reducer
const initialState = {
  user: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Combine reducers if you have more
const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export { store };
