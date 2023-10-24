//asenkron aksiyon

import axios from "axios";

export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      //apiden gelen verileri reducer a aktarma
      dispatch({
        type: "SET_PRODUCT",
        payload: res.data,
      })
    )
    .catch((err) =>
      //hata olursa reducer a hatayi gonderme
      dispatch({
        type: "SET_ERROR",
        payload: err,
      })
    );
};
