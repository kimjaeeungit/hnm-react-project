function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/kimjaeeungit/hnm-react-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('dataall', data);
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/kimjaeeungit/hnm-react-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
    dispatch({ type: 'GET_PRODUCT_DETAIL_SUCCESS', payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
