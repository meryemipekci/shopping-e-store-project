import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";

export const Basket = () => {
  const state = useSelector((store) => store.basketReducer);
  console.log(state);
  return (
    <div className="row p-2">
      {/* sepette urun varsa */}
      {state.basket.length === 0 && (
        <h3 className="text-center mt-5">Once sepete urun ekleyiniz</h3>
      )}
      {state.basket.length > 0 && (
        <>
          <div className="col-md-9">
            {state.basket.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}
          </div>

          <div className="col-md-3 mt-5">
            <h5>Toplam: ${state.total.toFixed(2)}</h5>

            <button
              onClick={() =>
                alert("odeme tamamlandi, ucret:" + state.total.toFixed(2))
              }
              className="btn btn-success mt-3"
            >
              Alisverisi Tamamla
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Basket;
