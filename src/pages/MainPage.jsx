import { useSelector } from "react-redux";
import Card from "../components/Card";

const MainPage = () => {
  const state = useSelector((store) => store.productReducer);
  console.log(state);
  return (
    <div>
      {state.isLoading ? (
        <h4 className="text-center mt-5">Yukleniyor...</h4>
      ) : (
        //yukleme bittiginde hata yoksa calisir
        !state.isError && (
          <div className="d-flex flex-wrap justify-content-md-between gap-5 p-5">
            {state.product.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )
      )}
      {/* hata oldugunda */}
      {state.isError && (
        <div className="text-center mt-5">
          <h2>Uzgunuz bir hata olustu...</h2>
        </div>
      )}
    </div>
  );
};
export default MainPage;
