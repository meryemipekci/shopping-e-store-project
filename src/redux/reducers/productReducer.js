// varsayilan degerler
const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};
//statein nasil degisecegine karar verir
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        product: action.payload,
        isLoading: false,
        isError: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
