import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  images,  // Change to images
  alt,
  imgStart,
  ToLink
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                {/* <Link to={ToLink}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                {Array.isArray(images) && images.length > 0 ? (
                  <div style={{ display: 'flex' }}>
                    {images.map((image, index) => (
                      <img key={index} src={image} alt={alt} className='home__hero-img' style={{ width: '50%' }} />
                    ))}
                  </div>
                ) : (
                  <img src={images} alt={alt} className='home__hero-img' />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
