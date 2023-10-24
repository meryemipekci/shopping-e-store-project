const initialState = {
  basket: [],
  total: 0,
};
//statein nasil degisecegine karar verir
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //sepette bu elemandan varmı ?
      const index = state.basket.findIndex((i) => i.id === action.payload);
      if (index >= 0) {
        //sepette bu urunden varsa
        const clone = [...state.basket];

        //urunun miktarini bir arttir
        clone[index].amount++;

        //store u guncelle
        return {
          basket: clone,
          total: state.total + action.payload.price,
        };
      } else {
        //diziye yeni urun ekle
        const newBasket = state.basket.concat({
          ...action.payload,
          amount: 1,
        });
        //store
        return {
          basket: newBasket,
          total: state.total + action.payload.price,
        };
      }

    case "REMOVE_ITEM":
      const found = state.basket.findIndex((i) => i.id === action.payload.id);
      //eleman sepette ise ve miktari 1den fazlaysa
      if (found >= 0 && action.payload.amount > 1) {
        //miktari 1azalt
        const clone = [...state.basket];

        clone[found].amount--;

        return {
          basket: clone,
          total: state.total - clone[found].price,
        };
      } else {
        console.log("sepetten kaldiriliyor");
        // sepetten kaldir
        const newBasket = state.basket.filter(
          (i) => i.id !== action.payload.id
        );
        //state i guncelle
        return {
          basket: newBasket,
          total: state.total - action.payload.price,
        };
      }

    default:
      return state;
  }
};
