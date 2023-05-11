import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Category</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="logo">LQstore</div>
                    <div className="copyright">
                        @ Copyright 2023. All rights Reserved
                    </div>
                </div>
                <div className="right">
                    <img src="/images/payment.png" alt="payment" />
                </div>
            </div>
        </div>
    )
}

export default Footer;