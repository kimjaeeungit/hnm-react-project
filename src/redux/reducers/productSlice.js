import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let initialState = {
  productList: [],
  productDetail: null,
  isLoading: false,
  error: null,
};

//ACTION부분
export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/kimjaeeungit/hnm-react-project/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  'product/fetchDetail',
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/kimjaeeungit/hnm-react-project/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCT_SUCCESS':
//       return { ...state, productList: payload.data };
//     case 'GET_PRODUCT_DETAIL_SUCCESS':
//       return { ...state, productDetail: payload.data };

//     default:
//       return { ...state };
//   }
// }
//export default productReducer;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // getAllProducts(state, action) {
    //   state.productList = action.payload.data;
    // },
    // getProductDetail(state, action) {
    //   state.productDetail = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
