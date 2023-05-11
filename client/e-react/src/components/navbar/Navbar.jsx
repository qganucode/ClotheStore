import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Cart from '../cart/Cart';
import Favourite from '../favourite/Favourite';
import { userData } from '../../helper';
import './navbar.scss';

const Navbar = () => {
    let user = userData();
    const [open,setOpen] = useState(false);
    const [openFavourite,setOpenFavourite] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        user = userData();
        setOpen(false);
        setOpenFavourite(false);
    },[navigate])

    const handleClickCart = () => {
        if(user) {
            setOpen(!open);
            setOpenFavourite(false);
        } else {
            setOpen(false);
            navigate('/login');
        }
    }

    const handleClickFavourite = () => {
        if(user) {
            setOpenFavourite(!openFavourite);
            setOpen(false);
        } else {
            setOpenFavourite(false);
            navigate('/login');
        }
    }
    const products = useSelector(state => state.cart.products);
    const productsFavourite = useSelector(state => state.favourite.products)
    return (
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/images/en.png" alt="eng-flag" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/2'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Man</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to='/'>LQSTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Store</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/logout'>Log out</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <Link className='link' to='/profile'>
                            <PersonOutlineIcon />
                        </Link>
                        <div className="favouriteIcon" onClick={handleClickFavourite}>
                            <FavoriteBorderIcon />
                            <span>{productsFavourite.length}</span>
                        </div>
                        <div className="cartIcon" onClick={handleClickCart}>
                            <ShoppingCartCheckoutIcon/>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
            {openFavourite && <Favourite />}
        </div>
    )
}

export default Navbar;