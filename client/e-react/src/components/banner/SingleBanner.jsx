import "./singleBanner.scss";

const SingleBanner = ({ img, title }) => {
  return (
    <div className='singleBanner'>
      <img src={img} alt={title} className='bannerImg' />
      <div className='bannerHeading'>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SingleBanner;
