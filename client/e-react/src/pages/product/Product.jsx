import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToFavourite } from "../../redux/favouriteReducer";
import useFetch from "../../hooks/useFetch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";

const Product = () => {
  const id = useParams().id;
  const [quantity, setquantity] = useState(1);
  const { loading, data, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img");
  if (data?.attributes?.img) {
    var urlImg = data?.attributes[selectedImg]?.data?.attributes?.url;
  }
  const dispatch = useDispatch();
  return (
    <div className='product'>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=''
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=''
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className='mainImg'>
              <img src={process.env.REACT_APP_UPLOAD_URL + urlImg} alt='' />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button
                onClick={() =>
                  setquantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setquantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className='add'
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data?.attributes?.title,
                    desc: data.attributes?.desc,
                    price: data.attributes?.price,
                    img: data.attributes?.img.data.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className='links'>
              <div
                className='item'
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch(
                    addToFavourite({
                      id: data.id,
                      title: data?.attributes?.title,
                      desc: data.attributes?.desc,
                      price: data.attributes?.price,
                      img: data.attributes?.img.data.attributes?.url,
                      quantity,
                    })
                  )
                }
              >
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className='item'>
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className='info'>
              <span>Vendo: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className='info'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
