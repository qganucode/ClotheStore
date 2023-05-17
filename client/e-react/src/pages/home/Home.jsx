import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts";
import Category from "../../components/category/Category";
import Contact from "../../components/contact/Contact";

const Home = () => {
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