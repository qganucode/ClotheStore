import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts";
import Category from "../../components/category/Category";
import Contact from "../../components/contact/Contact";
import { useSelector } from "react-redux";

const Home = () => {
    const userData = useSelector(state => state.userProfile);
    const userCart = useSelector(state => state.cart);
    console.log(userCart)
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type='featured'/>
            <Category />
            <FeaturedProducts type='trending'/>
            <Contact />
        </div>
    )
}

export default Home;