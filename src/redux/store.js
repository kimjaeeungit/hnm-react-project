import productReducer from './reducers/productSlice';
import authenticateReducer from './reducers/authenticateReducer';
import { configureStore } from '@reduxjs/toolkit';
// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
