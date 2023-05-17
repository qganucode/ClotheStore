import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { loadStripe } from "@stripe/stripe-js";
import makeRequest from "../../makeRequest";
import "./cart.scss";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const cartUser = carts[carts.userId];
  const totalPrice = () => {
    let total = 0;
    cartUser?.items?.forEach((item) => {
      total += item?.quantity * item?.price;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51MziDEFJDcALY6joYIS4wiHL1FxRasJlA1rA4xXpPOUgumdOw7ye4v00SOprnXBMopdvNsGVFzB11TO4Hqv45Hd800AOfqJG8x"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products: cartUser.items,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {cartUser?.items?.map((item, index) => (
        <div className='item' key={index}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item?.img} alt='' />
          <div className='details'>
            <h1>{item?.title}</h1>
            <p>{item?.desc.substring(0, 30)}</p>
            <div className='price'>
              {item?.quantity} x ${item?.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className='delete'
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCESS TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
