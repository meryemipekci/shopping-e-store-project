//senkron aksiyon fonksiyonu

export function sayiArti() {
  return {
    type: "addCount",
    payload: 1,
  };
}

//asenkron thunk aksiyonu
function getData() {
  return function (dispatch) {
    //asenkrn işlemler
    const data = [];
    // reducer a aktarma
    dispatch({});
  };
}

//kısa yol
const getData2 = () => (dispatch) => {
  //asenkkron işlemler
};
console.log(sayiArti);

/*redux thunk 
  *reduxin middleware(arayazilim ) kutuphanesidir.
  redux ile kulllanildigında asekron işlemlerin daha kolay yonetilmesini saglar
  *gercek dunya uygulamalarında sunucu isteklerinde veritabani sorularinda kullanılır
  *dispatch işleminde reducee veriler aktarmadn once api istekleri yapmamiza olanak saglar
  */
