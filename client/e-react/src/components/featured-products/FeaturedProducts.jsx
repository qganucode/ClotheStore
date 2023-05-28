import useFetch from '../../hooks/useFetch';
import Card from '../card/Card';
import './featuredProducts.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const data = [
    //     {
        //         id: 1,
//         img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         title: 'Long Sleeve Graphic T-shirt',
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id: 2,
//         img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         title: 'Coat',
//         isNew: true,
//         price: 12,
//         oldPrice: 19,
//     },
//     {
//         id: 3,
//         img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         title: 'Skirt',
//         price: 12,
//         oldPrice: 19,
//     },
//     {
//         id: 4,
//         img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         title: 'Hat',
//         price: 12,
//         oldPrice: 19,
//     },
// ]
const FeaturedProducts = ({type}) => {
    const { loading, data, error } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)
    console.log(data)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                <Carousel responsive={responsive}>
                    {
                        data?.map((item) => (<Card item={item} key={item.id}/>))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default FeaturedProducts;