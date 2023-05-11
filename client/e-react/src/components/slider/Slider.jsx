import './slider.scss';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';

const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
    const dataLength = data.length - 1;
    const [currentSlide,setCurrentSlide] = useState(0);
    const preSlide = () => {
        setCurrentSlide(currentSlide === 0 ? dataLength : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === dataLength ? 0 : (prev) => prev + 1)
    }
    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw )`}}>
                {data.map((imgLink,index) => (<img key={index} src={imgLink} alt="imgSlide" />))}
            </div>
            <div className="icons">
                <div className="icon" onClick={preSlide}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider;