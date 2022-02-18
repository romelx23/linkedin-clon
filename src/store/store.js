import { applyMiddleware, combineReducers, compose, configureStore, createAsyncThunk, createStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { authReducer } from '../reducers/authReducer';
import { postReducer } from '../reducers/postRducer';
import { toggleReducer } from '../reducers/toggleReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducere';
// import logger from 'redux-logger'

const preloadedState = {
  // todos: [
  //   {
  //     text: 'Eat food',
  //     completed: true,
  //   },
  //   {
  //     text: 'Exercise',
  //     completed: false,
  //   },
  // ],
  // visibilityFilter: 'SHOW_COMPLETED',
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers=combineReducers({
  counter: counterReducer,
  toggle:toggleReducer,
  auth:authReducer,
  post:postReducer,
  ui:uiReducer,
})

// const thunk=createAsyncThunk()

// export const store = configureStore({
//   reducer: reducers,
//   // middleware: [thunk],
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//    // Ignore these action types
//    ignoredActions: ['post/action/type'],
//    // Ignore these field paths in all actions
//    ignoredActionPaths: ['meta.arg', 'payload.post'],
//    // Ignore these paths in the state
//    ignoredPaths: ['post.posts'],
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState,
// });

export const store=createStore(
  reducers,
  composeEnhancers(
      applyMiddleware(thunk)
  )
  );