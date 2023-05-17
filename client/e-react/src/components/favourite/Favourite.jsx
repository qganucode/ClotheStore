import { useDispatch, useSelector } from "react-redux";
import {
  removeFavouriteItem,
  resetFavourite,
} from "../../redux/favouriteReducer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./favourite.scss";
import { addToCart } from "../../redux/cartReducer";

const Favourite = () => {
  const favourites = useSelector((state) => state.favourite);
  const favouriteUser = favourites[favourites.userId];
  const dispatch = useDispatch();
  return (
    <div className='favourite'>
      <h1>Products in your favourite</h1>
      {favouriteUser?.items?.map((item, index) => (
        <div className='item' key={index}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 30)}</p>
          </div>
          <DeleteOutlineIcon
            className='delete'
            onClick={() => dispatch(removeFavouriteItem(item.id))}
          />
          <AddShoppingCartIcon
            className='addCart'
            onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.title,
                  desc: item.desc,
                  price: item.price,
                  img: item.img,
                  quantity: item.quantity,
                })
              )
            }
          />
        </div>
      ))}
      <span className='reset' onClick={() => dispatch(resetFavourite())}>
        Reset Favourite
      </span>
    </div>
  );
};

export default Favourite;
