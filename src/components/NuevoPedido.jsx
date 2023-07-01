import { useReducer } from "react";
import productReducer, {
  initialProductState,
} from "../reducers/productReducer";
import types from "../types";
import "../index.css";

const NuevoPedido = () => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const { products, products2, producto3, cart } = productState;

  return (
    <div className="container">
      {/* TITULO DE LA CABECERA */}
      <div className="header__title">
        <h2 className="header__title--text">
          G o r d i t a s &nbsp;&nbsp; L a &nbsp; C h a t i s !!
        </h2>
      </div>

      <article className="content ">
        <div className="title_carrito">
          <h2>Carrito</h2>

          <span>
            Total= ${" "}
            {cart?.reduce(
              (amount, product) => product.price * product.quantity + amount,
              0
            )}
            .00
          </span>
        </div>

        <p>Gorditas</p>

        <div className="content__burgers">
          {products.map((product) => (
            <div
              key={product.id}
              className="burger"
              style={{ border: "thin solid cyan", color: "yellow" }}
              onClick={() =>
                dispatch({
                  type: types.productAddToCart,
                  payload: product,
                })
              }
            >
              <h3>{product.title}</h3>

              <h5>${product.price}.00</h5>
            </div>
          ))}
        </div>

        <p>Taquitos de Harina</p>
        <div className="content__burgers">
          {products2.map((product) => (
            <div
              key={product.id}
              className="burger"
              style={{ border: "thin solid lavender", color: "pink" }}
              onClick={() =>
                dispatch({
                  type: types.productAddToCart,
                  payload: product,
                })
              }
            >
              <h3>{product.title}</h3>

              <h5>${product.price}.00</h5>
            </div>
          ))}
        </div>

        <p>Bebidas</p>
        <div className="content__burgers">
          {producto3.map((product) => (
            <div
              key={product.id}
              className="burger"
              style={{
                border: "thin solid cyan",
                color: "whitesmoke",
                
              }}
              onClick={() =>
                dispatch({
                  type: types.productAddToCart,
                  payload: product,
                })
              }
            >
              <h3>{product.title}</h3>

              <h5>${product.price}.00</h5>
            </div>
          ))}
        </div>
        <div>
        <p>Pedido</p>
        {cart.map((product) => (
          <div
            key={product.id}
             
            style={{ border: "thin solid yellow" }}
          >
            <div className="container_carrito">
              {product.title}
              <h5>${product.price}.00</h5> <h5>x&nbsp;&nbsp; {product.quantity} </h5>= &nbsp;&nbsp;&nbsp; $
              {product.price * product.quantity}.00
              <div className="botones">
                <button
                  className="removeone"
                  onClick={() =>
                    dispatch({
                      type: types.productRemoveOneFromCart,
                      payload: product.id,
                    })
                  }
                >
                  Eliminar
                </button>{/* <button
                  className="removeall"
                  onClick={() =>
                    dispatch({
                      type: types.productRemoveFromCart,
                      payload: product.id,
                    })
                  }
                >
                  Remove all
                </button> */}
                
              </div>
            </div>
          </div>
        ))}
        </div>
      </article>
        <div className="total2">
            Total= ${" "}
            {cart?.reduce(
              (amount, product) => product.price * product.quantity + amount,
              0
            )}
            .00
          </div>
    </div>
  );
};

export default NuevoPedido;
